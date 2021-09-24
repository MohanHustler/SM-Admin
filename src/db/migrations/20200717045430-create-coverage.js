'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'coverages',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        logo: {
          allowNull: false,
          type: Sequelize.STRING
        },
        banner_image: {
          allowNull: false,
          type: Sequelize.STRING
        },
        heading: {
          allowNull: false,
          type: Sequelize.STRING
        },
        coverage_link: {
          allowNull: false,
          type: Sequelize.STRING
        },
        category_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            as: 'category_id',
            key: 'id',
            model: 'categories'
          }
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
        timestamp: true
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('coverages');
  }
};
