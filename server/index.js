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
const registryAPI = require('./api');
const path = require('path');
const config = require("../env.config");
const Logger = require('./core/logger');
logger = new Logger(config, 'api');
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

registryAPI(app, logger);
if (process.env.NODE_ENV === 'production') 
{
  app.use(express.static('dist'))
  app.get('*', (req, res, next) => {
    res.sendFile('index.html', {'root': path.join(__dirname, '../dist')})
  })
}

app.listen(port, host, () => {
  logger.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
})