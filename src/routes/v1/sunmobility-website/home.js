const express = require('express');
const homeRouter = express.Router();

const { getHome } = require('../../../controllers/v1/sunmobility-website');

// Get Home
homeRouter.get('/', getHome);

module.exports = homeRouter;
