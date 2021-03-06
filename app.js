var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
//var cors = require('cors')
var ev = require('express-validation');
require('dotenv').config()
require('./auth/config')(passport)

var User = require('./models/user');
var users = require('./api/users');
var projects = require('./api/projects');
var auth = require('./auth/index');

var app = express();

// db connection
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_CONNECT);

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Express and Passport Session
// app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    if (!err) done(null, user);
    else done(err, null);
  });
});

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//app.use('/', index);
app.use('/api/users', users);
app.use('/api/', projects);
app.use('/auth', auth);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // query validation
  if (err instanceof ev.ValidationError) {
    return res.status(err.status).json(err);
  }
  
  // render the error page
  res.status(err.status || 500);
  res.render();
});

module.exports = app;
