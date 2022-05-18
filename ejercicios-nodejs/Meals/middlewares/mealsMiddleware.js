// Utils
const { AppError } = require('../utils/appError');
const { catchAsync } = require('../utils/catchAsync');

// Models
const { Meal } = require('../models/mealsModel');

const mealExist = catchAsync( async (req, res, next) => {

    const { id } = req.params;

    const meal = await Meal.findOne({ where: { id, status: 'active' } });

    if(!meal) {
        return next(new AppError('The meal does not exist with the specified id', 404));
    }

    req.meal = meal;

    next();

});

const protectMealOwner = catchAsync( async (req, res, next) => {

    // Get current session user
    const { sessionUser, meal } = req;

    // Get the id of the user that is going to be updated
    // Compare the id's
    if(sessionUser.id !== meal.userId) {
        return next(new AppError('You do not have permission to edit that account', 404));
    }

    next();

});

module.exports = { mealExist, protectMealOwner };