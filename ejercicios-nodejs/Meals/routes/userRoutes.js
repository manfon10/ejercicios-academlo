const express = require('express');

const router = express.Router();

// Controllers
const { signup, login, updateUser, disabledUser, getAllOrders, getOrderById } = require('../controllers/usersController');

// Middlewares
const { createUserValidations, checkValidations } = require('../middlewares/fieldsMiddlewares');
const { protectToken, protectAccountOwner, userExists } = require('../middlewares/usersMiddleware');
const { orderExist } = require('../middlewares/ordersMiddleware');

// Routes free
router.post('/signup', createUserValidations, checkValidations, signup);
router.post('/login', login);

// Routes protected
router.use(protectToken);

router
    .route('/:id')
    .patch(userExists, protectAccountOwner, updateUser)
    .delete(userExists,protectAccountOwner, disabledUser);

router.get('/orders', getAllOrders);
router.get('/orders/:id', orderExist, getOrderById);

module.exports = { userRoutes: router };
