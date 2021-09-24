'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
      .createTable(
        'categories',
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          display_name: {
            allowNull: false,
            type: Sequelize.STRING
          },
          indicator: {
            allowNull: false,
            type: Sequelize.STRING
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
        queryInterface.addConstraint('categories', {
          fields: ['display_name', 'indicator'],
          name: 'unique_category_indicator',
          type: 'unique'
        });
      });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');
  }
};
