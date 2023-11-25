var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var twig = require('twig');
var cookieParser = require('cookie-parser');
var config = require('./env.config');
var Logger = require('./core/logger');
var logger = new Logger(config);
const  registryRouter = require(`./routes`);
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
twig.cache(false);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

registryRouter(app, logger);

app.use(function(req, res, next) {
  let err = new Error('Страница не найдена');
  err.status = 404;
  err.stack = "Запрашиваемая страница не найдена";
  next(err);
});

app.use(function(err, req, res, next) 
{
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    if(req.headers['x-requested-with'] == 'XHR')
    {
      res.send({error: {message: err.message, stack: err.stack}});
    }
    else res.render('error');  
});

var port = process.env.PORT || '3000'
http.createServer(app).listen(port,"0.0.0.0", () => 
{
    logger.log(`listening at ${port}`);
});
