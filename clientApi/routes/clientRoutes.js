const ClientController = require('../controllers/clientController');

module.exports = server => {
    server.get('/api/clients', ClientController.getClients);

    server.post('/api/clients', ClientController.createClient);
}