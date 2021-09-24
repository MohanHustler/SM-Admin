'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'image_galleries',
      [
        {
          image:
            'http://www.sunmobility.co.in/assets/images/image-gallery/2_and_3_wheeler/1.png',
          category_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          image:
            'http://www.sunmobility.co.in/assets/images/image-gallery/2_and_3_wheeler/2.png',
          category_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          image:
            'http://www.sunmobility.co.in/assets/images/image-gallery/2_and_3_wheeler/3.png',
          category_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          image:
            'http://www.sunmobility.co.in/assets/images/image-gallery/2_and_3_wheeler/4.png',
          category_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          image:
            'http://www.sunmobility.co.in/assets/images/image-gallery/bus_solution/bus_swap.png',
          category_id: 7,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          launch_at_with_year: 'Piaggio Launch, 2019',
          image:
            'http://www.sunmobility.co.in/assets/images/image-gallery/launches/piaggio.jpg',
          category_id: 8,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          launch_at_with_year: 'Piaggio Launch, 2019',
          image:
            'http://www.sunmobility.co.in/assets/images/image-gallery/launches/piaggio_1.jpg',
          category_id: 8,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          launch_at_with_year: 'Uber Partnership, 2019',
          image:
            'http://www.sunmobility.co.in/assets/images/image-gallery/launches/uber.png',
          category_id: 8,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          launch_at_with_year: 'Uber Partnership, 2019',
          image:
            'http://www.sunmobility.co.in/assets/images/image-gallery/launches/uber_1.jpg',
          category_id: 8,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          launch_at_with_year: 'SmartE Launch, 2019',
          image:
            'http://www.sunmobility.co.in/assets/images/image-gallery/launches/1.png',
          category_id: 8,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          launch_at_with_year: 'SmartE Launch, 2019',
          image:
            'http://www.sunmobility.co.in/assets/images/image-gallery/launches/2.png',
          category_id: 8,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          launch_at_with_year: 'Microsoft Partnership, 2018',
          image:
            'http://www.sunmobility.co.in/assets/images/image-gallery/launches/microsoft.png',
          category_id: 8,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          launch_at_with_year: 'Ashok Leyland Launch, 2017',
          image:
            'http://www.sunmobility.co.in/assets/images/image-gallery/launches/ashok_leyland.png',
          category_id: 8,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          launch_at_with_year: `HRH Prince Charles' visit to India, 2019`,
          image:
            'http://www.sunmobility.co.in/assets/images/events/prince_charles_2019/1.jpg',
          category_id: 9,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          launch_at_with_year: `HRH Prince Charles' visit to India, 2019`,
          image:
            'http://www.sunmobility.co.in/assets/images/events/prince_charles_2019/2.jpg',
          category_id: 9,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          launch_at_with_year: `Uber Mobility Showcase, 2019`,
          image:
            'http://www.sunmobility.co.in/assets/images/events/uber_mobility_showcase_2019/1.jpg',
          category_id: 9,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          launch_at_with_year: `Uber Mobility Showcase, 2019`,
          image:
            'http://www.sunmobility.co.in/assets/images/events/uber_mobility_showcase_2019/4.jpg',
          category_id: 9,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          launch_at_with_year: `Entrepreneurship World Cup, 2019`,
          image:
            'http://www.sunmobility.co.in/assets/images/events/entrepreneurship_world_cup_2019/1.jpeg',
          category_id: 9,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          launch_at_with_year: `Entrepreneurship World Cup, 2019`,
          image:
            'http://www.sunmobility.co.in/assets/images/events/entrepreneurship_world_cup_2019/2.jpeg',
          category_id: 9,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          launch_at_with_year: `Cleantech APAC 25`,
          image: 'http://www.sunmobility.co.in/assets/images/events/apac.jpg',
          category_id: 9,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          launch_at_with_year: `Environmental Technology Commercialization Award, 2019`,
          image:
            'http://www.sunmobility.co.in/assets/images/events/clean_equity_monaco_2019/1.jpg',
          category_id: 9,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          launch_at_with_year: `ET Auto E-Mobility Convention, 2019`,
          image:
            'http://www.sunmobility.co.in/assets/images/events/et_auto_2019/1.jpg',
          category_id: 9,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('image_galleries', null, {});
  }
};
