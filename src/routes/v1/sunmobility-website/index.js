const express = require('express');
const router = express.Router();

const homeRouter = require('./home');
const aboutRouter = require('./about');
const mediaRouter = require('./media');

router.use('/home', homeRouter);
router.use('/about', aboutRouter);
router.use('/media', mediaRouter);

module.exports = router;
