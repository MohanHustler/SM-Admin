const express = require('express');
const networkRouter = express.Router();

const {
  createNetwork,
  getNetworks,
  updateNetwork,
  deleteNetwork,
  getNetworkById
} = require('../../../controllers/v1/networks');

// Create Network
networkRouter.post('/', createNetwork);

// Get Network
networkRouter.get('/', getNetworks);

// Get Network By Id
networkRouter.get('/:id', getNetworkById);

// Update Network
networkRouter.patch('/:id', updateNetwork);

// Delete Network
networkRouter.delete('/:id', deleteNetwork);

module.exports = networkRouter;
