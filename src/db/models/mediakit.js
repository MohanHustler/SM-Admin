'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MediaKit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MediaKit.belongsTo(models.Category, {
        foreignKey: 'category_id',
        onDelete: 'CASCADE'
      });
    }
  }
  MediaKit.init(
    {
      heading: {
        required: true,
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      banner_image: {
        required: true,
        type: DataTypes.STRING
      },
      downloadable_file: {
        type: DataTypes.STRING,
        validate: {
          isPresent: function (value) {
            if (this.downloadable_type === 'PDF' && !value) {
              throw new Error('Separate file should be uploaded for PDF type.');
            }
          }
        }
      },
      downloadable_type: {
        type: DataTypes.STRING
      },
      under_section_by: {
        type: DataTypes.STRING
      },
      media_link: {
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
      modelName: 'MediaKit',
      sequelize,
      tableName: 'media_kits',
      underscored: true
    }
  );
  return MediaKit;
};
