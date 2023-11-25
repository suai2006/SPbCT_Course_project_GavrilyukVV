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
  next(createError(404));
});

app.use(function(err, req, res, next) 
{
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

var port = process.env.PORT || '3000'
http.createServer(app).listen(port,"127.0.0.1", () => 
{
    logger.log(`listening at ${port}`);
});
