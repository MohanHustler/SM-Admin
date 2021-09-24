'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'milestones',
      [
        {
          month_year: 'Apr 2017',
          description: `The idea for 'SUN Mobility' was born`,
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/histroy/8.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          month_year: 'Sep 2017',
          description: `The first prototype of the Smart Battery was launched`,
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/histroy/13.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          month_year: 'Feb 2018',
          description: `Automated battery swapping solution, for buses showcased at Auto Expo, in partnership with Ashok Leyland`,
          image_caption:
            'Vinod Dasari, CEO & MD of Ashok Leyland with Chetan Maini & Uday Khemka, the Founders of SUN Mobility at Auto Expo 2018',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/histroy/7.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          month_year: 'Mar 2018',
          description: `The first prototype of the Quick Interchange Station was launched`,
          image_caption:
            'Founders, Chetan Maini & Uday Khemka at the launch of the 2 & 3 wheeler Quick Interchange Station prototype',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/histroy/10.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          month_year: 'April 2018',
          description: `Launch of 'Interoperable Battery Swapping Solution for Electric 2 and 3-Wheelers' at the new state-of-the-art manufacturing facility`,
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/histroy/9.jpg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          month_year: 'July 2018',
          description: `Partnered with Microsoft, to use their Azure based solutions to deploy our universal energy infrastructure effectively`,
          image_caption:
            'Chetan Maini & Chad Fowler, GM and CTO, Startup and Developer Advocacy, Microsoft with his team at the SUN Mobility Bangalore facility',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/histroy/6.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          month_year: 'Nov 2018',
          description: `Partnered with Smart E, India’s largest electric vehicle fleet operator`,
          image_caption:
            'Chetan Maini and Goldie Srivastava, Co-founder & CEO of SmartE at the SUN Mobility-SmartE Launch',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/histroy/5.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          month_year: 'Apr 2019',
          description: `Generation 3 QIS launched`,
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/histroy/4.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          month_year: 'July 2019',
          description: `Partnered with Uber, one of the world’s largest mobility platforms`,
          image_caption:
            'Chetan Maini & Pradeep Parmeswaran, President India & South Asia, Uber at SUN Mobility’s Bangalore Facility',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/histroy/3.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          month_year: 'Nov 2019',
          description: `One of the top 5 startups globally, and the only mobility startup in the Top 5 at Entrepreneurship World Cup Riyadh 2019`,
          image_caption: 'Entrepreneurship World Cup Winner',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/histroy/12.jpeg',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          month_year: 'Dec 2019',
          description: `Partnered with Piaggio, one of the largest commercial vehicle manufacturers, & launched the Ape E-city electric auto powered by our revolutionary battery swapping solution`,
          image_caption:
            'Chetan Maini with Diego Graffi, CEO & MD, PVPL, Nitin Gadkari, Minister of Road Transport and Highways of India & Vincenzo de Luca, Italian Ambassador to India at the Piaggio-SUN Mobility launch of Apé E-City',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/histroy/2.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          month_year: 'Jan 2020',
          description: `1,000,000 emission-free kms powered`,
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/histroy/8.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          month_year: 'Jun 2020',
          description: `Partnered with IOCL, India's largest Oil Marketing Company to scale our interoperable energy infrastructure for electric 2 and 3-Wheelers, pan-India`,
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/histroy/11.jpg',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('milestones', null, {});
  }
};
