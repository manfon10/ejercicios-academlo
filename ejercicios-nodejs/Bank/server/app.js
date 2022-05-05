const express = require('express');
const cors = require('cors');
const process = require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

// Routes

const { userRoutes } = require('./routes/usersRoutes');
const { transferRoutes } = require('./routes/transfersRoutes');

// Utils

const { db } = require('./utils/database');

// Endpoints

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/transfers', transferRoutes);

// Database conection

db.authenticate()
    .then( () => console.log('Database Authenticated'))
    .catch( error => console.log(error));

db.sync({ force: false })
    .then( () => console.log('Database Sync'))
    .catch( error => console.log(error));

// App Running

const { SERVER_PORT } = process.parsed;

app.listen( SERVER_PORT, () => {
    console.log(`Bank app running :)`);
});

module.exports = { app };