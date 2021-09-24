const db = require('..');
const utils = require('../utils');

class NewsRepo {
  static async createNews(news) {
    try {
      return await db.News.create({
        banner_image: news.banner_image,
        description: news.description,
        heading: news.heading,
        news_link: news.news_link,
        partner_logo_image: news.partner_logo_image
      });
    } catch (err) {
      throw err;
    }
  }

  static async getNews(pageNumber, pageSize) {
    const { limit, offset } = utils.getPagination(pageNumber, pageSize);

    try {
      const newsRecords = await db.News.findAndCountAll({
        order: [['id', 'DESC']],
        limit,
        offset
      });

      return {
        data: newsRecords.rows,
        pageNumber: offset == 0 ? 1 : offset,
        pageSize: limit,
        totalRecords: newsRecords.count
      };
    } catch (err) {
      throw err;
    }
  }

  static async getNewsById(id) {
    return await db.News.findOne({
      where: { id }
    });
  }

  static async updateNews(id, newsDetails) {
    try {
      return await db.News.update(
        { ...newsDetails },
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

  static async deleteNews(id) {
    try {
      return await db.News.destroy({
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = NewsRepo;
