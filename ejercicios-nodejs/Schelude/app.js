const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

//Utils
const { db } = require('./utils/database');

// Global errors
const { globalErrorHandler } = require('./utils/errors');

// Asociations
require('./utils/asociations');

//Router User
const { usersRouter } = require('./routes/usersRoutes');

//Router Repair
const { repairsRouter } = require('./routes/repairsRoutes');

// Endpoint User
app.use('/api/v1/users', usersRouter);

// Endpoint Repairs
app.use('/api/v1/repairs', repairsRouter);

// Global error handler
app.use('*', globalErrorHandler);

// Database conection.
db.authenticate()
    .then( () => console.log('Database authenticated') )
    .catch( error => console.log(error) );

db.sync({ force: false })
    .then( () => console.log('Database Sync') )
    .catch( error => console.log(error) );

const PORT = 2904;

app.listen(PORT, () => {
    console.log(`Express app running on port ${PORT}`);
});