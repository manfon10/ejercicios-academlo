const { DataTypes } = require('sequelize');
const  { db } = require('../utils/database');

const User = db.define( 'users', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accountNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1000
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'available'
    }
});

module.exports = { User };