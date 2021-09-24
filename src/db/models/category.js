'use strict';
const { Model } = require('sequelize');

const { CATEGORY_INDICATORS } = require('../../utils/constants');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Coverage, {
        foreignKey: 'category_id'
      });

      Category.hasMany(models.ImageGallery, {
        foreignKey: 'category_id'
      });

      Category.hasMany(models.Video, {
        foreignKey: 'category_id'
      });

      Category.hasMany(models.MediaKit, {
        foreignKey: 'category_id'
      });
    }
  }
  Category.init(
    {
      display_name: {
        type: DataTypes.STRING,
        required: true,
        unique: true
      },
      indicator: {
        type: DataTypes.ENUM(...Object.values(CATEGORY_INDICATORS)),
        required: true,
        unique: true,
        validate: {
          isIn: {
            args: [Object.values(CATEGORY_INDICATORS)],
            msg: `Indicator should be one of 'coverages, image_galleries, videos, media_kits'`
          }
        }
      }
    },
    {
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      },
      tableName: 'categories',
      underscored: true,
      indexes: [
        {
          fields: ['display_name', 'indicator'],
          unique: true
        }
      ],
      sequelize,
      modelName: 'Category'
    }
  );
  return Category;
};
