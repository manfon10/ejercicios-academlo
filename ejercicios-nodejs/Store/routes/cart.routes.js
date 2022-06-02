const express = require('express');

// Controllers
const {
  addProductToCart,
  updateProductInCart,
  purchaseCart,
  removeProductFromCart,
  getProductsToCart
} = require('../controllers/orders.controller');

// Middlewares
const { protectToken } = require('../middlewares/users.middlewares');
const { validateUserCart, createCart, validateQuantity, validateProductsToPurchase } = require('../middlewares/cart.middleware');

const router = express.Router();

router.get('/', getProductsToCart);

router.use(protectToken);

router.post('/add-product', validateUserCart, createCart, validateQuantity, addProductToCart);

router.patch('/update-cart', validateUserCart, validateQuantity, updateProductInCart);

router.post('/purchase', validateUserCart, validateProductsToPurchase, purchaseCart);

router.delete('/:productId', removeProductFromCart);

module.exports = { cartRouter: router };
