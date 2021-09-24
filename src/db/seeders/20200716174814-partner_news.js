'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'partner_news',
      [
        {
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/news/o1.png',
          heading:
            'SUN Mobility and IOCL launch battery swapping facility for Electric Vehicles in Chandigarh',
          news_brand_link: 'www.auto.hindustantimes.com',
          news_link:
            'https://auto.hindustantimes.com/auto/news/ioc-launches-battery-swapping-facility-for-quick-recharge-of-electric-vehicles-41593164814983.html',
          partner_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/news/o2.png',
          heading:
            'Battery Swapping Facility, i.e., Quick Interchange Station inaugurated at IndianOil retail outlet in Chandigarh',
          news_brand_link: 'www.iocl.com',
          news_link:
            'https://www.iocl.com/aboutus/NewsDetail.aspx?NewsID=56278&tID=8',
          partner_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/news/o3.png',
          heading:
            'SUN Mobility partners with IOCL to launch first battery swapping station at fuel pump in Chandigarh',
          news_brand_link: 'www.autocarpro.in',
          news_link:
            'https://www.autocarpro.in/news-national/sun-mobility-partners-iocl-to-launch-first-battery-swapping-station-at-fuel-pump-in-chandigarh-56667',
          partner_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/news/p1.png',
          heading:
            'SUN Mobility’s Swappable Battery Powers Piaggio’s Ape E-City',
          news_brand_link: 'www.bloomberg.com',
          news_link:
            'https://www.bloomberg.com/press-releases/2019-12-18/sun-mobility-s-swappable-battery-powers-piaggio-s-ape-e-city',
          partner_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/news/p2.png',
          heading:
            'Piaggio and SUN Mobility join hands for swappable battery technology',
          news_brand_link: 'energy.economictimes.indiatimes.com',
          news_link:
            'https://energy.economictimes.indiatimes.com/news/power/piaggio-and-sun-mobility-join-hands-for-swappable-batter-technology/71919769',
          partner_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/news/p3.png',
          heading:
            'Piaggio Ape E-city launched with Sun Mobility’s swappable battery tech',
          news_brand_link: 'www.autocarpro.in',
          news_link:
            'https://www.autocarpro.in/news-national/piaggio-ape-ecity-launched-with-sun-mobility%E2%80%99s-swappable-battery-tech-44947',
          partner_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/news/u1.png',
          heading: `Piaggio Ape E-city launched with Sun Mobility’s swappable battery tech`,
          news_brand_link: 'www.yourstory.com',
          news_link:
            'https://yourstory.com/2019/09/sun-mobility-battery-swap-electric-vehicle-uber-india-startup',
          partner_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/news/u2.png',
          heading: 'Uber ties up with SUN Mobility to deploy e-auto fleets',
          news_brand_link: 'www.fortuneindia.com',
          news_link:
            'https://www.fortuneindia.com/venture/uber-ties-up-with-sun-mobility-to-deploy-e-auto-fleets/103454',
          partner_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/news/u3.png',
          heading:
            'Uber ties up with SUN Mobility to accelerate electric mobility in India',
          news_brand_link: 'www.uber.com',
          news_link:
            'https://www.uber.com/en-IN/newsroom/uber-ties-up-with-sun-mobility-to-accelerate-electric-mobility-in-india/',
          partner_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/news/s1.png',
          heading: `SUN mobility, SmartE to set up charging and battery swap stations for electric two and
            three-wheelers in Delhi-NCR`,
          news_brand_link: 'www.financialexpress.com',
          news_link:
            'https://www.financialexpress.com/auto/bike-news/sun-mobility-smarte-to-set-up-charging-and-battery-swap-stations-for-electric-two-and-three-wheelers-in-delhi-ncr/1396742/',
          partner_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/news/s2.png',
          heading:
            'Sun Mobility, SmartE tie up for charging, battery-swap stations',
          news_brand_link: 'www.thehindubusinessline.com',
          news_link:
            'https://www.thehindubusinessline.com/todays-paper/tp-news/article25619606',
          partner_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/news/s3.png',
          heading:
            'SUN Mobility ties up with electric vehicle fleet operator SmartE',
          news_brand_link: 'www.economictimes.indiatimes.com',
          news_link:
            'https://economictimes.indiatimes.com/small-biz/startups/newsbuzz/sun-mobility-ties-up-with-electric-vehicle-fleet-operator-smarte/articleshow/66848537',
          partner_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/news/m1.png',
          heading: 'Sun Mobility ties up with Microsoft',
          news_brand_link: 'timesofindia.indiatimes.com',
          news_link:
            'https://timesofindia.indiatimes.com/business/india-business/sun-mobility-ties-up-with-microsoft/articleshow/64967863.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst',
          partner_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/news/m2.png',
          heading:
            'SUN Mobility Partners With Microsoft to Build Smart Network for its EV Energy Infrastructure',
          news_brand_link: 'www.ptinews.com',
          news_link:
            'http://www.ptinews.com/pressrelease/30505_press-subSUN-Mobility-Partners-With-Microsoft-to-Build-Smart-Network-for-its-EV-Energy-Infrastructure',
          partner_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/news/m3.png',
          heading:
            'Reva maker Chetan Maini joins hands with Microsoft to set up EV infrastructure in India',
          news_brand_link: 'www.businesstoday.in',
          news_link:
            'https://www.businesstoday.in/sectors/auto/reva-maker-chetan-maini-joins-hands-with-microsoft-to-set-up-ev-infrastructure-in-india/story/280227.html',
          partner_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/news/a1.png',
          heading:
            'Ashok Leyland partners with Reva founder for new electric mobility solution',
          news_brand_link: 'www.business-standard.com',
          news_link:
            'https://www.business-standard.com/article/companies/ashok-leyland-partners-with-reva-founder-for-new-electric-mobility-solution-117071800860_1.html',
          partner_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/news/a2.png',
          heading:
            'Ashok Leyland forms strategic alliance with SUN Mobility for electric vehicles',
          news_brand_link: 'economictimes.indiatimes.com',
          news_link:
            'https://economictimes.indiatimes.com/industry/auto/ashok-leyland-forms-strategic-alliance-with-sun-mobility-for-electric-vehicles/articleshow/59650133',
          partner_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          banner_image:
            'http://www.sunmobility.co.in/assets/images/about/news/a3.png',
          heading: 'Ashok Leyland in EV pact with Sun Mobility',
          news_brand_link: 'www.thehindu.com',
          news_link:
            'https://www.thehindu.com/business/ashok-leyland-in-ev-pact-with-sun-mobility/article19302891',
          partner_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('partner_news', null, {});
  }
};
