const express = require('express');

// Middlewares
const { userExists, protectAccountOwner, statusExists, emailExists, protectToken } = require('../middlewares/usersMiddlewares');
const { createUserValidation, checkValidations } = require('../middlewares/fieldsMiddlewares');

// Controllers
const { getAllUsers, createUser, getUserById, updateUser, deleteUser, login } = require('../controllers/usersController');

const router = express.Router();

// Routes free

router.post('/', createUserValidation, checkValidations, emailExists, createUser);
router.post('/login', login);

// Routes protected

router.use(protectToken);

router.get('/', getAllUsers);
router.get('/:id', userExists, getUserById)

// protected Account Owner

router.patch('/:id', userExists, protectAccountOwner, updateUser);
router.delete('/:id', statusExists, protectAccountOwner, deleteUser);

module.exports = { usersRouter: router };