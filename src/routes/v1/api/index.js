const express = require('express');
const router = express.Router();

const { userRouter } = require('./user');
const networkRouter = require('./network');
const newsRouter = require('./news');
const milestoneRouter = require('./milestone');
const partnerRouter = require('./partner');
const coverageRouter = require('./coverage');
const imageGalleryRouter = require('./imageGallery');
const mediaKitRouter = require('./mediaKit');
const videoRouter = require('./video');
const partnerNewsRouter = require('./partnerNews');
const categoryRouter = require('./category');
const dashboardRouter = require('./dashboard');

router.use('/users', userRouter);
router.use('/networks', networkRouter);
router.use('/news', newsRouter);
router.use('/milestones', milestoneRouter);
router.use('/partners', partnerRouter);
router.use('/coverages', coverageRouter);
router.use('/image_galleries', imageGalleryRouter);
router.use('/mediakits', mediaKitRouter);
router.use('/videos', videoRouter);
router.use('/partner_news', partnerNewsRouter);
router.use('/categories', categoryRouter);
router.use('/dashboard', dashboardRouter);

module.exports = router;
