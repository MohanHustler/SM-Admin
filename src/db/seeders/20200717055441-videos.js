'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'videos',
      [
        {
          banner:
            'http://www.sunmobility.co.in/assets/images/videos/wheeler.png',
          link: 'https://www.youtube.com/watch?v=9AcqlDAHopU',
          heading: 'SUN Mobility Interoperable Solution',
          views: '15851',
          author: 'SUN Mobility',
          category_id: 10,
          release_date: new Date('2018', '05', '15'),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner:
            'http://www.sunmobility.co.in/assets/images/videos/bus-solutions.png',
          link: 'https://www.youtube.com/watch?v=hWlAf6P61LE',
          heading: 'SUN Mobility Bus QIS battery swap',
          views: '11165',
          author: 'SUN Mobility',
          category_id: 11,
          release_date: new Date('2018', '04', '25'),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner:
            'http://www.sunmobility.co.in/assets/images/videos/testimonial-1.png',
          link: 'https://www.youtube.com/watch?v=T9xkEfLDPuU',
          heading:
            'The Driver Experience: Battery swapping solution for E-Autos',
          views: '568',
          author: 'SUN Mobility',
          category_id: 12,
          release_date: new Date('2020', '02', '26'),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner:
            'http://www.sunmobility.co.in/assets/images/videos/testimonial-2.png',
          link: 'https://www.youtube.com/watch?v=68jU2auqeoo',
          heading:
            'The Driver Experience: Battery swapping solution for E-rickshaws',
          views: '2078',
          author: 'SUN Mobility',
          category_id: 12,
          release_date: new Date('2018', '11', '27'),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner:
            'http://www.sunmobility.co.in/assets/images/videos/interview-1.png',
          link: 'https://www.youtube.com/watch?v=_RR226Qekj8',
          heading:
            'ET NOW Leaders of tomorrow with Chetan Maini , SUN Mobility',
          views: '2027',
          author: 'SUN Mobility',
          category_id: 13,
          release_date: new Date('2018', '02', '19'),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner:
            'http://www.sunmobility.co.in/assets/images/videos/interview-2.png',
          link: 'https://www.youtube.com/watch?v=GvlqfJG7b2w',
          heading: 'ET Auto: Chetan Maini, on Swappable Solutions',
          views: '2027',
          author: 'SUN Mobility',
          category_id: 13,
          release_date: new Date('2018', '02', '19'),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner:
            'http://www.sunmobility.co.in/assets/images/videos/event-1.png',
          link: 'https://www.youtube.com/watch?v=_RR226Qekj8',
          heading: 'SUN Mobility at Microsft Future Decoded, Bengaluru',
          views: '564',
          author: 'SUN Mobility',
          category_id: 14,
          release_date: new Date('2020', '02', '26'),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner:
            'http://www.sunmobility.co.in/assets/images/videos/event-2.png',
          link: 'https://www.youtube.com/watch?v=9yp8zzk1BaY',
          heading: 'ET Auto: Chetan Maini, on Swappable Solutions',
          views: '3730',
          author: 'SUN Mobility',
          category_id: 14,
          release_date: new Date('2018', '04', '26'),
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('videos', null, {});
  }
};
