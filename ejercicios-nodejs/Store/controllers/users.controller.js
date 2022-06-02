const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const process = require('dotenv').config();

// Models
const { User } = require('../models/user.model');
const { Product } = require('../models/product.model');
const { Order } = require('../models/order.model');
const { Cart } = require('../models/cart.model');
const { ProductInCart } = require('../models/productInCart.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const getAllUsers = catchAsync(async (req, res) => {
  
  const users = await User.findAll({
    attributes: { 
      exclude: ['password'] 
    }
  });

  res.status(200).json({ users });

});

const createUser = catchAsync(async (req, res) => {

  const { username, email, password, role } = req.body;

  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    username,
    email,
    password: hashPassword,
    role,
  });

  newUser.password = undefined;

  res.status(201).json({ newUser });

});

const getUserById = catchAsync(async (req, res) => {

  const { user } = req;

  res.status(200).json({ user });

});

const updateUser = catchAsync(async (req, res) => {

  const { user } = req;

  const { name } = req.body;

  await user.update({ name });

  res.status(200).json({ status: 'success' });

});

const deleteUser = catchAsync(async (req, res) => {

  const { user } = req;

  await user.update({ status: 'deleted' });

  res.status(200).json({ status: 'success' });

});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate that user exists with given email
  const user = await User.findOne({
    where: { email, status: 'active' },
  });

  // Compare password with db
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppError('Invalid credentials', 400));
  }

  // Generate JWT
  const token = await jwt.sign({ id: user.id }, process.parsed.JWT_SECRET, {
    expiresIn: process.parsed.JWT_EXPIRES_IN,
  });

  user.password = undefined;

  res.status(200).json({ token, user });
});

const getUserProducts = catchAsync(async (req, res) => {

  const { sessionUser } = req;

  const products = await Product.findAll({
    where: { userId: sessionUser.id }
  });

  res.status(200).json({ products });

});

const getUserOrders = catchAsync(async (req, res) => {

  const { sessionUser } = req;

  const orders = await Order.findAll({
    include: [{
      model: Cart,
      include: [{
        model: ProductInCart,
        include: [{
          model: Product,
        }],
        where: { status: 'purchased' },
      }],
    }],
    where: { 
      userId: sessionUser.id 
    }
  });

  res.status(200).json({ orders });

});

const getUserOrderById = catchAsync(async (req, res) => {

  const { sessionUser } = req;

  const { id } = req.params;

  const orders = await Order.findOne({
    include: [{
      model: Cart,
      include: [{
        model: ProductInCart,
        include: [{
          model: Product,
        }],
        where: { status: 'purchased' },
      }],
    }],
    where: { 
      userId: sessionUser.id 
    }
  });

  res.status(200).json({ orders });

});

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  login,
  getUserProducts,
  getUserOrders,
  getUserOrderById,
};
