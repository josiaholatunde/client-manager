const Client =  require('../models/Client');
const errors = require('restify-errors');

exports.register = async (req, res, next)  => {
    const { firstName, lastName, phone, balance, email } = req.body;
    try {
        const user = await Client.findOne({email});
        if (user) {
            return next(new errors.BadRequestError('User with the Email Exists'));
        }
        const userToSave = await new Client({
            firstName, 
            lastName, 
            phone, 
            balance, 
            email
        }).save();

        res.send(201);
        next();
    } catch (error) {
        return next(new errors.BadRequestError('User with the Email Exists'));
    }

}
