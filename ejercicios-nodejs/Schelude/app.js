const express = require('express');

const app = express();

app.use(express.json());

//Utils
const { db } = require('./utils/database');

//Router User
const { usersRouter } = require('./routes/usersRoutes');

//Router Repair
const { repairsRouter } = require('./routes/repairsRoutes');

//Router Repairs

// Endpoint User
app.use('/api/v1/users', usersRouter);

// Endpoint Repairs
app.use('/api/v1/repairs', repairsRouter);

// Database conection.
db.authenticate()
    .then( () => console.log('Database authenticated') )
    .catch( error => console.log(error) );

db.sync()
    .then( () => console.log('Database Sync') )
    .catch( error => console.log(error) );

const PORT = 2904;

app.listen(PORT, () => {
    console.log(`Express app running on port ${PORT}`);
});