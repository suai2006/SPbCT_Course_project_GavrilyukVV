let logger = console;

process.on('unhandledRejection', (reason, promise) => {
    logger.error(`Unhandled Rejection at: ${promise} reason:${reason}`);
    setTimeout(() => process.exit(1), 0)
});
process.on('uncaughtException', (err, origin) => {
    logger.error(`Caught exception: ${err}, Exception origin: ${origin}`);
    setTimeout(() => process.exit(1), 0)
});

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const registryAPI = require('./api');
const path = require('path');
const config = require("../env.config");
const Logger = require('./core/logger');
logger = new Logger(config, 'api');
const app = express()
const host = config.HOST || '0.0.0.0'
const port = config.PORT || 3000
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.raw({type: function(){return true;}, limit: '200mb'}));
app.set('port', port)
app.use(function (req, res, next) 
{
    res.set({
      'Access-Control-Allow-Origin'  : ['http://localhost:8080'],
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE',
      'Access-Control-Allow-Credentials':true,
      'Access-Control-Allow-Headers': 'Accept, Authorization, Content-Type, X-Requested-With, Range'
    })
    
    if (req.method === 'OPTIONS') return res.status(200).send(true);
    else return next();
});
app.use((req, res, next) => 
{
    logger.log(`method : ${req.method} URL: ${req.originalUrl}`);
    next();
});

registryAPI(app, logger);

app.use(function(req, res, next) 
{
    logger.log(`method : ${req.method} обратились к несуществующему методу ${req.originalUrl}`);
    res.status(404).json({"message": "Not found"});
});

app.use(function(err, req, res, next)
{
    logger.log(`method : ${req.method} URL ${req.originalUrl} status : 500`);
    logger.error(`method : ${req.method} URL ${req.originalUrl} message : ${err.message}`);
    res.status(500).json({"message": "Internal Server Error"});
});


if (process.env.NODE_ENV === 'production') 
{
  app.use(express.static('dist'))
  app.get('*', (req, res, next) => {
    res.sendFile('index.html', {'root': path.join(__dirname, '../dist')})
  })
}

app.listen(port, host, () => {
  logger.log('Server listening on http://' + host + ':' + port)
});