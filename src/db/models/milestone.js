'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Milestone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Milestone.init(
    {
      month_year: {
        type: DataTypes.STRING,
        required: true
      },
      description: {
        type: DataTypes.STRING,
        required: true
      },
      image_caption: {
        type: DataTypes.STRING
      },
      banner_image: {
        type: DataTypes.STRING,
        required: true
      }
    },
    {
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      },
      modelName: 'Milestone',
      sequelize,
      tableName: 'milestones',
      underscored: true
    }
  );
  return Milestone;
};
