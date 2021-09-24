'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Network extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Network.init(
    {
      title: { type: DataTypes.STRING, required: true }
    },
    {
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      },
      tableName: 'networks',
      underscored: true,
      indexes: [
        {
          fields: ['title']
        }
      ],
      sequelize,
      modelName: 'Network'
    }
  );
  return Network;
};
