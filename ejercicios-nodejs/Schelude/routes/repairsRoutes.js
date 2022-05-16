const express = require('express');

// Midldlewares
const { protectEmploye, statusExists } = require('../middlewares/repairsMiddlewares');
const { protectToken } = require('../middlewares/usersMiddlewares');
const { createRepairValidation, checkValidations } = require('../middlewares/fieldsMiddlewares');

// Conrtollers
const { getAllRepairs, createRepair, getRepairById, updateRepair, deleteRepair } = require('../controllers/repairsController');

const router = express.Router();

// Routes free

router.post('/', createRepairValidation, checkValidations, createRepair);

// Routes protected

router.use(protectToken, protectEmploye);

router.get('/', getAllRepairs);
router.get('/:id', statusExists, getRepairById);
router.patch('/:id', updateRepair);
router.delete('/:id', deleteRepair);

module.exports = { repairsRouter: router };