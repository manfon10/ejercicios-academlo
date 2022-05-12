const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const { Comment } = require('../models/comments.model');

const commentExist = catchAsync( async (req, res, next) => {

    const { id } = req.params;

    const comment = await Comment.findOne({ where: { id } });

    if (!comment) {
      return next(new AppError('No post found with the given id', 404));
    }
    
    req.comment = comment;

    next();

});

module.exports = { commentExist };