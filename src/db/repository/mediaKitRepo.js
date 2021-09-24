const db = require('..');
const utils = require('../utils');

class MediaKitRepo {
  static async createMediaKit(mediaKit) {
    try {
      return await db.MediaKit.create({
        heading: mediaKit.heading,
        description: mediaKit.description,
        banner_image: mediaKit.banner_image,
        downloadable_file: mediaKit.downloadable_file,
        downloadable_type: mediaKit.downloadable_type,
        under_section_by: mediaKit.under_section_by,
        media_link: mediaKit.media_link,
        category_id: mediaKit.category_id
      });
    } catch (err) {
      throw err;
    }
  }

  static async getMediaKits(pageNumber, pageSize) {
    const { limit, offset } = utils.getPagination(pageNumber, pageSize);

    try {
      const allMediaKits = await db.MediaKit.findAndCountAll({
        order: [['id', 'DESC']],
        limit,
        offset
      });

      return {
        data: allMediaKits.rows,
        pageNumber: offset == 0 ? 1 : offset,
        pageSize: limit,
        totalRecords: allMediaKits.count
      };
    } catch (err) {
      throw err;
    }
  }

  static async getUnderSectionBy() {
    try {
      const sectionBy = await db.MediaKit.findAll({
        attributes: ['under_section_by']
      });

      let headings = [];
      sectionBy.forEach((heading) => {
        if (heading.under_section_by) {
          headings.push(heading.under_section_by);
        }
      });
      headings = [...new Set(headings)];

      return {
        data: headings
      };
    } catch (err) {
      throw err;
    }
  }

  static async getMediaKitByCategoryId(categoryId, pageNumber, pageSize) {
    try {
      const { limit, offset } = utils.getPagination(pageNumber, pageSize);

      const allMediaKits = await db.MediaKit.findAndCountAll({
        where: { category_id: categoryId },
        order: [['id', 'DESC']],
        limit,
        offset
      });

      return {
        data: allMediaKits.rows,
        pageNumber: offset == 0 ? 1 : offset,
        pageSize: limit,
        totalRecords: allMediaKits.count
      };
    } catch (err) {
      throw err;
    }
  }

  static async getMediaKitById(id) {
    try {
      return await db.MediaKit.findOne({
        where: { id }
      });
    } catch (err) {
      throw err;
    }
  }

  static async updateMediaKit(id, mediaKitDetails) {
    try {
      return await db.MediaKit.update(
        { ...mediaKitDetails },
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

  static async deleteMediaKit(id) {
    try {
      return await db.MediaKit.destroy({
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = MediaKitRepo;
