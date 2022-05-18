// Utils
const { AppError } = require('../utils/appError');
const { catchAsync } = require('../utils/catchAsync');

// Models
const { Order } = require('../models/ordersModel');

const orderExist = catchAsync( async (req, res, next) => {

    const { id } = req.params;

    const order = await Order.findOne({ where: { id, status: 'active' } });

    if(!order) {
        return next(new AppError('The order does not exist with the specified id', 404));
    }

    req.order = order;

    next();

});

module.exports = { orderExist };