const { User } = require('../models/userModel');
const { Repair } = require('../models/repairModel');

// llave foranea userId en Repairs
User.hasMany(Repair, {
    foreignKey: 'userId'
});

// Clave userId en Repairs
Repair.belongsTo(User);