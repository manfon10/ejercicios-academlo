const process = require('dotenv').config();

const { Sequelize } = require('sequelize');

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.parsed;

const db = new Sequelize({
    dialect: 'postgres',
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    logging: false
});

module.exports = { db };