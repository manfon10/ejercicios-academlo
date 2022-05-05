// Models

const { User } = require('../models/userModel');
const { Transfer } = require('../models/transferModel');

const createUser = async (req, res) => {
    try {

        const { name, password } = req.body;

        // Generate account

        const accountNumber = Math.floor(Math.random() * 10000 + 20000);

        // Insert acount generated

        const user = await User.create({ name, accountNumber, password });

        res.status(201).json({ user });

    } catch (error) {
        res.status(500).json({
            status: 'error',
            msg: 'Validate please :)'
        });
    }
}

const loginUser = async (req, res) => {
    try {
        
        const { accountNumber, password } = req.body;

        // Validate account number y password

        const account = await User.findOne({ where: { accountNumber } });
        const passwordUser = await User.findOne({ where: { password }});

        if(!account || password !== passwordUser.dataValues.password) {
            return res.status(404).json({
                status: 'error',
                msg: 'Validate acredentials!'
            });
        }

        const { id, name, amount } = passwordUser.dataValues;

        res.status(200).json({ 
            id,
            name,
            accountNumber,
            amount
         });

    } catch (error) {
        res.status(500).json({
            status: 'error',
            msg: 'Validate please :)'
        });
    }
}

const getTransfersByUser = async (req, res) => {
    try {

        const { id } = req.params;

        // Validate account number by user id

        const userId = await User.findOne({ where: { id } });

        // Get transfers by account number for user

        const transfers = await Transfer.findAll({ where: { senderUserId: userId.dataValues.accountNumber } });

        if(!transfers) {
            return res.status(404).json({
                status: 'error',
                msg: 'There is no such transfer!'
            });
        }

        res.status(200).json({ transfers });

    } catch (error) {
        res.status(500).json({
            status: error,
            msg: 'Validate please :)'
        });
    }
}

module.exports = { createUser, loginUser, getTransfersByUser };