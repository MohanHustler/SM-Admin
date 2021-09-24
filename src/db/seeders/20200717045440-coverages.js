'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'coverages',
      [
        {
          logo:
            'http://www.sunmobility.co.in/assets/images/coverage/latest_news/small_thumbnail/time_of_india.png',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/coverage/featured-articles/1.png',
          coverage_link:
            'http://mediamonitor.the-practice.net/sun-mobility/wp-content/uploads/sites/33/2019/10/ban20191017tto16628254.jpg',
          category_id: 1,
          heading: 'City’s first battery swapping station for EVs in the works',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          logo:
            'http://www.sunmobility.co.in/assets/images/coverage/latest_news/small_thumbnail/business_standard.png',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/coverage/featured-articles/2.png',
          coverage_link:
            'https://www.business-standard.com/article/companies/meet-chetan-maini-pioneer-in-the-race-for-electric-mobility-in-india-119072700024_1.html',
          category_id: 1,
          heading: 'Electric dreams',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          logo:
            'http://www.sunmobility.co.in/assets/images/coverage/featured-articles/1.2.png',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/coverage/featured-articles/3.png',
          coverage_link:
            'https://www.bloombergquint.com/business/an-affordable-ev-is-at-least-five-years-away-says-indias-electric-car-pioneer',
          category_id: 1,
          heading:
            'An Affordable EV Is At Least Five Years Away, Says Indias Electric Car Pioneer',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          logo:
            'http://www.sunmobility.co.in/assets/images/coverage/latest_news/small_thumbnail/time_of_india.png',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/coverage/latest_news/2020/1.png',
          coverage_link:
            'https://www.bloomberg.com/press-releases/2019-12-18/sun-mobility-s-swappable-battery-powers-piaggio-s-ape-e-citya',
          category_id: 2,
          heading: 'Global EV Battery Swapping Market Research Report 2020',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          logo:
            'http://www.sunmobility.co.in/assets/images/coverage/latest_news/small_thumbnail/time_of_india.png',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/coverage/featured-articles/1.png',
          coverage_link:
            'https://auto.economictimes.indiatimes.com/news/industry/industry-leaders-to-come-together-to-chalk-out-ev-strategy-in-the-post-covid-world/76512054',
          category_id: 2,
          heading: `An Affordable EV Is At Least Five Years Away, Says Indias Electric Car Pioneer`,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          logo:
            'http://www.sunmobility.co.in/assets/images/coverage/latest_news/small_thumbnail/time_of_india.png',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/coverage/latest_news/2019/1.png',
          coverage_link:
            'https://timesofindia.indiatimes.com/business/india-business/ev-makers-seek-lower-duty-on-components-batteries/articleshow/67731684',
          category_id: 3,
          heading: `EV makers seek lower duty on components, batteries`,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          logo:
            'http://www.sunmobility.co.in/assets/images/coverage/latest_news/small_thumbnail/time_of_india.png',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/coverage/latest_news/2019/2.png',
          coverage_link:
            'https://www.thehindubusinessline.com/economy/budget/budget-backs-electric-vehicles-but-no-sops-announced/article26154025',
          category_id: 3,
          heading: `Budget backs Electric Vehicles, but no sops announced`,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          logo:
            'http://www.sunmobility.co.in/assets/images/coverage/latest_news/small_thumbnail/business_standard.png',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/coverage/latest_news/2018/1.png',
          coverage_link:
            'https://timesofindia.indiatimes.com/business/india-business/ev-makers-seek-lower-duty-on-components-batteries/articleshow/67731684',
          category_id: 4,
          heading: `Auto Expo 2018: Ashok Leyland unveils electric bus with swappable batteries`,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          logo:
            'http://www.sunmobility.co.in/assets/images/coverage/latest_news/small_thumbnail/forbes.png',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/coverage/latest_news/2018/2.png',
          coverage_link:
            'https://www.thehindubusinessline.com/economy/budget/budget-backs-electric-vehicles-but-no-sops-announced/article26154025',
          category_id: 4,
          heading: `Chetan Maini: Back in the electric mobility business`,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          logo:
            'http://www.sunmobility.co.in/assets/images/coverage/latest_news/small_thumbnail/time_of_india.png',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/coverage/latest_news/2017/1.png',
          coverage_link:
            'https://timesofindia.indiatimes.com/business/india-business/ev-makers-seek-lower-duty-on-components-batteries/articleshow/67731684',
          category_id: 5,
          heading: `Mainis set up new venture to boost electric vehicle use`,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          logo:
            'http://www.sunmobility.co.in/assets/images/coverage/latest_news/small_thumbnail/economic_times.png',
          banner_image:
            'http://www.sunmobility.co.in/assets/images/coverage/latest_news/2017/2.png',
          coverage_link:
            'https://www.thehindubusinessline.com/economy/budget/budget-backs-electric-vehicles-but-no-sops-announced/article26154025',
          category_id: 5,
          heading: `Maini brothers are back on road with a smart battery plan for electric vehicles`,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('coverages', null, {});
  }
};
