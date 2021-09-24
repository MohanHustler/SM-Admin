const express = require('express');
const partnerNewsRouter = express.Router();

const {
  createPartnerWithBulkNews,
  createPartnerNews,
  getPartnerNews,
  updatePartnerNews,
  deletePartnerNews,
  getPartnerNewsById
} = require('../../../controllers/v1/partnersNews');

// Create Partner With News
partnerNewsRouter.post('/bulkcreate', createPartnerWithBulkNews);

// Create Partner News
partnerNewsRouter.post('/', createPartnerNews);

// Get Partner News
partnerNewsRouter.get('/', getPartnerNews);

// Get Partner News By Id
partnerNewsRouter.get('/:id', getPartnerNewsById);

// Update Partner News
partnerNewsRouter.patch('/:id', updatePartnerNews);

// Delete Partner News
partnerNewsRouter.delete('/:id', deletePartnerNews);

module.exports = partnerNewsRouter;
