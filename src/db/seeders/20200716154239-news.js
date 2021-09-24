'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'news',
      [
        {
          heading:
            'Uber and Sun Mobility come together to deploy e-three wheeler in India',
          description:
            'The availability of swappable lithium-ion batteries will reduce the overall cost of ownership of such eco- friendly vehicles as batteries constitute almost 40% of the overall cost of an electric vehicle.',
          news_link:
            'https://auto.hindustantimes.com/auto/news/ioc-launches-battery-swapping-facility-for-quick-recharge-of-electric-vehicles-41593164814983.html',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/home/news/1.png',
          partner_logo_image:
            'http://www.sunmobility.co.in/assets/images/home/news/2.2.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          heading:
            'SUN Mobility and IOCL launch battery swapping facility for Electric Vehicles in Chandigarh',
          description:
            'Indian Oil Corporation Limited (IOCL) and SUN Mobility announced the launch of a battery swapping facility for electric vehicles (EVs) at IOCL petrol pumps, offering to replace discharged batteries with fully charged ones in a procedure that would take only a few minutes.',
          news_link:
            'https://auto.hindustantimes.com/auto/news/ioc-launches-battery-swapping-facility-for-quick-recharge-of-electric-vehicles-41593164814983.html',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/home/news/iocl.png',
          partner_logo_image:
            'http://www.sunmobility.co.in/assets/images/coverage/latest_news/small_thumbnail/ht_auto.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          heading: `SUN Mobility's Swappable Battery Powers Piaggio's Ape E-City`,
          description: `"Our proven solution which has clocked over 1 million+ emission free kms and transported 1.5 million+passengers till date, makes a very compelling value proposition for 3-wheeler drivers.", said Mr Chetan Maini, VC, SUN Mobility`,
          news_link:
            'https://auto.hindustantimes.com/auto/news/ioc-launches-battery-swapping-facility-for-quick-recharge-of-electric-vehicles-41593164814983.html',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/home/news/7.png',
          partner_logo_image:
            'http://www.sunmobility.co.in/assets/images/home/news/1.1.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          heading:
            'How Microsoft CEO Satya Nadella made a sales pitch to start-ups',
          description: `Nadella mentioned start-ups such as Sun Mobility, providing rechargeable batteries for EVs- “It is very fascinating on how the Indian start-ups are leveraging technology and have the potential to create a global impact"`,
          news_link:
            'https://auto.hindustantimes.com/auto/news/ioc-launches-battery-swapping-facility-for-quick-recharge-of-electric-vehicles-41593164814983.html',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/home/news/4.png',
          partner_logo_image:
            'http://www.sunmobility.co.in/assets/images/home/news/3.3.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          heading:
            'SUN Mobility ties up with electric vehicle fleet operator SmartE',
          description: `"The partnership with SmartE will enable us to tangibly impact the lives of hundreds of people by making refuelling of electric vehicles faster, cheaper and more convenient for them to adopt,” said SUN Mobility's Co-Founder and Vice-Chairman Chetan Maini`,
          news_link:
            'https://auto.hindustantimes.com/auto/news/ioc-launches-battery-swapping-facility-for-quick-recharge-of-electric-vehicles-41593164814983.html',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/home/news/2.png',
          partner_logo_image:
            'http://www.sunmobility.co.in/assets/images/home/news/4.4.png',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          heading:
            'Adopted by Ahmedabad, ‘Battery-Swapping’ Could Revolutionize India’s E-Bus Scene',
          description: `A fully-automated system will swap the smart batteries under 2.5 minutes and replace them with new ones at Ahmedabad. These smart batteries weigh just one-fourth the weight of a standard lithium-ion battery of that size.`,
          news_link:
            'https://auto.hindustantimes.com/auto/news/ioc-launches-battery-swapping-facility-for-quick-recharge-of-electric-vehicles-41593164814983.html',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/home/news/5.jpeg',
          partner_logo_image:
            'http://www.sunmobility.co.in/assets/images/home/news/5.5.png',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('news', null, {});
  }
};
