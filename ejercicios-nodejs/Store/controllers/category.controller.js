const { catchAsync } = require('../utils/catchAsync');

//Models
const { Category } = require('../models/category.model');

const createCategory = catchAsync(async (req, res) => {

    const { name } = req.body;

    await Category.create({ name });

    res.status(201).json({ status: 'success' });

});

const getAllCategorys = catchAsync(async (req, res) => {

    const categories = await Category.findAll();
  
    res.status(200).json({ categories });

});

const updateCategory = catchAsync(async (req, res) => {

    const { id } = req.params;

    const { name } = req.body;

    await Category.update({ name }, { where: { id } });
  
    res.status(201).json({ status: 'success' });

});


module.exports = {
    createCategory,
    getAllCategorys,
    updateCategory
};