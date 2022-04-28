const { Repair } = require('../models/repairModel');

const getAllRepairs = async (req, res) => {
    try {
        const repairs = await Repair.findAll();

        res.status(200).json({ repairs });

    } catch (error) {
        console.log(error);
    }
}

const createRepair = async (req, res) => {
    try {

        const { id } = req.params;

        const { date, userId } = req.body;

        const newRepair = await Repair.create({ 
            date,
            userId 
        });

        res.status(201).json({ newRepair });

    } catch (error) {
        console.log(error);
    }
}

const getRepairById = async (req, res) => {
    try {  
        const { id } = req.params;

        const repair = await Repair.findOne({ 
            where: { id, status: "pending" }
        });

        if(!repair) {
            return res.status(404).json({
                status: 'error',
                message: 'It has no pending status'
            });
        }

        res.status(200).json({ repair });

    } catch (error) {
        console.log(error);
    }
}

const updateRepair = async (req, res) => {
    try {
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

    } catch (error) {
        console.log(error);
    }
}

const deleteRepair = async (req, res) => {
    try {
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

    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAllRepairs, createRepair, getRepairById, updateRepair, deleteRepair };