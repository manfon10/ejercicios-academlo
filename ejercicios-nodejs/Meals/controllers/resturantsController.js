// Utils
const { catchAsync } = require('../utils/catchAsync');

// Models
const { Restaurant } = require('../models/restaurantsModel');
const { Review } = require('../models/reviewsModel');

const createRestaurant = catchAsync( async (req, res) => {

    const { name, address, rating } = req.body;

    const newRestaurant = await Restaurant.create({ name, address, rating });

    res.status(201).json({ status: 'success', newRestaurant });

});

const getAllRestaurants = catchAsync( async (req, res) => {

    const restaurants = await Restaurant.findAll({
        include: [{
            model: Review,
            attributes: ['id', 'userId', 'comment', 'rating', 'status']
        }]
    });

    res.status(200).json({ status: 'success', restaurants });

});

const getRestaurantById = catchAsync( async (req, res) => {

    const { restaurant, review } = req;

    const restaurantResult = await Restaurant.findOne({
        include: [{
            model: Review,
            attributes: ['id', 'userId', 'comment', 'rating', 'status'],
            where: {
                restaurantId: restaurant.id
            }
        }],
        where: {
            id: review.id
        }
    });

    res.status(200).json({ status: 'success', restaurantResult });

});

const updateRestaurant = catchAsync( async (req, res) => {

    const { restaurant } = req;

    const { name, address } = req.body;

    await restaurant.update({ name, address });

    res.status(201).json({ status: 'success' });

});

const disableRestaurant = catchAsync( async (req, res) => {

    const { restaurant } = req;

    const { status } = req.body;

    await restaurant.update({ status });

    res.status(201).json({ status: 'success' });

});

const createReviews = catchAsync( async (req, res) => {

    const { sessionUser, restaurant } = req;

    const { comment, rating } = req.body;

    const newReview = await Review.create({ 
        userId: sessionUser.id, 
        comment, 
        restaurantId: restaurant.id,
        rating
    });

    res.status(201).json({ status: 'success', newReview });

});

const updateReview = catchAsync( async (req, res) => {

    const { restaurant } = req;

    const { comment, rating } = req.body;

    await Review.update({ comment, rating }, { where: { restaurantId: restaurant.id } } );

    res.status(201).json({ status: 'success' });

});

const updateReviewDeleted = catchAsync( async (req, res) => {

    const { restaurant } = req;

    const { comment, rating } = req.body;

    await Review.update({ status }, { where: { restaurantId: restaurant.id } } );

    res.status(201).json({ status: 'success' });

});

module.exports = { 
    createRestaurant, 
    getAllRestaurants, 
    getRestaurantById, 
    updateRestaurant, 
    disableRestaurant, 
    createReviews, 
    updateReview,
    updateReviewDeleted 
};