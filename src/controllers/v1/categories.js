const CategoryRepo = require('../../db/repository/categoryRepo');

const createCategory = async (req, res) => {
  try {
    const category = await CategoryRepo.createCategory(req.body);
    if (category) {
      res.json({
        status: true,
        message: 'Category created successfully',
        data: category
      });
    } else {
      res.json({
        status: false,
        message: 'Failed to create category',
        data: category
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await CategoryRepo.getCategories();

    if (categories) {
      res.json({
        status: true,
        message: 'All categories',
        ...categories
      });
    } else {
      res.json({
        status: false,
        message: 'Categories not found',
        ...categories
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await CategoryRepo.getCategoryById(req.params.id);
    if (category) {
      res.json({
        status: true,
        message: `Category id: ${req.params.id}`,
        data: category
      });
    } else {
      res.json({
        status: false,
        message: 'Categories not found',
        data: {}
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getCategoryByIndicator = async (req, res) => {
  try {
    const category = await CategoryRepo.getCategoryByIndicator(
      req.params.indicator
    );
    if (category) {
      res.json({
        status: true,
        message: `Category indicator: ${req.params.indicator}`,
        data: category
      });
    } else {
      res.json({
        status: false,
        message: 'Categories not found',
        data: []
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await CategoryRepo.updateCategory(
      req.params.id,
      req.body
    );
    if (updatedCategory[0]) {
      res.status(200).json({
        status: true,
        message: 'Category updated successfully'
      });
    } else {
      res.json({
        status: false,
        message: 'Invalid category'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await CategoryRepo.deleteCategory(req.params.id);
    if (category) {
      res.status(204).json({
        status: true,
        message: 'Category deleted successfully'
      });
    } else {
      res.json({
        status: true,
        message: 'Invalid category'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  getCategoryByIndicator,
  updateCategory,
  deleteCategory
};
