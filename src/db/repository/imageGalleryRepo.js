const db = require('..');
const utils = require('../utils');

class ImageGalleryRepo {
  static async createImageGallery(imageGallery) {
    try {
      return await db.ImageGallery.create({
        image: imageGallery.image,
        launch_at_with_year: imageGallery.launch_at_with_year,
        category_id: imageGallery.category_id
      });
    } catch (err) {
      throw err;
    }
  }

  static async getImageGallery(pageNumber, pageSize) {
    const { limit, offset } = utils.getPagination(pageNumber, pageSize);

    const imageGalleries = await db.ImageGallery.findAndCountAll({
      order: [['id', 'DESC']],
      limit,
      offset
    });

    return {
      data: imageGalleries.rows,
      pageNumber: offset == 0 ? 1 : offset,
      pageSize: limit,
      totalRecords: imageGalleries.count
    };
  }

  static async getImageGalleryByCategoryId(categoryId, pageNumber, pageSize) {
    try {
      const { limit, offset } = utils.getPagination(pageNumber, pageSize);

      const imageGalleries = await db.ImageGallery.findAndCountAll({
        where: { category_id: categoryId },
        order: [['id', 'DESC']],
        limit,
        offset
      });

      return {
        data: imageGalleries.rows,
        pageNumber: offset == 0 ? 1 : offset,
        pageSize: limit,
        totalRecords: imageGalleries.count
      };
    } catch (err) {
      throw err;
    }
  }

  static async getImageGalleryById(id) {
    return await db.ImageGallery.findOne({
      where: { id }
    });
  }

  static async getLaunchesWithYear(categoryId) {
    try {
      const imageGalleries = await db.ImageGallery.findAll({
        where: { category_id: categoryId }
      });
      return {
        data: imageGalleries
      };
    } catch (err) {
      throw err;
    }
  }

  static async updateImageGallery(id, imageGalleryDetails) {
    try {
      return await db.ImageGallery.update(
        { ...imageGalleryDetails },
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

  static async deleteImageGallery(id) {
    try {
      return await db.ImageGallery.destroy({
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = ImageGalleryRepo;
