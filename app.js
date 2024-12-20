var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var router = require('./Routes/routes');
var parser = require('body-parser')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(parser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect('mongodb+srv://saikirantadela21:LRPhhsro8Khbtfxs@cluster0.wfjdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then( res =>{
  console.log("Database Connected")
})
.catch( err =>{
  console.log(err)
})
 
app.use('/' , router);
const port = 1252;
app.listen(port , ()=>{
  console.log(`the port is listening at ${port}`)
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
