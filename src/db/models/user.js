'use strict';
const bcrypt = require('bcrypt');

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    validPassword(password) {
      return bcrypt.compareSync(password, this.password);
    }
  }

  User.init(
    {
      first_name: {
        type: DataTypes.STRING,
        required: true
      },
      last_name: {
        type: DataTypes.STRING,
        required: true
      },
      email: {
        type: DataTypes.STRING,
        required: true,
        unique: true,
        validate: {
          isEmail: true,
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING,
        required: true
      }
    },
    {
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt', 'password'] }
      },
      hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
        },
        beforeSave: (user) => {
          if (user.changed(user.password)) {
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password, salt);
          }
        },
        beforeBulkUpdate: (user) => {
          if (user.attributes.password) {
            const salt = bcrypt.genSaltSync();
            user.attributes.password = bcrypt.hashSync(
              user.attributes.password,
              salt
            );
          }
        }
      },
      tableName: 'users',
      underscored: true,
      indexes: [
        {
          fields: ['email']
        }
      ],
      sequelize,
      modelName: 'User'
    }
  );

  return User;
};
