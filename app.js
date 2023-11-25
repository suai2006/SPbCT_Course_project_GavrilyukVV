var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var twig = require('twig');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var appRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var apiRouter = require('./routes/api');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
twig.cache(false);

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth', authRouter);
app.use('*', (req, res, next) => 
{
  const sessionToken = req.cookies['jwt'];
  if (!sessionToken) res.redirect('/auth');
  else next(); 
});

app.use('/', appRouter);
app.use('/api', apiRouter);

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

module.exports = app;
