const { app } = require('./app');

// Models
const { asociationsModel } = require('./models/asociationsModel');

// Utils

const { db } = require('./utils/database');

// Athenticate Database

db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch(err => console.log(err));

// Asociations

asociationsModel();

// Sync sequielize models

db.sync({ force: false })
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

// Up Server

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server Meals Running on port ${PORT}`);
});