const express = require('express');
const mediaRouter = express.Router();

const {
  getCoverageList
} = require('../../../controllers/v1/sunmobility-website');
const {
  getImageGalleryList
} = require('../../../controllers/v1/sunmobility-website');
const {
  getVideosList
} = require('../../../controllers/v1/sunmobility-website');
const {
  getMediaKitList
} = require('../../../controllers/v1/sunmobility-website');

// Get Coverage
mediaRouter.get('/coverages', getCoverageList);

// Get ImageGallery
mediaRouter.get('/image_galleries', getImageGalleryList);

// Get Video
mediaRouter.get('/videos', getVideosList);

// Get MediaKit
mediaRouter.get('/mediakits', getMediaKitList);

module.exports = mediaRouter;
