// Models

const { User } = require('../models/userModel');
const { Transfer } = require('../models/transferModel');

const createTransfer = async (req, res) => {
    try {
        
        const { amountSend, recipientAccount, rootAccount } = req.body;

        // Validate recipientAccount

        const accountDest = await User.findOne({ where: { accountNumber: recipientAccount } });

        if(!accountDest) {
            return res.status(404).json({
                status: 'error',
                msg: 'The destination account does not exist!'
            });
        }

        // Validate amount root user

        const userAmount = await User.findOne({ where: { accountNumber: rootAccount } });

        if(userAmount.dataValues.amount < amountSend) {
            return res.status(404).json({
                status: 'error',
                msg: 'No tiene saldo disponible'
            });
        }

        // Insert transfer

        const transfert = await Transfer.create({ amount: amountSend, senderUserId: recipientAccount, receiverUserId: rootAccount });

        // Add amount to destination account

        const addAmount = accountDest.dataValues.amount + amountSend;

        await User.update({ amount: addAmount }, { where: { accountNumber: recipientAccount } });

        // Subtract amount root user

        const subtractAmount = userAmount.dataValues.amount - amountSend;

        await User.update({ amount: subtractAmount }, { where: { accountNumber: rootAccount } });

        res.status(201).json({ status: 'success', transfert });

    } catch (error) {
        res.status(500).json({
            status: 'error',
            msg: 'Validate please :)'
        });
    }
}

module.exports = { createTransfer };