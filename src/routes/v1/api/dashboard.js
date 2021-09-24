const express = require('express');
const dashboardRouter = express.Router();

const getDashboard = require('../../../controllers/v1/dashboard');

// Get dashboard
dashboardRouter.get('/', getDashboard);

module.exports = dashboardRouter;
