const express = require('express');
const welcomeRouter = express.Router();

/* GET Welcome page. */
welcomeRouter.get('/', function (req, res) {
  res.json({
    status: true,
    message: 'Welcome to Sun Mobility',
    data: 'Check on readme docs for API list.'
  });
});

module.exports = welcomeRouter;
