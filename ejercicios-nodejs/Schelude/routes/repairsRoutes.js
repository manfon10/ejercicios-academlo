const express = require('express');

// Midldlewares
const { statusExists } = require('../middlewares/repairsMiddlewares');
const { createRepairValidation, checkValidations } = require('../middlewares/fieldsMiddlewares');

// Conrtollers
const { getAllRepairs, createRepair, getRepairById, updateRepair, deleteRepair } = require('../controllers/repairsController');

const router = express.Router();

router.get('/', getAllRepairs);
router.post('/', createRepairValidation, checkValidations, createRepair);
router.get('/:id', statusExists, getRepairById);
router.patch('/:id', updateRepair);
router.delete('/:id', deleteRepair);

module.exports = { repairsRouter: router };