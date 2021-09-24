'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'partner_news',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        banner_image: {
          allowNull: false,
          type: Sequelize.STRING
        },
        heading: {
          allowNull: false,
          type: Sequelize.STRING
        },
        news_link: {
          allowNull: false,
          type: Sequelize.STRING
        },
        news_brand_link: {
          allowNull: false,
          type: Sequelize.STRING
        },
        partner_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            as: 'partner_id',
            key: 'id',
            model: 'partners'
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
    await queryInterface.dropTable('partner_news');
  }
};
