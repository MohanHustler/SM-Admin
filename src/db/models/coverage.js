'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coverage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Coverage.belongsTo(models.Category, {
        foreignKey: 'category_id',
        onDelete: 'CASCADE'
      });
    }
  }
  Coverage.init(
    {
      logo: {
        required: true,
        type: DataTypes.STRING
      },
      banner_image: {
        required: true,
        type: DataTypes.STRING
      },
      heading: {
        required: true,
        type: DataTypes.STRING
      },
      coverage_link: {
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
      modelName: 'Coverage',
      sequelize,
      tableName: 'coverages',
      underscored: true
    }
  );
  return Coverage;
};
