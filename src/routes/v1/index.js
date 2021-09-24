const express = require('express');
const passport = require('passport');
const router = express.Router();

const { uploadFiles } = require('../../azure/upload');
const apiRoutes = require('./api');
const { loginRouter } = require('./api/user');
const welcomeRouter = require('./api/welcome');
const sunmobilityRoutes = require('./sunmobility-website');

router.use('/api/welcome', welcomeRouter);
router.use('/api/users', loginRouter);
router.use('/sm', sunmobilityRoutes);

router.use(
  '/api',
  passport.authenticate('jwt', { session: false }),
  uploadFiles,
  apiRoutes
);

module.exports = router;
