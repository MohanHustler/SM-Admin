const express = require('express');
const mediaKitRouter = express.Router();

const {
  createMediaKit,
  getMediaKits,
  getUnderSectionBy,
  updateMediaKit,
  deleteMediaKit,
  getMediaKitById,
  getMediaKitByCategoryId
} = require('../../../controllers/v1/mediaKits');

// Create MediaKit
mediaKitRouter.post('/', createMediaKit);

// Get MediaKit
mediaKitRouter.get('/', getMediaKits);

// Get Under Section By
mediaKitRouter.get('/heading', getUnderSectionBy);

// Get MediaKit By Category Id
mediaKitRouter.get('/category/:id', getMediaKitByCategoryId);

// Get MediaKit By Id
mediaKitRouter.get('/:id', getMediaKitById);

// Update MediaKit
mediaKitRouter.patch('/:id', updateMediaKit);

// Delete MediaKit
mediaKitRouter.delete('/:id', deleteMediaKit);

module.exports = mediaKitRouter;
