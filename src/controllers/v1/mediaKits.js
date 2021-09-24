const MediaKitRepo = require('../../db/repository/mediaKitRepo');

const createMediaKit = async (req, res) => {
  try {
    const mediaKit = await MediaKitRepo.createMediaKit(req.body);
    if (mediaKit) {
      res.json({
        status: true,
        message: 'MediaKit created successfully',
        data: mediaKit
      });
    } else {
      res.json({
        status: false,
        message: 'Failed to create mediaKit',
        data: mediaKit
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getMediaKits = async (req, res) => {
  const { pageNumber, pageSize } = req.query;

  try {
    await MediaKitRepo.getMediaKits(pageNumber, pageSize)
      .then((mediaKits) => {
        res.json({
          status: true,
          message: 'All MediaKits',
          ...mediaKits
        });
      })
      .catch((err) => {
        res.json({ status: false, error: err });
      });
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getUnderSectionBy = async (req, res) => {
  try {
    await MediaKitRepo.getUnderSectionBy()
      .then((mediaKits) => {
        res.json({
          status: true,
          message: 'All Section By',
          ...mediaKits
        });
      })
      .catch((err) => {
        res.json({ status: false, error: err });
      });
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getMediaKitByCategoryId = async (req, res) => {
  try {
    const { pageNumber, pageSize } = req.query;

    await MediaKitRepo.getMediaKitByCategoryId(
      req.params.id,
      pageNumber,
      pageSize
    )
      .then((mediaKits) => {
        res.json({
          status: true,
          message: `MediaKits by category: ${req.params.id}`,
          ...mediaKits
        });
      })
      .catch((err) => {
        res.json({ status: false, error: err });
      });
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getMediaKitById = async (req, res) => {
  try {
    const mediaKit = await MediaKitRepo.getMediaKitById(req.params.id);
    if (mediaKit) {
      res.json({
        status: true,
        message: `MediaKits id: ${req.params.id}`,
        data: mediaKit
      });
    } else {
      res.json({
        status: false,
        message: `MediaKits id: ${req.params.id}`,
        data: {}
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const updateMediaKit = async (req, res) => {
  try {
    const updatedMediaKit = await MediaKitRepo.updateMediaKit(
      req.params.id,
      req.body
    );
    if (updatedMediaKit[0]) {
      res.status(200).json({
        status: true,
        message: 'MediaKit updated successfully'
      });
    } else {
      res.json({
        status: false,
        message: 'Invalid mediaKit'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const deleteMediaKit = async (req, res) => {
  try {
    const mediaKit = await MediaKitRepo.deleteMediaKit(req.params.id);
    if (mediaKit) {
      res.status(204).json({
        status: true,
        message: 'MediaKit deleted successfully'
      });
    } else {
      res.json({
        status: true,
        message: 'Invalid mediaKit'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

module.exports = {
  createMediaKit,
  getMediaKits,
  getUnderSectionBy,
  getMediaKitByCategoryId,
  getMediaKitById,
  updateMediaKit,
  deleteMediaKit
};
