const db = require('..');
const utils = require('../utils');

class PartnerNewsRepo {
  static async createPartnerWithBulkNews(partnerWithNews, partnerNews) {
    try {
      const newPartner = await db.Partner.create({
        partner_logo: partnerWithNews.partner_logo,
        description: partnerWithNews.description
      });
      const allPartnerNews = [];

      if (partnerNews.length > 0) {
        partnerNews.map((news) => {
          allPartnerNews.push({
            banner_image: news.banner_image,
            heading: news.heading,
            news_brand_link: news.news_brand_link,
            news_link: news.news_link,
            partner_id: newPartner.id
          });
        });
      }
      const newPartnerNews = await db.PartnerNews.bulkCreate(allPartnerNews);
      return [newPartner, newPartnerNews];
    } catch (err) {
      throw err;
    }
  }

  static async createPartnerNews(partnerNews) {
    try {
      return await db.PartnerNews.create({
        banner_image: partnerNews.banner_image,
        heading: partnerNews.heading,
        news_brand_link: partnerNews.news_brand_link,
        news_link: partnerNews.news_link,
        partner_id: partnerNews.partner_id
      });
    } catch (err) {
      throw err;
    }
  }

  static async getPartnerNews(pageNumber, pageSize) {
    const { limit, offset } = utils.getPagination(pageNumber, pageSize);

    try {
      const partnerNews = await db.PartnerNews.findAndCountAll({
        order: [['id', 'DESC']],
        limit,
        offset
      });

      return {
        data: partnerNews.rows,
        pageNumber: offset == 0 ? 1 : offset,
        pageSize: limit,
        totalRecords: partnerNews.count
      };
    } catch (err) {
      throw err;
    }
  }

  static async getPartnerNewsByPartnerId(partnerId) {
    try {
      return await db.PartnerNews.findAll({
        order: [['id', 'DESC']],
        where: { partner_id: partnerId }
      });
    } catch (err) {
      throw err;
    }
  }

  static async getPartnerNewsById(id) {
    return await db.PartnerNews.findOne({
      where: { id }
    });
  }

  static async updatePartnerNews(id, partnerNews) {
    try {
      return await db.PartnerNews.update(
        { ...partnerNews },
        {
          where: {
            id
          }
        }
      );
    } catch (err) {
      throw err;
    }
  }

  static async deletePartnerNews(id) {
    try {
      return await db.PartnerNews.destroy({
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = PartnerNewsRepo;
