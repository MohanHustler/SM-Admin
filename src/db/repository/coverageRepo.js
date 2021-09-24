const db = require('..');
const utils = require('../utils');

class CoverageRepo {
  static async createCoverage(coverage) {
    try {
      return await db.Coverage.create({
        logo: coverage.logo,
        banner_image: coverage.banner_image,
        coverage_link: coverage.coverage_link,
        category_id: coverage.category_id,
        heading: coverage.heading
      });
    } catch (err) {
      throw err;
    }
  }

  static async getCoverages(pageNumber, pageSize) {
    const { limit, offset } = utils.getPagination(pageNumber, pageSize);

    try {
      let allCoverages = await db.Coverage.findAndCountAll({
        order: [['id', 'DESC']],
        limit,
        offset
      });

      return {
        data: allCoverages.rows,
        pageNumber: offset == 0 ? 1 : offset,
        pageSize: limit,
        totalRecords: allCoverages.count
      };
    } catch (err) {
      throw err;
    }
  }

  static async getCoverageByCategoryId(categoryId, pageNumber, pageSize) {
    try {
      const { limit, offset } = utils.getPagination(pageNumber, pageSize);

      let allCoverages = await db.Coverage.findAndCountAll({
        where: { category_id: categoryId },
        order: [['id', 'DESC']],
        limit,
        offset
      });

      return {
        data: allCoverages.rows,
        pageNumber: offset == 0 ? 1 : offset,
        pageSize: limit,
        totalRecords: allCoverages.count
      };
    } catch (err) {
      throw err;
    }
  }

  static async getCoverageById(id) {
    try {
      return await db.Coverage.findOne({
        where: { id }
      });
    } catch (err) {
      throw err;
    }
  }

  static async updateCoverage(id, coverageDetails) {
    try {
      return await db.Coverage.update(
        { ...coverageDetails },
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

  static async deleteCoverage(id) {
    try {
      return await db.Coverage.destroy({
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = CoverageRepo;
