const db = require('..');
const utils = require('../utils');

class VideoRepo {
  static async createVideo(video) {
    try {
      return await db.Video.create({
        banner: video.banner,
        link: video.link,
        heading: video.heading,
        views: video.views,
        author: video.author,
        category_id: video.category_id,
        release_date: video.release_date
      });
    } catch (err) {
      throw err;
    }
  }

  static async getVideos(pageNumber, pageSize) {
    const { limit, offset } = utils.getPagination(pageNumber, pageSize);

    try {
      const videos = await db.Video.findAndCountAll({
        order: [['id', 'DESC']],
        limit,
        offset
      });

      return {
        data: videos.rows,
        pageNumber: offset == 0 ? 1 : offset,
        pageSize: limit,
        totalRecords: videos.count
      };
    } catch (err) {
      throw err;
    }
  }

  static async getVideoByCategoryId(categoryId, pageNumber, pageSize) {
    try {
      const { limit, offset } = utils.getPagination(pageNumber, pageSize);

      const videos = await db.Video.findAndCountAll({
        where: { category_id: categoryId },
        order: [['id', 'DESC']],
        limit,
        offset
      });

      return {
        data: videos.rows,
        pageNumber: offset == 0 ? 1 : offset,
        pageSize: limit,
        totalRecords: videos.count
      };
    } catch (err) {
      throw err;
    }
  }

  static async getVideoById(id) {
    try {
      return await db.Video.findOne({
        where: { id }
      });
    } catch (err) {
      throw err;
    }
  }

  static async updateVideo(id, videoDetails) {
    try {
      return await db.Video.update(
        { ...videoDetails },
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

  static async deleteVideo(id) {
    try {
      return await db.Video.destroy({
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = VideoRepo;
