'use strict';

// Indicator Enum's: 'coverages', 'image_galleries', 'videos', 'media_kits'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          display_name: 'Featured',
          indicator: 'coverages',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: '2020',
          indicator: 'coverages',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: '2019',
          indicator: 'coverages',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: '2018',
          indicator: 'coverages',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: '2017',
          indicator: 'coverages',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: '2 & 3 Wheeler Solution',
          indicator: 'image_galleries',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: 'Bus Solution',
          indicator: 'image_galleries',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: 'Launches',
          indicator: 'image_galleries',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: 'Events',
          indicator: 'image_galleries',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: '2 & 3 Wheeler Solution',
          indicator: 'videos',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: 'Bus Solution',
          indicator: 'videos',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: 'Testimonials',
          indicator: 'videos',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: 'Interviews',
          indicator: 'videos',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: 'Events',
          indicator: 'videos',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: 'Logo',
          indicator: 'media_kits',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: 'Company',
          indicator: 'media_kits',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: 'Profiles of Leadership',
          indicator: 'media_kits',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: 'Product images',
          indicator: 'media_kits',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: 'Fact Sheet',
          indicator: 'media_kits',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          display_name: 'Awards and Accolades',
          indicator: 'media_kits',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
