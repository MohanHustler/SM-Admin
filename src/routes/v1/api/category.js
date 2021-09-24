const express = require('express');
const categoryRouter = express.Router();

const {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
  getCategoryById,
  getCategoryByIndicator
} = require('../../../controllers/v1/categories');

// Create Category
categoryRouter.post('/', createCategory);

// Get Category
categoryRouter.get('/', getCategories);

// Get Category By Id
categoryRouter.get('/:id', getCategoryById);

// Get Category By Indicator
categoryRouter.get('/indicator/:indicator', getCategoryByIndicator);

// Update Category
categoryRouter.patch('/:id', updateCategory);

// Delete Category
categoryRouter.delete('/:id', deleteCategory);

module.exports = categoryRouter;
