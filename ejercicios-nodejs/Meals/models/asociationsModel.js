// Models
const { User } = require('../models/usersModel');
const { Review } = require('../models/reviewsModel');
const { Restaurant } = require('../models/restaurantsModel');
const { Order } = require('../models/ordersModel');
const { Meal } = require('../models/mealsModel');

const asociationsModel = () => {

    // Users

    User.hasMany(Order);
    Order.belongsTo(User);

    User.hasMany(Review);
    Review.belongsTo(User);

    // Reviews

    Review.belongsTo(Restaurant);
    Restaurant.hasMany(Review);

    // Restaurants

    Restaurant.hasMany(Meal);
    Meal.belongsTo(Restaurant);

    // Meals

    Meal.hasOne(Order);
    Order.belongsTo(Meal);

}

module.exports = { asociationsModel };