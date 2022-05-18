// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

// Models
const { Order } = require('../models/ordersModel');
const { Meal } = require('../models/mealsModel');
const { Restaurant } = require('../models/restaurantsModel');

const createOrder = catchAsync( async (req, res, next) => {

    const { sessionUser } = req;

    const { mealId, quantity } = req.body;

    const meal = await Meal.findOne({ where: { id: mealId } });

    if(!meal) {
        return next(new AppError('The meal with the specified id does not exist!', 404));
    }

    const totalPrice = meal.price * quantity;

    const newOrder = await Order.create({ mealId, userId: sessionUser.id, totalPrice, quantity });

    res.status(201).json({ status: 'success', newOrder });

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

const updateOrder = catchAsync( async (req, res) => {

    const { order } = req;

    const { status } = req.body;

    await order.update({ status });

    res.status(201).json({ status: 'success' });

});

const deleteOrder = catchAsync( async (req, res) => {

    const { order } = req;

    const { status } = req.body;

    await order.update({ status });

    res.status(201).json({ status: 'success' });

});

module.exports = { createOrder, getAllOrders, updateOrder, deleteOrder };