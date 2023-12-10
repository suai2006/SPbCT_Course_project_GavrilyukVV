const  authRouter = require(`./auth`);
///const  apiRouter = require(`./api`);
module.exports = function(app, logger) 
{
    app.use('/api/*', function (req, res, next) 
    {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
        next();
    });
    app.use('/api/*',function(req, res, next) 
    {
        var data = '';
        req.setEncoding('utf8');
        req.on('data', function(chunk) { 
            data += chunk;
        });
        req.on('end', function() {
            req.rawBody = data;
            next();
        });
    });
    authRouter(app, logger);
    //apiRouter(app, logger);
}