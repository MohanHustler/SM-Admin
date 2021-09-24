'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  News.init(
    {
      banner_image: {
        required: true,
        type: DataTypes.STRING
      },
      description: {
        required: true,
        type: DataTypes.TEXT
      },
      heading: {
        required: true,
        type: DataTypes.STRING
      },
      news_link: {
        required: true,
        type: DataTypes.STRING
      },
      partner_logo_image: {
        required: true,
        type: DataTypes.STRING
      }
    },
    {
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      },
      modelName: 'News',
      sequelize,
      tableName: 'news',
      underscored: true
    }
  );
  return News;
};
