const db = require('..');
const utils = require('../utils');

class MilestoneRepo {
  static async createMilestone(milestone) {
    try {
      return await db.Milestone.create({
        month_year: milestone.month_year,
        description: milestone.description,
        image_caption: milestone.image_caption,
        banner_image: milestone.banner_image
      });
    } catch (err) {
      throw err;
    }
  }

  static async getMilestones(pageNumber, pageSize) {
    const { limit, offset } = utils.getPagination(pageNumber, pageSize);

    try {
      const milestones = await db.Milestone.findAndCountAll({
        order: [['id', 'DESC']],
        limit,
        offset
      });

      let data = milestones.rows.sort(function (a, b) {
        return new Date(b.month_year) - new Date(a.month_year);
      });

      return {
        data,
        pageNumber: offset == 0 ? 1 : offset,
        pageSize: limit,
        totalRecords: milestones.count
      };
    } catch (err) {
      throw err;
    }
  }

  static async getMilestoneById(id) {
    return await db.Milestone.findOne({
      where: { id }
    });
  }

  static async updateMilestone(id, milestoneDetails) {
    try {
      return await db.Milestone.update(
        { ...milestoneDetails },
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

  static async deleteMilestone(id) {
    try {
      return await db.Milestone.destroy({
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = MilestoneRepo;
