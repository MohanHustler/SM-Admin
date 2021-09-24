'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImageGallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ImageGallery.belongsTo(models.Category, {
        foreignKey: 'category_id',
        onDelete: 'CASCADE'
      });
    }
  }
  ImageGallery.init(
    {
      launch_at_with_year: {
        type: DataTypes.STRING
      },
      image: {
        required: true,
        type: DataTypes.STRING
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
      modelName: 'ImageGallery',
      sequelize,
      tableName: 'image_galleries',
      underscored: true
    }
  );
  return ImageGallery;
};
