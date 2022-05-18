// Utils
const { AppError } = require('../utils/appError');
const { catchAsync } = require('../utils/catchAsync');

// Models
const { Restaurant } = require('../models/restaurantsModel');

const restaurantExist = catchAsync( async (req, res, next) => {

    const { id } = req.params;

    const restaurant = await Restaurant.findOne({ where: { id } });

    if(!restaurant) {
        return next(new AppError('The restaurant does not exist with the specified id', 404));
    }

    req.restaurant = restaurant;

    next();

});

const protectReviewOwner = catchAsync( async (req, res, next) => {

    // Get current session user
    const { sessionUser, restaurant } = req;

    // Get the id of the user that is going to be updated
    // Compare the id's
    if(sessionUser.id !== restaurant.id) {
        return next(new AppError('You do not have permission to edit that account', 404));
    }

    next();

});

module.exports = { restaurantExist, protectReviewOwner };