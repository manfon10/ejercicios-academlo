// Utils
const { catchAsync } = require('../utils/catchAsync');

// Models
const { Cart } = require('../models/cart.model');
const { Product } = require('../models/product.model');
const { ProductInCart } = require('../models/productInCart.model');
const { Order } = require('../models/order.model');

const addProductToCart = catchAsync(async (req, res) => {

  const { sessionUser, cart } = req;

  const { productId, quantity } = req.body;

  const productAdd = await ProductInCart.create({ cartId: cart.id, productId, quantity });

  res.status(201).json({ productAdd });

});

const updateProductInCart = catchAsync(async (req, res) => { 

  const { cart } = req;

  const { productId, newQuantity } = req.body;

  if(newQuantity === 0) {
    await ProductInCart.update({ status: 'removed' }, { where: { productId, cartId: cart.id } });
  }else {
    await ProductInCart.update({ status: 'active' }, { where: { productId, cartId: cart.id } });
  }

  await ProductInCart.update({ quantity: newQuantity }, { where: { productId } });
  
  res.status(201).json({ status: 'success' });

});

const purchaseCart = catchAsync(async (req, res, next) => {

  const { sessionUser, cart, products } = req;

  products.map(async ({ productId, quantity }) => {
    
    await Product.update({ quantity }, { where: { id: productId } });

    const product = await Product.findOne({ where: { id: productId } });
 
    await ProductInCart.update({ status: 'purchased' }, { where: { cartId: cart.id } });

    const totalPrice = product.price * quantity;

    await Order.create({ userId: sessionUser.id, cartId: cart.id, totalPrice });

  });

  await Cart.update({ status: 'purchased' }, { where: { id: cart.id } });
  
  res.status(201).json({ status: 'success' });

});

const removeProductFromCart = catchAsync(async (req, res) => {

  const { productId } = req.params;

  const { status } = req.body;

  await ProductInCart.update({ status }, { where: { productId } });

  res.status(201).json({ status: 'success' });

});

const getProductsToCart = catchAsync(async (req, res) => {

  const products = await ProductInCart.findAll({ where: { status: 'active' } });

  res.status(200).json({ products });

});

module.exports = {
  addProductToCart,
  updateProductInCart,
  purchaseCart,
  removeProductFromCart,
  getProductsToCart
};
