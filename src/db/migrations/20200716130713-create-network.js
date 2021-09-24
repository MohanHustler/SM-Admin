'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
      .createTable(
        'networks',
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          title: {
            allowNull: false,
            type: Sequelize.STRING,
            unique: true
          },
          created_at: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE
          }
        },
        {
          timestamps: true
        }
      )
      .then(() => {
        queryInterface.addIndex('networks', ['title']);
      });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('networks');
  }
};
