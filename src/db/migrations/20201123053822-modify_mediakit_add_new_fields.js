'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('media_kits', 'under_section_by', {
        type: Sequelize.STRING,
        defaultValue: ''
      }),
      queryInterface.addColumn('media_kits', 'media_link', {
        type: Sequelize.STRING,
        defaultValue: ''
      })
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('media_kits', 'under_section_by'),
      queryInterface.removeColumn('media_kits', 'media_link')
    ]);
  }
};
