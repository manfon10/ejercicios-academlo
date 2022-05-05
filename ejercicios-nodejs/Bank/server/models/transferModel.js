const { DataTypes } = require('sequelize');
const  { db } = require('../utils/database');

const Transfer = db.define('transfers', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    amount: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    senderUserId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    receiverUserId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = { Transfer };