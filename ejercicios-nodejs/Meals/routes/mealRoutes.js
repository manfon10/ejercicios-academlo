const express = require('express');

const router = express.Router();

// Controllers
const { createMeal, getAllMeals, getMealById, updateMeal, disableMeal } = require('../controllers/mealsController');

// Middlewares
const { protectToken, protectAdmin } = require('../middlewares/usersMiddleware');
const { restaurantExist } = require('../middlewares/restaurantsMiddleware');
const { mealExist } = require('../middlewares/mealsMiddleware');
const { createMealValidations, checkValidations } = require('../middlewares/fieldsMiddlewares');

// Routes protected
router.use(protectToken);

router.get('/', getAllMeals);

router
    .route('/:id')
    .post(restaurantExist, protectAdmin, createMealValidations, checkValidations, createMeal)
    .get(mealExist, getMealById)
    .patch(protectAdmin, mealExist, updateMeal)
    .delete(protectAdmin, mealExist, disableMeal);

module.exports = { mealRoutes: router };