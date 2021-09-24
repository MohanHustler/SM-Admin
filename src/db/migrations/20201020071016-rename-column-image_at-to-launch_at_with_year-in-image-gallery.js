'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn(
      'image_galleries',
      'image_at',
      'launch_at_with_year'
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn(
      'image_galleries',
      'launch_at_with_year',
      'image_at'
    );
  }
};
