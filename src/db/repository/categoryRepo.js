const db = require('..');

class CategoryRepo {
  static async createCategory(category) {
    try {
      return await db.Category.create({
        display_name: category.display_name,
        indicator: category.indicator
      });
    } catch (err) {
      throw err;
    }
  }

  static async getCategories() {
    try {
      const allCategories = await db.Category.findAndCountAll({
        order: [['id', 'DESC']]
      });

      return {
        data: allCategories.rows,
        totalRecords: allCategories.count
      };
    } catch (err) {
      throw err;
    }
  }

  static async getCategoryById(id) {
    try {
      return await db.Category.findOne({
        where: { id }
      });
    } catch (err) {
      throw err;
    }
  }

  static async getCategoryByIndicator(indicator) {
    try {
      return await db.Category.findAll({
        order: [['display_name', 'ASC']],
        where: { indicator }
      });
    } catch (err) {
      throw err;
    }
  }

  static async updateCategory(id, categoryDetails) {
    try {
      return await db.Category.update(
        { ...categoryDetails },
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

  static async deleteCategory(id) {
    try {
      return await db.Category.destroy({
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = CategoryRepo;
