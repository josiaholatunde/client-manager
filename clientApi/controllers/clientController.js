const Client =  require('../models/Client');
const errors = require('restify-errors');

exports.getClients =  async (req, res, next)  => {
    try {
        const clients = await Client.find({});
        res.send(clients);
        next();
    } catch (error) {
        return next(new errors.InvalidContentError('Server Error while fetching clients'));

    }
}

exports.createClient = async (req, res, next) => {
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

        res.send(201, userToSave);
        next();
    } catch (error) {
        return next(new errors.BadRequestError('Client with the Email Exists'));
    }
}