const express = require('express');

// Middlewares
const { userExists, statusExists, emailExists } = require('../middlewares/usersMiddlewares');
const { createUserValidation, checkValidations } = require('../middlewares/fieldsMiddlewares');

// Controllers
const { getAllUsers, createUser, getUserById, updateUser, deleteUser } = require('../controllers/usersController');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', userExists, getUserById);
router.post('/', createUserValidation, checkValidations, emailExists, createUser);
router.patch('/:id', userExists, updateUser);
router.delete('/:id', statusExists, deleteUser);

module.exports = { usersRouter: router };