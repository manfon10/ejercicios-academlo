const { User } = require('../models/userModel');

const getAllUsers = async (req, res) => {
    try {
        // findAll -> SELECT * FROM Users;
        const users = await User.findAll();

        res.status(200).json({ users });

    } catch (error) {
        console.log(error)
    }
} 

const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const validateEmail = await User.findOne({
            where: { email }
        });

        if(validateEmail) {
            return res.status(400).json({
                status: 'error',
                message: 'Email duplicated!!'
            })
        }

        const newUser = await User.create({
            name,
            email,
            password,
            role
        });
    
        res.status(201).json({ newUser });

    } catch (error) {
        console.log(error);
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findOne({
            where: { id }
        });

        if(!user) {
            return res.status(404).json({
                status: 'error',
                message: 'User not found given that id'
            });
        }

        res.status(200).json({ user });
        
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        const { name, email } = req.body;

        await User.update({ name, email }, { where: { id } });

        res.status(201).json({ status: 'success' });

    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const { status } = req.body;

        const validateStatus = await User.findOne({
            where: { id}
        });

        if(validateStatus) {
            return res.status(400).json({
                status: 'error',
                message: 'User is already deleted!!'
            })
        }

        await User.update({ status }, { where: { id }});

        res.status(201).json({ status: 'success' });

    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAllUsers, createUser, getUserById, updateUser, deleteUser };