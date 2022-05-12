const { catchAsync } = require('../utils/catchAsync');

const { Comment } = require('../models/comments.model');

const getAllComments = catchAsync( async (req, res, next) => {

    const comments = await Comment.findAll({ where: { status: 'active'} });

    res.status(200).json({ comments });

});

const createComment = catchAsync( async (req, res, next) => {

    const { text } = req.body;
    const { postId } = req.params;
    const { sessionUser } = req;

    const newComment = await Comment.create({ text, userId: sessionUser.id, postId });

    res.status(201).json({ newComment });

});

const getCommentById = catchAsync( async (req, res, next) => {

    const { comment } = req;

    res.status(200).json({ comment });

});

const updateComment = catchAsync( async (req, res, next) => {

    const { text } = req.body;
    const { comment } = req;

    await comment.update({ text });

    res.status(201).json({ comment });

});

const deleteComment = catchAsync( async (req, res, next) => {

    const { status } = req.body;
    const { comment } = req;

    await comment.update({ status });

    res.status(201).json({ comment });

});

module.exports = { getAllComments, createComment, getCommentById, updateComment, deleteComment };