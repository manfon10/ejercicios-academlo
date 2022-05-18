const { body, validationResult } = require('express-validator');

// Utils 
const { AppError } = require('../utils/appError');

const createUserValidations = [

    body('name')
        .notEmpty()
        .withMessage('Name cannot be empty'),
    body('email')
        .notEmpty()
        .withMessage('Email cannot be empty')
        .isEmail()
        .withMessage('Must be a valid email'),
    body('password')
        .notEmpty()
        .withMessage('Password cannot be empty')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long'),

];

const createRestaurantValidations = [

    body('name')
        .notEmpty()
        .withMessage('Name cannot be empty'),
    body('address')
        .notEmpty()
        .withMessage('Address cannot be empty'),
    body('rating')
        .notEmpty()
        .withMessage('Rating cannot be empty')
        .isInt()
        .withMessage('Rating be a integer number')

];

const createMealValidations = [

    body('name')
        .notEmpty()
        .withMessage('Name cannot be empty'),
    body('price')
        .notEmpty()
        .withMessage('Price cannot be empty')
        .isInt()
        .withMessage('Price be a integer number')

];

const checkValidations = (req, res, next) => {

    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {

      const messages = errors.array().map(({ msg }) => msg);
  
      return next(new AppError(messages, 400));

    }
  
    next();

};

module.exports = { createUserValidations, createRestaurantValidations, createMealValidations, checkValidations };