const db = require('..');
const utils = require('../utils');

const PartnerNewsRepo = require('../../db/repository/partnerNewsRepo');

class PartnerRepo {
  static async createPartner(partner) {
    try {
      return await db.Partner.create({
        partner_logo: partner.partner_logo,
        description: partner.description
      });
    } catch (err) {
      throw err;
    }
  }

  static async getPartners(pageNumber, pageSize) {
    const { limit, offset } = utils.getPagination(pageNumber, pageSize);

    try {
      const partners = await db.Partner.findAndCountAll({
        order: [['id', 'DESC']],
        limit,
        offset,
        include: [
          {
            model: db.PartnerNews
          }
        ]
      });

      const partersCount = await db.Partner.count();

      return {
        data: partners.rows,
        pageNumber: offset == 0 ? 1 : offset,
        pageSize: limit,
        totalRecords: partersCount
      };
    } catch (err) {
      throw err;
    }
  }

  static async getPartnerById(id) {
    const partner = await db.Partner.findOne({
      where: { id }
    });
    const partnerNews = await PartnerNewsRepo.getPartnerNewsByPartnerId(id);
    return {
      ...partner.dataValues,
      partner_news: partnerNews
    };
  }

  static async updatePartner(id, partnerDetails) {
    try {
      return await db.Partner.update(
        { ...partnerDetails },
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

  static async deletePartner(id) {
    try {
      return await db.Partner.destroy({
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = PartnerRepo;
