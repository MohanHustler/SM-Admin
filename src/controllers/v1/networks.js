const NetworkRepo = require('../../db/repository/networkRepo');

const createNetwork = async (req, res) => {
  try {
    const network = await NetworkRepo.createNetwork(req.body);
    if (network) {
      res.json({
        status: true,
        message: 'Network created successfully',
        data: network
      });
    } else {
      res.json({
        status: false,
        message: 'Failed to create network',
        data: network
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getNetworks = async (req, res) => {
  const { pageNumber, pageSize } = req.query;

  try {
    const networks = await NetworkRepo.getNetworks(pageNumber, pageSize);
    if (networks) {
      res.json({
        status: true,
        message: 'All Networks',
        ...networks
      });
    } else {
      res.json({
        status: false,
        message: 'Networks not found',
        ...networks
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getNetworkById = async (req, res) => {
  try {
    const network = await NetworkRepo.getNetworkById(req.params.id);
    if (network) {
      res.json({
        status: true,
        message: `Network id: ${req.params.id}`,
        data: network
      });
    } else {
      res.json({
        status: false,
        message: 'Networks not found',
        data: {}
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const updateNetwork = async (req, res) => {
  try {
    const updatedNetwork = await NetworkRepo.updateNetwork(
      req.params.id,
      req.body
    );
    if (updatedNetwork[0]) {
      res.status(200).json({
        status: true,
        message: 'Network updated successfully'
      });
    } else {
      res.json({
        status: false,
        message: 'Invalid network'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const deleteNetwork = async (req, res) => {
  try {
    const network = await NetworkRepo.deleteNetwork(req.params.id);
    if (network) {
      res.status(204).json({
        status: true,
        message: 'Network deleted successfully'
      });
    } else {
      res.json({
        status: true,
        message: 'Invalid network'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

module.exports = {
  createNetwork,
  getNetworks,
  getNetworkById,
  updateNetwork,
  deleteNetwork
};
