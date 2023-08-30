var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var cors = require('cors');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
// Use the cors middleware without any options
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/SimplySouth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    // initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/', indexRouter);
// app.use('/users', usersRouter);
var routerFranchise = require('./routes/franchiiseRoute')
app.use('/franchise',routerFranchise)

var routerAuth = require('./routes/usersRoute')
app.use('/auth',routerAuth)

var routerFeedback = require('./routes/feedbackRoute')
app.use('/feedback',routerFeedback)

var routerAddress = require('./routes/addressRoute')
app.use('/address',routerAddress)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'simplysouthfolder', 'index.html'));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
