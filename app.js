var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var conn=require('./connection')
var usersRouter = require('./routes/users');
var cRouter = require('./routes/croute');
var loginRouter = require('./routes/login');
const bodyParser = require('body-parser')
const formRoutes = require('./routes/formRoutes');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/javascripts', express.static(__dirname+'pubic/javascripts'));
const paths=path.join(__dirname,'/public');
app.use(express.static(paths));
app.use(express.static(path.join(__dirname,'/views')));

app.use('/', formRoutes);
app.use('/croute', cRouter);
app.use('/', loginRouter);
app.use('/users', usersRouter);





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


app.listen(5050,(err)=>{
 if(err)
 console.log(err);
 else
 console.log("yupp");

})

module.exports = app;
