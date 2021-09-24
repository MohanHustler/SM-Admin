const SunMobilityWebsiteRepo = require('../../db/repository/sunmobilityWebsiteRepo');

const getHome = async (req, res) => {
  try {
    const homeData = await SunMobilityWebsiteRepo.getHome();
    if (homeData) {
      res.json({
        status: true,
        message: 'Home Data',
        data: {
          news_list: homeData[0],
          network_list: homeData[1]
        }
      });
    } else {
      res.json({
        status: false,
        message: 'Data not found',
        data: news
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getAbout = async (req, res) => {
  try {
    const aboutData = await SunMobilityWebsiteRepo.getAbout();
    if (aboutData) {
      res.json({
        status: true,
        message: 'About Data',
        data: {
          partnership_list: aboutData[0],
          milestone_list: aboutData[1]
        }
      });
    } else {
      res.json({
        status: false,
        message: 'Data not found',
        data: news
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getCoverageList = async (req, res) => {
  try {
    const coverageData = await SunMobilityWebsiteRepo.getCoverageList();
    if (coverageData) {
      res.json({
        status: true,
        message: 'Coverage Data',
        data: coverageData
      });
    } else {
      res.json({
        status: false,
        message: 'Data not found',
        data: news
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getImageGalleryList = async (req, res) => {
  try {
    const imageGalleryData = await SunMobilityWebsiteRepo.getImageGalleryList();
    if (imageGalleryData) {
      res.json({
        status: true,
        message: 'ImageGallery Data',
        data: imageGalleryData
      });
    } else {
      res.json({
        status: false,
        message: 'Data not found',
        data: news
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getVideosList = async (req, res) => {
  try {
    const videosData = await SunMobilityWebsiteRepo.getVideosList();
    if (videosData) {
      res.json({
        status: true,
        message: 'Videos Data',
        data: videosData
      });
    } else {
      res.json({
        status: false,
        message: 'Data not found',
        data: news
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getMediaKitList = async (req, res) => {
  try {
    const mediaKitData = await SunMobilityWebsiteRepo.getMediaKitList();
    if (mediaKitData) {
      res.json({
        status: true,
        message: 'MediaKit Data',
        data: mediaKitData
      });
    } else {
      res.json({
        status: false,
        message: 'Data not found',
        data: news
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

module.exports = {
  getHome,
  getAbout,
  getCoverageList,
  getImageGalleryList,
  getVideosList,
  getMediaKitList
};
