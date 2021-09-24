'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'media_kits',
      [
        {
          heading: 'SUN Mobility Logo Horizontal',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/media_kit/sun-mobility-horizontal-logo.png',
          downloadable_type: 'PNG',
          category_id: 15,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          heading: 'SUN Mobility Logo Vertical',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/media_kit/sun-mobility-horizontal-logo-vertical.png',
          downloadable_type: 'PNG',
          category_id: 15,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          heading: 'Quick Interchange Station',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/media_kit/quick-interchange-station-logo.png',
          downloadable_type: 'PNG',
          category_id: 15,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          heading: 'Smart Battery Logo',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/media_kit/smart-battery-logo.png',
          downloadable_type: 'PNG',
          category_id: 15,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          heading: 'Smart Network',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/media_kit/smart-network.png',
          downloadable_type: 'PNG',
          category_id: 15,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          heading: 'SUN Mobility Profile',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/media_kit/company.png',
          downloadable_type: 'PDF',
          downloadable_file:
            'http://www.sunmobility.co.in/assets/images/media_kit/profile/sunmobility_profile.pdf',
          category_id: 16,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          heading: 'Chetan Maini',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/media_kit/chetan-maini.png',
          downloadable_type: 'PDF',
          downloadable_file:
            'http://www.sunmobility.co.in/assets/images/media_kit/profile/chetan_maini_profile.pdf',
          category_id: 17,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          heading: 'Uday Khemka',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/media_kit/uday-khemka.png',
          downloadable_type: 'PDF',
          downloadable_file:
            'http://www.sunmobility.co.in/assets/images/media_kit/profile/uday_khemka_profile.pdf',
          category_id: 17,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          heading: 'Quick Interchange Station',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/media_kit/quick-interchange-station.png',
          downloadable_type: 'PNG',
          category_id: 18,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          heading: 'Smart Battery',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/media_kit/smart-battery.png',
          downloadable_type: 'PNG',
          category_id: 18,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          heading: 'SUN Mobility Fact Sheet',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/media_kit/fact.png',
          downloadable_type: 'PNG',
          category_id: 19,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          heading: 'Microsoft’s CEO Tech Summit',
          description:
            'One of the 5 startups & the only Mobility startup to be showcased at Future Decoded, Bengaluru',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/media_kit/awards/1.jpg',
          downloadable_type: 'PNG',
          category_id: 19,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          heading: 'Entrepreneurship World Cup Winner',
          description:
            'One of the Top 5 startups globally & the only Mobility startup in Top 5 at Entrepreneurship World Cup 2019, Riyadh',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/media_kit/awards/2.jpg',
          downloadable_type: 'PNG',
          category_id: 20,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('media_kits', null, {});
  }
};
