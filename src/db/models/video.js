'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Video.belongsTo(models.Category, {
        foreignKey: 'category_id',
        onDelete: 'CASCADE'
      });
    }
  }
  Video.init(
    {
      banner: {
        required: true,
        type: DataTypes.STRING
      },
      link: {
        required: true,
        type: DataTypes.STRING
      },
      heading: {
        required: true,
        type: DataTypes.STRING
      },
      views: {
        required: true,
        type: DataTypes.STRING
      },
      author: {
        required: true,
        type: DataTypes.STRING
      },
      release_date: {
        required: true,
        type: DataTypes.DATE
      },
      category_id: {
        required: true,
        type: DataTypes.INTEGER
      }
    },
    {
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      },
      modelName: 'Video',
      sequelize,
      tableName: 'videos',
      underscored: true
    }
  );
  return Video;
};
