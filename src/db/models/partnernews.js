'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PartnerNews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PartnerNews.belongsTo(models.Partner, {
        foreignKey: 'partner_id',
        onDelete: 'CASCADE'
      });
    }
  }
  PartnerNews.init(
    {
      banner_image: {
        required: true,
        type: DataTypes.STRING
      },
      heading: {
        required: true,
        type: DataTypes.STRING
      },
      news_link: {
        required: true,
        type: DataTypes.STRING
      },
      news_brand_link: {
        required: true,
        type: DataTypes.STRING
      },
      partner_id: {
        required: true,
        type: DataTypes.INTEGER
      }
    },
    {
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      },
      modelName: 'PartnerNews',
      sequelize,
      tableName: 'partner_news',
      underscored: true
    }
  );
  return PartnerNews;
};
