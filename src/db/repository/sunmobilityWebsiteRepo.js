const db = require('..');

class SunMobilityWebsiteRepo {
  static async getHome() {
    try {
      const newsList = await db.News.findAll({
        order: [['id', 'DESC']]
      });

      const allNews = [];
      if (newsList.length > 0) {
        newsList.map((news) => {
          allNews.push({
            id: news.id,
            banner_image: news.banner_image,
            description: news.description,
            news_link: news.news_link,
            heading: news.heading,
            partner_logo_image: news.partner_logo_image
          });
        });
      }

      const networks = await db.Network.findAll({
        order: [['id', 'DESC']]
      });
      const allNetwork = [];
      if (networks.length > 0) {
        networks.map((network) => {
          allNetwork.push({
            id: network.id,
            title: network.title
          });
        });
      }

      return [allNews, allNetwork];
    } catch (err) {
      throw err;
    }
  }

  static async getAbout() {
    try {
      const allPartnerWithNews = await db.Partner.findAll({
        include: [
          {
            model: db.PartnerNews
          }
        ]
      });

      const milestones = await db.Milestone.findAll({
        order: [['id', 'DESC']]
      });

      let allMilestone = [];
      if (milestones.length > 0) {
        milestones.map((milestone) => {
          allMilestone.push({
            id: milestone.id,
            month_year: milestone.month_year,
            description: milestone.description,
            image_caption: milestone.image_caption,
            banner_image: milestone.banner_image
          });
        });
      }

      allMilestone = allMilestone.sort(function (a, b) {
        return new Date(b.month_year) - new Date(a.month_year);
      });

      let partnerNewsData = allPartnerWithNews.map((data) => data.dataValues);
      partnerNewsData = partnerNewsData.sort(function (a, b) {
        return b.id - a.id;
      });

      return [partnerNewsData, allMilestone];
    } catch (err) {
      throw err;
    }
  }

  static async getCoverageList() {
    try {
      const allCoverage = await db.Coverage.findAll({
        order: [['id', 'DESC']],
        attributes: { exclude: ['category_id'] },
        include: [
          {
            model: db.Category
          }
        ]
      });

      let categoriesList = [
        ...new Set(
          allCoverage.map((el) => {
            if (el.Category.indicator === 'coverages') {
              return el.Category.display_name;
            }
          })
        )
      ].filter((item) => item);

      const coverageData = {};
      categoriesList.forEach((categoryName) => {
        const categoryData = [];
        allCoverage.forEach((el) => {
          if (el.Category.display_name === categoryName) {
            categoryData.push(el.dataValues);
          }
        });
        coverageData[categoryName] = categoryData;
      });

      return coverageData;
    } catch (err) {
      throw err;
    }
  }

  static async getImageGalleryList() {
    try {
      const allImageGallery = await db.ImageGallery.findAll({
        order: [['id', 'DESC']],
        attributes: { exclude: ['category_id'] },
        include: [
          {
            model: db.Category
          }
        ]
      });

      let categoriesList = [
        ...new Set(allImageGallery.map((el) => el.Category.display_name))
      ];

      const imageGalleryData = {};
      categoriesList.forEach((categoryName) => {
        const categoryData = [];
        allImageGallery.forEach((el) => {
          if (el.Category.display_name === categoryName) {
            categoryData.push(el.dataValues);
          }
        });
        imageGalleryData[categoryName] = categoryData;
      });
      return imageGalleryData;
    } catch (err) {
      throw err;
    }
  }

  static async getVideosList() {
    try {
      const allVideos = await db.Video.findAll({
        order: [['id', 'DESC']],
        attributes: { exclude: ['category_id'] },
        include: [
          {
            model: db.Category
          }
        ]
      });

      let categoriesList = [
        ...new Set(allVideos.map((el) => el.Category.display_name))
      ];

      const videosData = {};
      categoriesList.forEach((categoryName) => {
        const categoryData = [];
        allVideos.forEach((el) => {
          if (el.Category.display_name === categoryName) {
            categoryData.push(el.dataValues);
          }
        });
        videosData[categoryName] = categoryData;
      });

      return videosData;
    } catch (err) {
      throw err;
    }
  }

  static async getMediaKitList() {
    try {
      const allMediaKit = await db.MediaKit.findAll({
        order: [['id', 'DESC']],
        attributes: { exclude: ['category_id'] },
        include: [
          {
            model: db.Category
          }
        ]
      });

      let categoriesList = [
        ...new Set(allMediaKit.map((el) => el.Category.display_name))
      ];

      const mediaKitData = {};
      categoriesList.forEach((categoryName) => {
        const categoryData = [];
        allMediaKit.forEach((el) => {
          if (el.Category.display_name === categoryName) {
            categoryData.push(el.dataValues);
          }
        });
        mediaKitData[categoryName] = categoryData;
      });

      return mediaKitData;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = SunMobilityWebsiteRepo;
