const express = require('express');
const coverageRouter = express.Router();

const {
  createCoverage,
  getCoverages,
  updateCoverage,
  deleteCoverage,
  getCoverageById,
  getCoverageByCategoryId
} = require('../../../controllers/v1/coverage');

// Create Coverage
coverageRouter.post('/', createCoverage);

// Get Coverage
coverageRouter.get('/', getCoverages);

// Get Coverage By Category Id
coverageRouter.get('/category/:id', getCoverageByCategoryId);

// Get Coverage By Id
coverageRouter.get('/:id', getCoverageById);

// Update Coverage
coverageRouter.patch('/:id', updateCoverage);

// Delete Coverage
coverageRouter.delete('/:id', deleteCoverage);

module.exports = coverageRouter;
