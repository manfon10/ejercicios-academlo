const { body, validationResult } = require('express-validator');

const createUserValidation = [
    body('name')
        .notEmpty()
        .withMessage('Name cannot be empty'),
    body('email')
        .notEmpty()
        .withMessage('Email cannot be empty')
        .isEmail()
        .withMessage('Must be a valid email'),
    body('password')
        .notEmpty()
        .withMessage('Password cannot by empty')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long'),
];

const createRepairValidation = [
    body('date')
        .notEmpty()
        .withMessage('Date cannot be empty')
        .isISO8601('yyyy-mm-dd')
        .withMessage('Date is not a valid date')
];

const checkValidations = (req, res, next) => {
    //Se almacenan los mensajes de validator que vienen del request.
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        // Se desectructura el objeto errors y se retorna msg.
        const messages = errors.array().map( ({ msg }) => msg );

        return res.status(400).json({
            status: 'error',
            messages: messages
        });
    }

    next();

}

module.exports = { createUserValidation, createRepairValidation, checkValidations };