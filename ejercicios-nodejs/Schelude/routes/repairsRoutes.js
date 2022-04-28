const express = require('express');

const { getAllRepairs, createRepair, getRepairById, updateRepair, deleteRepair } = require('../controllers/repairsController');

const router = express.Router();

router.get('/', getAllRepairs);
router.post('/', createRepair);
router.get('/:id', getRepairById);
router.patch('/:id', updateRepair);
router.delete('/:id', deleteRepair);

module.exports = { repairsRouter: router };