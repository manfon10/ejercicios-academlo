const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Utils
const { globalErrorHandler } = require('./utils/errors');

// Routers
const { userRoutes } = require('./routes/userRoutes');
const { restaurantRoutes } = require('./routes/restaurantRoutes');
const { mealRoutes } = require('./routes/mealRoutes');
const { orderRoutes } = require('./routes/orderRoutes');

// Endpoints
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/restaurants', restaurantRoutes);
app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/orders', orderRoutes);

// Global error
app.use('*', globalErrorHandler);

module.exports = { app };