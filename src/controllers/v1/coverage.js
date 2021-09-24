const CoverageRepo = require('../../db/repository/coverageRepo');

const createCoverage = async (req, res) => {
  try {
    const coverage = await CoverageRepo.createCoverage(req.body);
    if (coverage) {
      res.json({
        status: true,
        message: 'Coverage created successfully',
        data: coverage
      });
    } else {
      res.json({
        status: false,
        message: 'Failed to create coverage',
        data: coverage
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getCoverages = async (req, res) => {
  const { pageNumber, pageSize } = req.query;

  try {
    const coverages = await CoverageRepo.getCoverages(pageNumber, pageSize);
    if (coverages) {
      res.json({
        status: true,
        message: 'All Coverages',
        ...coverages
      });
    } else {
      res.json({
        status: false,
        message: 'Coverages not found',
        ...coverages
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getCoverageByCategoryId = async (req, res) => {
  try {
    const { pageNumber, pageSize } = req.query;
    const coverages = await CoverageRepo.getCoverageByCategoryId(
      req.params.id,
      pageNumber,
      pageSize
    );
    if (coverages) {
      res.json({
        status: true,
        message: `Coverages by category: ${req.params.id}`,
        ...coverages
      });
    } else {
      res.json({
        status: false,
        message: 'Coverages not found',
        ...coverages
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getCoverageById = async (req, res) => {
  try {
    const coverage = await CoverageRepo.getCoverageById(req.params.id);
    if (coverage) {
      res.json({
        status: true,
        message: `Coverage id: ${req.params.id}`,
        data: coverage
      });
    } else {
      res.json({
        status: false,
        message: 'Coverages not found',
        data: {}
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const updateCoverage = async (req, res) => {
  try {
    const updatedCoverage = await CoverageRepo.updateCoverage(
      req.params.id,
      req.body
    );
    if (updatedCoverage[0]) {
      res.status(200).json({
        status: true,
        message: 'Coverage updated successfully'
      });
    } else {
      res.json({
        status: false,
        message: 'Invalid coverage'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const deleteCoverage = async (req, res) => {
  try {
    const coverage = await CoverageRepo.deleteCoverage(req.params.id);
    if (coverage) {
      res.status(204).json({
        status: true,
        message: 'Coverage deleted successfully'
      });
    } else {
      res.json({
        status: true,
        message: 'Invalid coverage'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

module.exports = {
  createCoverage,
  getCoverages,
  getCoverageByCategoryId,
  getCoverageById,
  updateCoverage,
  deleteCoverage
};
