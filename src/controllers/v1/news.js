const NewsRepo = require('../../db/repository/newsRepo');

const createNews = async (req, res) => {
  try {
    const news = await NewsRepo.createNews(req.body);
    if (news) {
      res.json({
        status: true,
        message: 'News created successfully',
        data: news
      });
    } else {
      res.json({
        status: false,
        message: 'Failed to create news',
        data: news
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getNews = async (req, res) => {
  const { pageNumber, pageSize } = req.query;

  try {
    const news = await NewsRepo.getNews(pageNumber, pageSize);

    if (news) {
      res.json({
        status: true,
        message: 'All News',
        ...news
      });
    } else {
      res.json({
        status: false,
        message: 'News not found',
        ...news
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getNewsById = async (req, res) => {
  try {
    const news = await NewsRepo.getNewsById(req.params.id);
    if (news) {
      res.json({
        status: true,
        message: `News id: ${req.params.id}`,
        data: news
      });
    } else {
      res.json({
        status: false,
        message: 'News not found',
        data: {}
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const updateNews = async (req, res) => {
  try {
    const updatedNews = await NewsRepo.updateNews(req.params.id, req.body);
    if (updatedNews[0]) {
      res.status(200).json({
        status: true,
        message: 'News updated successfully'
      });
    } else {
      res.json({
        status: false,
        message: 'Invalid news'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const deleteNews = async (req, res) => {
  try {
    const news = await NewsRepo.deleteNews(req.params.id);
    if (news) {
      res.status(204).json({
        status: true,
        message: 'News deleted successfully'
      });
    } else {
      res.json({
        status: true,
        message: 'Invalid news'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

module.exports = {
  createNews,
  getNews,
  getNewsById,
  updateNews,
  deleteNews
};
