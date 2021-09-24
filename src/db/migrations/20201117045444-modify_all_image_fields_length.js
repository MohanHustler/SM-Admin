'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('news', 'banner_image', {
        type: Sequelize.STRING(1234)
      }),
      queryInterface.changeColumn('news', 'partner_logo_image', {
        type: Sequelize.STRING(1234)
      }),
      queryInterface.changeColumn('milestones', 'banner_image', {
        type: Sequelize.STRING(1234)
      }),
      queryInterface.changeColumn('partners', 'partner_logo', {
        type: Sequelize.STRING(1234)
      }),
      queryInterface.changeColumn('partner_news', 'banner_image', {
        type: Sequelize.STRING(1234)
      }),
      queryInterface.changeColumn('coverages', 'banner_image', {
        type: Sequelize.STRING(1234)
      }),
      queryInterface.changeColumn('coverages', 'logo', {
        type: Sequelize.STRING(1234)
      }),
      queryInterface.changeColumn('image_galleries', 'image', {
        type: Sequelize.STRING(1234)
      }),
      queryInterface.changeColumn('videos', 'banner', {
        type: Sequelize.STRING(1234)
      }),
      queryInterface.changeColumn('media_kits', 'banner_image', {
        type: Sequelize.STRING(1234)
      }),
      queryInterface.changeColumn('media_kits', 'downloadable_file', {
        type: Sequelize.STRING(1234)
      })
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('news', 'banner_image', {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn('news', 'partner_logo_image', {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn('milestones', 'banner_image', {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn('partners', 'partner_logo', {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn('partner_news', 'banner_image', {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn('coverages', 'banner_image', {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn('coverages', 'logo', {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn('image_galleries', 'image', {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn('videos', 'banner', {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn('media_kits', 'banner_image', {
        type: Sequelize.STRING
      }),
      queryInterface.changeColumn('media_kits', 'downloadable_file', {
        type: Sequelize.STRING
      })
    ]);
  }
};
