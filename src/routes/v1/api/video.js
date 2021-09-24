const express = require('express');
const videoRouter = express.Router();

const {
  createVideo,
  getVideos,
  updateVideo,
  deleteVideo,
  getVideoById,
  getVideoByCategoryId
} = require('../../../controllers/v1/videos');

// Create Video
videoRouter.post('/', createVideo);

// Get Video
videoRouter.get('/', getVideos);

// Get video by category id
videoRouter.get('/category/:id', getVideoByCategoryId);

// Get video by id
videoRouter.get('/:id', getVideoById);

// Update Video
videoRouter.patch('/:id', updateVideo);

// Delete Video
videoRouter.delete('/:id', deleteVideo);

module.exports = videoRouter;
