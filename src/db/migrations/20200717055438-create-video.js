'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'videos',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        banner: {
          allowNull: false,
          type: Sequelize.STRING
        },
        link: {
          allowNull: false,
          type: Sequelize.STRING
        },
        heading: {
          allowNull: false,
          type: Sequelize.STRING
        },
        views: {
          allowNull: false,
          type: Sequelize.STRING
        },
        author: {
          allowNull: false,
          type: Sequelize.STRING
        },
        release_date: {
          allowNull: false,
          type: Sequelize.DATE
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
    await queryInterface.dropTable('videos');
  }
};
