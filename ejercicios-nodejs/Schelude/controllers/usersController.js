const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const process = require('dotenv').config();

// Models
const { User } = require('../models/userModel');
const { Repair } = require('../models/repairModel');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const getAllUsers = catchAsync(async (req, res) => {

    const users = await User.findAll({
        attributes: ['id', 'name', 'email', 'role', 'status'],
        include: {
            model: Repair,
            attributes: ['id', 'date', 'userId']
        }
    });

    res.status(200).json({ users });

});

const createUser = catchAsync(async (req, res) => {
        
    const { name, email, password, role } = req.body;

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await User.create({
        name,
        email,
        password: passwordHash,
        role
    });

    // Remove password from response
    newUser.password = undefined;

    res.status(201).json({ newUser });

});

const getUserById = catchAsync(async (req, res) => {

    const { user } = req;

    res.status(200).json({ user });
        
});

const updateUser = catchAsync(async (req, res) => {

    const { id } = req.params;

    const { name, email } = req.body;

    await User.update({ name, email }, { where: { id } });

    res.status(201).json({ status: 'success' });

});

const deleteUser = catchAsync(async (req, res) => {

    const { id } = req.params;

    const { status } = req.body;

    await User.update({ status }, { where: { id }});

    res.status(201).json({ status: 'success' });

});

const login = catchAsync( async (req, res, next) => {

    const { email, password } = req.body;

    // Validate that user exists with given email

    const user = await User.findOne({
        where: { email, status: 'available' }
    });

    // Compare password with db

    if(!user || !(await bcrypt.compare(password, user.password))) {
        return next(new AppError('Invalid credentials', 400));
    }

    // Generate JWT

    const token = await jwt.sign({ id: user.id }, process.parsed.JWT_SECRET, {
        expiresIn: process.parsed.JWT_EXPIRES_IN,
    });

    user.password = undefined;

    res.status(200).json({ token, user });

});

module.exports = { getAllUsers, createUser, getUserById, updateUser, deleteUser, login };