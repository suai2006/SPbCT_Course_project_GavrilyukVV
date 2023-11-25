const  authRouter = require(`./auth`);
const  appRouter = require(`./app`);
const  apiRouter = require(`./api`);
module.exports = function(app, logger) 
{
    authRouter(app, logger);
    appRouter(app, logger);
    apiRouter(app, logger);
}
