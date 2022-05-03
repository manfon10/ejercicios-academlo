const { User } = require('../models/userModel');

const userExists = async (req, res, next) => {
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

        req.user = user;

        next();

    } catch (error) {
        console.log(error);
    }
}

const statusExists = async (req, res, next) => {
    try {

        const { id } = req.params;
        
        const { status } = req.body;

        const validateStatus = await User.findOne({
            where: { id, status }
        });

        if(validateStatus) {
            return res.status(404).json({
                status: 'error',
                message: 'User is already deleted!!'
            })
        }

        next();

    } catch (error) {
        console.log(error);
    }
}

const emailExists = async (req, res, next) => {
    try {
        
        const { email } = req.body;

        const validateEmail = await User.findOne({
            where: { email }
        });

        if(validateEmail) {
            return res.status(400).json({
                status: 'error',
                message: 'Email duplicated!!'
            });
        }

        next();

    } catch (error) {
        console.log(error);
    }
}

module.exports = { userExists, statusExists, emailExists };