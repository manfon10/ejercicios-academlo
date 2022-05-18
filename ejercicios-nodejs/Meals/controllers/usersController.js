// Libraries
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const process = require('dotenv').config();

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

// Models
const { User } = require('../models/usersModel');
const { Order } = require('../models/ordersModel');
const { Meal } = require('../models/mealsModel');
const { Restaurant } = require('../models/restaurantsModel');

// Metods User Controller

const signup = catchAsync( async (req, res) => {

    const { name, email, password, role } = req.body;

    // Generate hash password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // Insert info to Database
    const newUser = await User.create({ name, email, password: passwordHash, role });

    // Removed password from response
    newUser.password = undefined;

    res.status(200).json({ status: 'success', newUser });

});

const login = catchAsync( async (req, res, next) => {

    const { email, password } = req.body;

    // Validated that user exists with given email
    const user = await User.findOne({ where: { email, status: 'active' } });

    if( !user || !(await bcrypt.compare(password, user.password)) ) {
        return next(new AppError('Invalid credentials', 400));
    }

    // Generate Token
    const token = await jwt.sign( { id: user.id }, process.parsed.JWT_SECRET, {
        expiresIn: process.parsed.JWT_EXPIRES_IN
    } );

    // Removed password from response
    user.password = undefined;

    res.status(200).json({ token, user });

});

const updateUser = catchAsync( async (req, res) => {

    const { sessionUser } = req;

    const { name, email } = req.body;

    await User.update({ name, email }, { where: { id: sessionUser.id } });

    res.status(201).json({ status: 'success' });

});

const disabledUser = catchAsync( async (req, res) => {

    const { sessionUser } = req;

    const { status } = req.body;

    await User.update({ status }, { where: { id: sessionUser.id } });

    res.status(201).json({ status: 'success' });

});

const getAllOrders = catchAsync( async (req, res) => {

    const { sessionUser } = req;

    const orders = await Order.findAll({
        include: [{
            model: Meal,
            attributes: ['id', 'name', 'price', 'restaurantId', 'status'],
                include: [{
                    model: Restaurant,
                    attributes: ['id', 'name', 'address', 'rating', 'status']
                }]
        }],
        where: { 
            userId: sessionUser.id 
        }
    });

    res.status(200).json({ status: 'success', orders });

});

const getOrderById = catchAsync( async (req, res) => {

    const { order } = req;

    const orderResult = await Order.findOne({
        include: [{
            model: Meal,
            attributes: ['id', 'name', 'price', 'restaurantId', 'status'],
                include: [{
                    model: Restaurant,
                    attributes: ['id', 'name', 'address', 'rating', 'status']
                }]
        }],
        where: {
            id: order.id
        }
    });

    res.status(200).json({ status: 'success', orderResult });

});

module.exports = { signup, login, updateUser, disabledUser, getAllOrders, getOrderById };