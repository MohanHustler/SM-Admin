'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Partner.hasMany(models.PartnerNews, {
        foreignKey: 'partner_id'
      });
    }
  }
  Partner.init(
    {
      partner_logo: {
        type: DataTypes.STRING,
        required: true
      },
      description: {
        type: DataTypes.TEXT,
        required: true
      }
    },
    {
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      },
      modelName: 'Partner',
      sequelize,
      tableName: 'partners',
      underscored: true
    }
  );
  return Partner;
};
