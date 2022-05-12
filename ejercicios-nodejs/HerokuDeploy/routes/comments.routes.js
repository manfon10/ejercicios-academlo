const express = require('express');

// Middlewares
const { commentExist } = require('../middlewares/comments.middlewares');
const { protectToken } = require('../middlewares/users.middlewares');
const { createCommentValidations, checkValidations } = require('../middlewares/validations.middlewares');

// Controllers
const { getAllComments, createComment, getCommentById, updateComment, deleteComment } = require('../controllers/comments.controller');

const router = express.Router();

router.use(protectToken);

router.get('/', getAllComments);

router.post('/:postId', createCommentValidations, checkValidations, createComment);

router.use ('/:id', commentExist)
    .route('/:id')
    .get(getCommentById)
    .patch(updateComment)
    .delete(deleteComment);

module.exports = { commentsRouter: router };