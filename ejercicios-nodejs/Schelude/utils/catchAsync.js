const catchAsync = ( exec ) => {
    return (req, res, next) => {
        exec(req, res, next).catch(next);
    }
}

module.exports = { catchAsync };