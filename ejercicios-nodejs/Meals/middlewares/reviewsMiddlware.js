// Utils
const { AppError } = require('../utils/appError');
const { catchAsync } = require('../utils/catchAsync');

// Models
const { Review } = require('../models/reviewsModel');

const reviewExist = catchAsync( async (req, res, next) => {

    const { id } = req.params;

    const review = await Review.findOne({ where: { id, status: 'active' } });

    if(!review) {
        return next(new AppError('The review does not exist with the specified id', 404));
    }

    req.review = review;

    next();

});

module.exports = { reviewExist };