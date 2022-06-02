const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

//Models
const { Product } = require('../models/product.model');

const productExist = catchAsync(async (req, res, next) => {

  const { id } = req.params;

  const product = await Product.findOne({ where: { id } });

  if(!product) {
    return new AppError('The product does not exist with the specified id', 404);
  }

  req.product = product;

  next();

});

const protectProductOwner = catchAsync(async (req, res, next) => {

  const { sessionUser, product } = req;

  if (sessionUser.id !== product.userId) {
    return next(new AppError('You do not own this account', 403));
  }

  next();

});

module.exports = { productExist, protectProductOwner };
