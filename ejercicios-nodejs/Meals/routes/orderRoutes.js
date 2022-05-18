const express = require('express');

const router = express.Router();

// Controllers
const { createOrder, getAllOrders, updateOrder, deleteOrder } = require('../controllers/ordersController');

// Middlewares
const { protectToken } = require('../middlewares/usersMiddleware');
const { orderExist } = require('../middlewares/ordersMiddleware');
const { protectMealOwner } = require('../middlewares/mealsMiddleware');

// Routes protected

router.use(protectToken);

router.post('/', createOrder);

router.get('/me', getAllOrders);

router
    .route('/:id')
    .patch(orderExist, protectMealOwner, updateOrder)
    .delete(orderExist, protectMealOwner, deleteOrder);

module.exports = { orderRoutes: router };