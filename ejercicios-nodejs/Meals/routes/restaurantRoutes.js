const express = require('express');

const router = express.Router();

// Controllers
const { 
    createRestaurant, 
    getAllRestaurants, 
    getRestaurantById, 
    updateRestaurant, 
    disableRestaurant, 
    createReviews, 
    updateReview, 
    updateReviewDeleted
} = require('../controllers/resturantsController');

// Middlewares
const { protectToken, protectAdmin } = require('../middlewares/usersMiddleware');
const { createRestaurantValidations, checkValidations } = require('../middlewares/fieldsMiddlewares');
const { restaurantExist, protectReviewOwner } = require('../middlewares/restaurantsMiddleware');
const { reviewExist } = require('../middlewares/reviewsMiddlware');

// Routes free

router.post('/', protectAdmin, createRestaurantValidations, checkValidations, createRestaurant);

//Routes protected

router.use(protectToken);

router.get('/', getAllRestaurants);

router
    .route('/:id')
    .get(restaurantExist, reviewExist, getRestaurantById)
    .patch(protectAdmin, restaurantExist, updateRestaurant)
    .delete(protectAdmin, restaurantExist, disableRestaurant)

router
    .route('/reviews/:id')
    .post(restaurantExist, createReviews)
    .patch(restaurantExist, protectReviewOwner, updateReview)
    .delete(restaurantExist, protectReviewOwner, updateReviewDeleted);

module.exports = { restaurantRoutes: router };