const ImageGalleryRepo = require('../../db/repository/imageGalleryRepo');

const createImageGallery = async (req, res) => {
  try {
    const imageGallery = await ImageGalleryRepo.createImageGallery(req.body);
    if (imageGallery) {
      res.json({
        status: true,
        message: 'Image Gallery created successfully',
        data: imageGallery
      });
    } else {
      res.json({
        status: false,
        message: 'Failed to create image gallery',
        data: imageGallery
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getImageGalleries = async (req, res) => {
  const { pageNumber, pageSize } = req.query;

  try {
    const imageGalleries = await ImageGalleryRepo.getImageGallery(
      pageNumber,
      pageSize
    );

    if (imageGalleries) {
      res.json({
        status: true,
        message: 'Image gallery',
        ...imageGalleries
      });
    } else {
      res.json({
        status: false,
        message: 'Image gallery not found',
        ...imageGalleries
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getImageGalleryByCategoryId = async (req, res) => {
  try {
    const { pageNumber, pageSize } = req.query;

    const imageGalleries = await ImageGalleryRepo.getImageGalleryByCategoryId(
      req.params.id,
      pageNumber,
      pageSize
    );

    if (imageGalleries) {
      res.json({
        status: true,
        message: `Image galleries by category: ${req.params.id}`,
        ...imageGalleries
      });
    } else {
      res.json({
        status: false,
        message: 'Image gallery not found',
        ...imageGalleries
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getImageGalleryById = async (req, res) => {
  try {
    const imageGallery = await ImageGalleryRepo.getImageGalleryById(
      req.params.id
    );
    if (imageGallery) {
      res.json({
        status: true,
        message: `Image gallery: ${req.params.id}`,
        data: imageGallery
      });
    } else {
      res.json({
        status: false,
        message: 'Image gallery not found',
        data: {}
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getLaunchesWithYear = async (req, res) => {
  try {
    const imageGalleries = await ImageGalleryRepo.getLaunchesWithYear(
      req.params.id
    );

    if (imageGalleries) {
      res.json({
        status: true,
        message: 'Launches with year list',
        ...imageGalleries
      });
    } else {
      res.json({
        status: false,
        message: 'Launches with year not found',
        ...imageGalleries
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const updateImageGallery = async (req, res) => {
  try {
    const updatedImageGallery = await ImageGalleryRepo.updateImageGallery(
      req.params.id,
      req.body
    );
    if (updatedImageGallery[0]) {
      res.status(200).json({
        status: true,
        message: 'Image gallery updated successfully'
      });
    } else {
      res.json({
        status: false,
        message: 'Invalid image gallery'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const deleteImageGallery = async (req, res) => {
  try {
    const imageGallery = await ImageGalleryRepo.deleteImageGallery(
      req.params.id
    );
    if (imageGallery) {
      res.status(204).json({
        status: true,
        message: 'ImageGallery deleted successfully'
      });
    } else {
      res.json({
        status: true,
        message: 'Invalid image gallery'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

module.exports = {
  createImageGallery,
  getImageGalleries,
  getImageGalleryByCategoryId,
  getImageGalleryById,
  getLaunchesWithYear,
  updateImageGallery,
  deleteImageGallery
};
