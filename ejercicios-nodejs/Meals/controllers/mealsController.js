// Utils
const { catchAsync } = require('../utils/catchAsync');

// Models
const { Meal } = require('../models/mealsModel');
const { Restaurant } = require('../models/restaurantsModel');

const createMeal = catchAsync( async (req, res) => {

    const { restaurant } = req;

    const { name, price } = req.body;

    const newMeal = await Meal.create({ name, price, restaurantId: restaurant.id });

    res.status(201).json({ status: 'success', newMeal });

});

const getAllMeals = catchAsync( async (req, res) => {

   const meals = await Meal.findAll({
        include: [{
            model: Restaurant,
            attributes: ['id', 'name', 'address', 'rating', 'status']
        }]
   });

    res.status(200).json({ status: 'success', meals });

});

const getMealById = catchAsync( async (req, res) => {

    const { meal } = req;

    const mealResult = await Meal.findOne({
        include: [{
            model: Restaurant,
            attributes: ['id', 'name', 'address', 'rating', 'status']
        }]
    });

    res.status(200).json({ status: 'success', mealResult });

});

const updateMeal = catchAsync( async (req, res) => {

    const { meal } = req;

    const { name, price } = req.body;

    await meal.update({ name, price });

    res.status(201).json({ status: 'success' });

});

const disableMeal = catchAsync( async (req, res) => {

    const { meal } = req;

    const { status } = req.body;

    await meal.update({ status });

    res.status(201).json({ status: 'success' });

});

module.exports = { createMeal, getAllMeals, getMealById, updateMeal, disableMeal };