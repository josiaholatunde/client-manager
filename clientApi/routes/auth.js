const AuthController = require('../controllers/authController');
module.exports = server => {
    server.post('/auth/register', AuthController.register);

}