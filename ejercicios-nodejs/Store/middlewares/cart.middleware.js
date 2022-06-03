const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

//Models
const { Cart } = require('../models/cart.model');
const { ProductInCart } = require('../models/productInCart.model');
const { Product } = require('../models/product.model');

const validateUserCart = catchAsync(async (req, res, next) => {

    const { sessionUser } = req;

    const cart = await Cart.findOne({ where: { userId: sessionUser.id, status: 'active' } });

    if(!cart) {

        req.cart = cart;

        return next();
    }

    const productsCart = await ProductInCart.findAll({ where: { cartId: cart.id, status: 'active' } });

        if(cart && productsCart) {

            req.cart = cart;

            return next();

        }

    next();

});

const createCart = catchAsync(async (req, res, next) => {

    const { sessionUser } = req;

    const cartExist = await Cart.findOne({ where: { userId: sessionUser.id, status: 'active' } });

    if(!cartExist) {

        const cart = await Cart.create({ userId: sessionUser.id });

        req.cart = cart;

        return next();
    }

    next();

});

const validateQuantity = catchAsync(async (req, res, next) => {

    const { productId, quantity } = req.body;

    const product = await Product.findOne({ where: { id: productId } });

    if(quantity > product.quantity) {
        return next(new AppError('cannot exceed that amount', 404));
    }

    next();

});

const validateProductsToPurchase = catchAsync(async (req, res, next) => {

    const { cart } = req;

        const products = await ProductInCart.findAll({ where: { cartId: cart.id, status: 'active' } });

        if(Object.keys(products).length === 0) {
            return next(new AppError('It does not have products in the cart', 404));
        }

        req.products = products;

    next();

});

module.exports = { validateUserCart, createCart, validateQuantity, validateProductsToPurchase };