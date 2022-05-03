// Models
const { User } = require('../models/userModel');
const { Repair } = require('../models/repairModel');

// Utils
const { catchAsync } = require('../utils/catchAsync');

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

    const newUser = await User.create({
        name,
        email,
        password,
        role
    });

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

module.exports = { getAllUsers, createUser, getUserById, updateUser, deleteUser };