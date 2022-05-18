// Libraries
const jwt = require('jsonwebtoken');
const process = require('dotenv').config();

// Models
const { User } = require('../models/usersModel');

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
        where: { id: decoded.id, status: 'active' }
    });

    // Validate users exist
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

const protectAdmin = catchAsync( async (req, res, next) => {

    // Get current session user
    const { sessionUser } = req;

    // Get the id of the user that is going to be updated
    // Compare the id's
    if(sessionUser.role !== 'admin') {
        return next(new AppError('Access denied :(', 404));
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

module.exports = { protectToken, protectAccountOwner, protectAdmin, userExists };