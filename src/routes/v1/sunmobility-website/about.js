const express = require('express');
const aboutRouter = express.Router();

const { getAbout } = require('../../../controllers/v1/sunmobility-website');

// Get Milestone
aboutRouter.get('/', getAbout);

module.exports = aboutRouter;
