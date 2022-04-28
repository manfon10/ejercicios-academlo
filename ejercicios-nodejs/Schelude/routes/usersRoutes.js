const express = require('express');

const { getAllUsers, createUser, getUserById, updateUser, deleteUser } = require('../controllers/usersController');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = { usersRouter: router };