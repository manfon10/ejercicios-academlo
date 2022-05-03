// Models
const { Repair } = require('../models/repairModel');
const { User } = require('../models/userModel');

// Utils
const { catchAsync } = require('../utils/catchAsync');

const getAllRepairs = catchAsync( async (req, res) => {

    const repairs = await Repair.findAll({
        attributes: ['id', 'date', 'status', 'userId'],
        include: {
            model: User,
            attributes: ['id', 'name', 'email', 'role', 'status']
        }
    });

    res.status(200).json({ repairs });

});

const createRepair = catchAsync( async (req, res) => {

    const { id } = req.params;

    const { date, userId } = req.body;

    const newRepair = await Repair.create({ 
        date,
        userId 
    });

    res.status(201).json({ newRepair });

});

const getRepairById = catchAsync( (req, res) => {

    const { repair } = req;

    res.status(200).json({ repair });

});

const updateRepair = catchAsync( async (req, res) => {

    const { id } = req.params;

    const { status } = req.body;

    const validateStatus = await Repair.findOne({
        where: { id, status: "completed" }
    });

    if(validateStatus) {
        return res.status(404).json({
            status: 'error',
            message: 'It already has a status completed'
        });
    }

    await Repair.update({ status }, { where: { id } });

    res.status(201).json({ status: "success" });

});

const deleteRepair = catchAsync( async (req, res) => {

    const { id } = req.params;

    const { status } = req.body;

    const validateStatus = await Repair.findOne({
        where: { id, status: "pending" }
    });

    if(validateStatus) {
        return res.status(404).json({
            status: 'error',
            message: 'It has a status pending!'
        });
    }

    await Repair.update({ status }, { where: { id }});

    res.status(201).json({ status: 'success' });

});

module.exports = { getAllRepairs, createRepair, getRepairById, updateRepair, deleteRepair };