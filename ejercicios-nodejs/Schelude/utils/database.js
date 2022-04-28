const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'S@ntafelindo123',
    database: 'scheludes',
    logging: false
});

module.exports = { db };