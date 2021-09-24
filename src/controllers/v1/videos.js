const VideoRepo = require('../../db/repository/videoRepo');

const createVideo = async (req, res) => {
  try {
    const video = await VideoRepo.createVideo(req.body);
    if (video) {
      res.json({
        status: true,
        message: 'Video created successfully',
        data: video
      });
    } else {
      res.json({
        status: false,
        message: 'Failed to create video',
        data: video
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getVideos = async (req, res) => {
  const { pageNumber, pageSize } = req.query;

  try {
    const videos = await VideoRepo.getVideos(pageNumber, pageSize);
    if (videos) {
      res.json({
        status: true,
        message: 'All Videos',
        ...videos
      });
    } else {
      res.json({
        status: false,
        message: 'Videos not found',
        ...videos
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getVideoByCategoryId = async (req, res) => {
  try {
    const { pageNumber, pageSize } = req.query;

    const videos = await VideoRepo.getVideoByCategoryId(
      req.params.id,
      pageNumber,
      pageSize
    );
    if (videos) {
      res.json({
        status: true,
        message: `Videos by category id: ${req.params.id}`,
        ...videos
      });
    } else {
      res.json({
        status: false,
        message: 'Videos not found',
        ...videos
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getVideoById = async (req, res) => {
  try {
    const video = await VideoRepo.getVideoById(req.params.id);
    if (video) {
      res.json({
        status: true,
        message: `Video id: ${req.params.id}`,
        data: video
      });
    } else {
      res.json({
        status: false,
        message: 'Videos not found',
        data: {}
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const updateVideo = async (req, res) => {
  try {
    const updatedVideo = await VideoRepo.updateVideo(req.params.id, req.body);
    if (updatedVideo[0]) {
      res.status(200).json({
        status: true,
        message: 'Video updated successfully'
      });
    } else {
      res.json({
        status: false,
        message: 'Invalid video'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const deleteVideo = async (req, res) => {
  try {
    const video = await VideoRepo.deleteVideo(req.params.id);
    if (video) {
      res.status(204).json({
        status: true,
        message: 'Video deleted successfully'
      });
    } else {
      res.json({
        status: true,
        message: 'Invalid video'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

module.exports = {
  createVideo,
  getVideos,
  getVideoByCategoryId,
  getVideoById,
  updateVideo,
  deleteVideo
};
