const db = require('..');
const utils = require('../utils');

class UserRepo {
  static async getAllUsers(pageNumber, pageSize) {
    const { limit, offset } = utils.getPagination(pageNumber, pageSize);

    try {
      const users = await db.User.findAndCountAll({
        order: [['id', 'DESC']],
        limit,
        offset
      });

      return {
        data: users.rows,
        pageNumber: offset == 0 ? 1 : offset,
        pageSize: limit,
        totalRecords: users.count
      };
    } catch (err) {
      throw err;
    }
  }

  static async createNewUser(user) {
    try {
      return await db.User.create({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        created_at: new Date(),
        updated_at: new Date()
      });
    } catch (err) {
      throw err;
    }
  }

  static async updateUser(id, userDetails) {
    try {
      return await db.User.update(
        { ...userDetails },
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

  static async deleteUser(id) {
    try {
      return await db.User.destroy({
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  }

  static async getUserByEmailWithPassword(email) {
    try {
      return await db.User.findOne({
        where: {
          email
        },
        attributes: { include: ['password'] }
      });
    } catch (err) {
      throw err;
    }
  }

  static async getUserByEmail(email) {
    try {
      return await db.User.findOne({
        where: {
          email
        }
      });
    } catch (err) {
      throw err;
    }
  }

  static async getUserById(id) {
    try {
      return await db.User.findOne({
        where: {
          id
        }
      });
    } catch (err) {
      throw err;
    }
  }

  static async getUsersCount() {
    try {
      return await db.User.count();
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserRepo;
