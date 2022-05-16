// Utils

const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');


// Models

const { Repair } = require('../models/repairModel');

const protectEmploye = catchAsync( async (req, res, next) => {

    if(req.sessionUser.role !== 'employe') {
        return next(new AppError('Access not granted', 403));
    }

    next();

});

const statusExists = catchAsync( async (req, res, next) => {

        const { id } = req.params;

        const status = await Repair.findOne({ 
            where: { id, status: "pending" }
        });

        if(!status) {
            return next(new AppError('It has no pending status', 404));
        }

        req.repair = status;

        next();

});

module.exports = { protectEmploye, statusExists };