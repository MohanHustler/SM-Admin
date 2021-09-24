const express = require('express');
const partnerRouter = express.Router();

const {
  createPartner,
  getPartners,
  updatePartner,
  deletePartner,
  getPartnerById
} = require('../../../controllers/v1/partners');

// Get All Partner
partnerRouter.get('/', getPartners);

// Create Partner News
partnerRouter.post('/', createPartner);

// Get Partner By Id
partnerRouter.get('/:id', getPartnerById);

// Update Partner
partnerRouter.patch('/:id', updatePartner);

// Delete Partner
partnerRouter.delete('/:id', deletePartner);

module.exports = partnerRouter;
