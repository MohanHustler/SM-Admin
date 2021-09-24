const express = require('express');
const imageGalleryRouter = express.Router();

const {
  createImageGallery,
  getImageGalleries,
  updateImageGallery,
  deleteImageGallery,
  getImageGalleryById,
  getImageGalleryByCategoryId,
  getLaunchesWithYear
} = require('../../../controllers/v1/imageGallery');

// Create ImageGallery
imageGalleryRouter.post('/', createImageGallery);

// Get ImageGallery
imageGalleryRouter.get('/', getImageGalleries);

// Get ImageGallery By Category Id
imageGalleryRouter.get('/category/:id', getImageGalleryByCategoryId);

// Get ImageGallery By Id
imageGalleryRouter.get('/:id', getImageGalleryById);

// Get Launches With Year
imageGalleryRouter.get('/launches/:id', getLaunchesWithYear);

// Update ImageGallery
imageGalleryRouter.patch('/:id', updateImageGallery);

// Delete ImageGallery
imageGalleryRouter.delete('/:id', deleteImageGallery);

module.exports = imageGalleryRouter;
