const express = require('express');
const newsRouter = express.Router();

const {
  createNews,
  getNews,
  updateNews,
  deleteNews,
  getNewsById
} = require('../../../controllers/v1/news');

// Create News
newsRouter.post('/', createNews);

// Get News
newsRouter.get('/', getNews);

// Get News By Id
newsRouter.get('/:id', getNewsById);

// Update News
newsRouter.patch('/:id', updateNews);

// Delete News
newsRouter.delete('/:id', deleteNews);

module.exports = newsRouter;
