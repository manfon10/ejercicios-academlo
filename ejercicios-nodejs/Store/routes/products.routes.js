const express = require('express');

// Controllers
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/products.controller');

// Middlewares
const { protectToken } = require('../middlewares/users.middlewares');
const { createProductValidations, checkValidations } = require('../middlewares/validations.middlewares');
const { productExist, protectProductOwner } = require('../middlewares/products.middlewares');

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', productExist, getProductById);

router.use(protectToken);

router.post('/', createProduct);

router
  .route('/:id')
  .patch(protectProductOwner, productExist, updateProduct)
  .delete(protectProductOwner, productExist, deleteProduct);

module.exports = { productsRouter: router };
