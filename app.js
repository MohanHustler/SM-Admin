const express = require('express');

const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const favicon = require('serve-favicon');

const routesV1 = require('./src/routes/v1');

const app = express();

// Pass the global passport object into the configuration function
require('./config/passport')(passport);

// This will initialize the passport object on every request
app.use(passport.initialize());

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  favicon(path.join(__dirname, 'src', 'assets', 'images', 'favicon.png'))
);

// CORS configuration.
app.use(cors());

// App routes
app.use('/v1', routesV1);
app.get('/', function (req, res) {
  res.redirect('/v1/api/welcome');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.json({
    status: false,
    statusCode: 404,
    message: 'Resource not found',
    data: 'Not Found'
  });
});

// error handler
app.use(function (err, req, res, next) {
  res.json({
    status: false,
    statusCode: err.status || 500,
    message: err.message,
    data: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
