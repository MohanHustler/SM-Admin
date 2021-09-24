const db = require('..');
const utils = require('../utils');

class NetworkRepo {
  static async createNetwork(network) {
    try {
      return await db.Network.create({
        title: network.title
      });
    } catch (err) {
      throw err;
    }
  }

  static async getNetworks(pageNumber, pageSize) {
    const { limit, offset } = utils.getPagination(pageNumber, pageSize);

    try {
      const networks = await db.Network.findAndCountAll({
        order: [['id', 'DESC']],
        limit,
        offset
      });

      return {
        data: networks.rows,
        pageNumber: offset == 0 ? 1 : offset,
        pageSize: limit,
        totalRecords: networks.count
      };
    } catch (err) {
      throw err;
    }
  }

  static async getNetworkById(id) {
    return await db.Network.findOne({
      where: { id }
    });
  }

  static async updateNetwork(id, networkDetails) {
    try {
      return await db.Network.update(
        { ...networkDetails },
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

  static async deleteNetwork(id) {
    try {
      return await db.Network.destroy({
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = NetworkRepo;
