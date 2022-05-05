const express = require('express');

const router = express.Router();

// Controllers

const { createUser, loginUser, getTransfersByUser } = require('../controllers/userController');

// Routes

router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/:id/history', getTransfersByUser);

module.exports = { userRoutes: router };