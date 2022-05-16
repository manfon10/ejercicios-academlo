const jwt = require('jsonwebtoken');
const process = require('dotenv').config();

// Models

const { User } = require('../models/userModel');

// Utils

const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const protectToken = catchAsync( async (req, res, next) => {

    let token;

    // Extract token from headers

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if(!token) {
        return next(new AppError('Session invalid', 403));
    }

    // Validate Token

    const decoded = await jwt.verify(token, process.parsed.JWT_SECRET);

    const user = await User.findOne({
        where: { id: decoded.id, status: 'available' }
    });

    if(!user) {
        return next(new AppError('The owner of this token is no longer available', 403));
    }

    req.sessionUser = user;

    next();

});

const protectAccountOwner = catchAsync( async (req, res, next) => {

    // Get current session user

    const { sessionUser, user } = req;

    // Get the id of the user that is going to be updated

    // Compare the id's

    if(sessionUser.id !== user.id) {
        return next(new AppError('You do not have permission to edit that account', 404));
    }

    next();

});

const userExists = catchAsync(async (req, res, next) => {

    const { id } = req.params;

    const user = await User.findOne({
        where: { id }
    });

    if(!user) {
        return next(new AppError('User does not exist with given Id', 404));
    }

    req.user = user;

    next();

});

const statusExists = catchAsync( async (req, res, next) => {

        const { id } = req.params;
        
        const { status } = req.body;

        const validateStatus = await User.findOne({
            where: { id, status }
        });

        if(validateStatus) {
            return next(new AppError('User is already deleted!!', 404));
        }

        next();

});

const emailExists = catchAsync( async (req, res, next) => {
        
        const { email } = req.body;

        const validateEmail = await User.findOne({
            where: { email }
        });

        if(validateEmail) {
            return next(new AppError('Email duplicated!!', 404));
        }

        next();

});

module.exports = { protectToken, protectAccountOwner, userExists, statusExists, emailExists };