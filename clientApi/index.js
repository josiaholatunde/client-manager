const restify = require('restify');
const mongoose = require('mongoose');
var corsMiddleware = require('restify-cors-middleware');
require('dotenv').config();

const cors = corsMiddleware({
    preflightMaxAge: 5,
    origins: ['*'],
    allowHeaders:['X-App-Version'],
    exposeHeaders:['Accept,Authorization,X-Requested-With'],
  });

const server = restify.createServer();

server.use(restify.plugins.bodyParser())
server.pre(cors.preflight);
server.use(cors.actual);

server.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
})

const db = mongoose.connection;

db.on('error', (err) => console.log(err));

db.once('open', () => {
    require('./routes/auth')(server);
    require('./routes/clientRoutes')(server);
    console.log(`Server Listening on port ${process.env.PORT}`);
});