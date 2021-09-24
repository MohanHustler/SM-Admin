const PartnerRepo = require('../../db/repository/partnerRepo');

const createPartner = async (req, res) => {
  try {
    const partner = await PartnerRepo.createPartner(req.body);
    if (partner) {
      res.json({
        status: true,
        message: 'Partner created successfully',
        data: partner
      });
    } else {
      res.json({
        status: false,
        message: 'Failed to create partner',
        data: partner
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getPartners = async (req, res) => {
  const { pageNumber, pageSize } = req.query;

  try {
    const partners = await PartnerRepo.getPartners(pageNumber, pageSize);

    if (partners) {
      res.json({
        status: true,
        message: 'All Partners',
        ...partners
      });
    } else {
      res.json({
        status: false,
        message: 'Partner not found',
        ...partners
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getPartnerById = async (req, res) => {
  try {
    const partner = await PartnerRepo.getPartnerById(req.params.id);
    if (partner) {
      res.json({
        status: true,
        message: `Partners id: ${req.params.id}`,
        data: partner
      });
    } else {
      res.json({
        status: false,
        message: 'Partner not found',
        data: {}
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const updatePartner = async (req, res) => {
  try {
    const updatedPartner = await PartnerRepo.updatePartner(
      req.params.id,
      req.body
    );
    if (updatedPartner[0]) {
      res.status(200).json({
        status: true,
        message: 'Partner updated successfully'
      });
    } else {
      res.json({
        status: false,
        message: 'Invalid partner'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const deletePartner = async (req, res) => {
  try {
    const partner = await PartnerRepo.deletePartner(req.params.id);
    if (partner) {
      res.status(204).json({
        status: true,
        message: 'Partner deleted successfully'
      });
    } else {
      res.json({
        status: true,
        message: 'Invalid partner'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

module.exports = {
  createPartner,
  getPartners,
  getPartnerById,
  updatePartner,
  deletePartner
};
