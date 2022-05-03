const { Repair } = require('../models/repairModel');

const statusExists = async (req, res, next) => {
    try {

        const { id } = req.params;

        const status = await Repair.findOne({ 
            where: { id, status: "pending" }
        });

        if(!status) {
            return res.status(404).json({
                status: 'error',
                message: 'It has no pending status'
            });
        }

        req.repair = status;

        next();

    } catch (error) {
        console.log(error);
    }
}

module.exports = { statusExists };