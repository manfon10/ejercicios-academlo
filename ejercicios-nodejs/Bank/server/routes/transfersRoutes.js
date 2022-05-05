const express = require('express');

const router = express.Router();

// Controllers

const { createTransfer } = require('../controllers/transferController');

// Routes

router.post('/', createTransfer);

module.exports = { transferRoutes: router };