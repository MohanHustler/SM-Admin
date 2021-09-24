const PartnerNewsRepo = require('../../db/repository/partnerNewsRepo');

const createPartnerWithBulkNews = async (req, res) => {
  try {
    const partnerNewsData = extractPartnerNewsData(req.body);
    const partnerNews = await PartnerNewsRepo.createPartnerWithBulkNews(
      req.body,
      partnerNewsData
    );
    if (partnerNews.length) {
      res.json({
        status: true,
        message: 'Partner with news created successfully'
      });
    } else {
      res.json({
        status: false,
        message: 'Failed to create partner with news'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const createPartnerNews = async (req, res) => {
  try {
    const partnerNews = await PartnerNewsRepo.createPartnerNews(req.body);
    if (partnerNews) {
      res.json({
        status: true,
        message: 'Partner news created successfully'
      });
    } else {
      res.json({
        status: false,
        message: 'Failed to create partner news'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getPartnerNews = async (req, res) => {
  const { pageNumber, pageSize } = req.query;

  try {
    const partnerNews = await PartnerNewsRepo.getPartnerNews(
      pageNumber,
      pageSize
    );
    if (partnerNews) {
      res.json({
        status: true,
        message: 'All partner with news',
        ...partnerNews
      });
    } else {
      res.json({
        status: false,
        message: 'Not found partner with news',
        ...partnerNews
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getPartnerNewsById = async (req, res) => {
  try {
    const partnerNews = await PartnerNewsRepo.getPartnerNewsById(req.params.id);
    if (partnerNews) {
      res.json({
        status: true,
        message: `Partner news id: ${req.params.id}`,
        data: partnerNews
      });
    } else {
      res.json({
        status: false,
        message: 'Not found partner news',
        data: {}
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const updatePartnerNews = async (req, res) => {
  try {
    const updatedPartnerNews = await PartnerNewsRepo.updatePartnerNews(
      req.params.id,
      req.body
    );
    if (updatedPartnerNews[0]) {
      res.status(200).json({
        status: true,
        message: 'Partner news updated successfully'
      });
    } else {
      res.json({
        status: false,
        message: 'Invalid partner news'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const deletePartnerNews = async (req, res) => {
  try {
    const partnerNews = await PartnerNewsRepo.deletePartnerNews(req.params.id);
    if (partnerNews) {
      res.status(204).json({
        status: true,
        message: 'Partner news deleted successfully'
      });
    } else {
      res.json({
        status: true,
        message: 'Invalid partner news'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const extractPartnerNewsData = (partnerWithNews) => {
  try {
    const partnerNews = [];

    for (var key in partnerWithNews) {
      if (key.includes('partner_news')) {
        const index = key.split('.')[0].split('[')[1][0];
        const newsKey = key.split('.')[1];
        const newsData = partnerWithNews[key];
        if (!partnerNews.length) {
          partnerNews[index] = { [newsKey]: newsData };
        } else {
          partnerNews[index] = {
            ...partnerNews[index],
            [newsKey]: newsData
          };
        }
      }
    }

    return partnerNews;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createPartnerWithBulkNews,
  createPartnerNews,
  getPartnerNews,
  getPartnerNewsById,
  updatePartnerNews,
  deletePartnerNews
};
