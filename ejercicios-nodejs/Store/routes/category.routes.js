const express = require('express');

// Controllers
const { createCategory, getAllCategorys, updateCategory } = require('../controllers/category.controller');

// Middlewares
const { protectToken } = require('../middlewares/users.middlewares');

const router = express.Router();

router.use(protectToken);

router.post('/', createCategory);

router.get('/', getAllCategorys);

router.patch('/:id', updateCategory);

module.exports = { categoryRoutes: router };