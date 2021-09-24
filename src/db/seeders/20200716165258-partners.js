'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'partners',
      [
        {
          partner_logo:
            'http://www.sunmobility.co.in/assets/images/about/partnership/indain_oil_3x.png',
          description: `June, 2020 SUN Mobility has partnered with IOCL, India's largest oil marketing company. IOCL and SUN Mobility have been working together to leverage the latter’s world class, interoperable battery swapping technology aimed at electric 2 & 3 wheelers. This partnership will ensure that this solution is accessible to customers at the same scale and ease as conventional vehicles.`,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          partner_logo:
            'http://www.sunmobility.co.in/assets/images/about/partnership/piaggio.png',
          description: `December, 2019 SUN Mobility has partnered with Piaggio, enabling the launch of India’s 1st electric passenger Autorickshaw with swappable batteries. Piaggio’s Ape eCity comes with world-class features unmatched by any other electric 3-wheeler and is powered by SUN Mobility’s Smart Battery. It is supported by SUN Mobility’s pan-India network of Quick Interchange Stations spread across cities such as Chandigarh, Gurgaon, Kozhikode etc. SUN Mobility’s vehicle integration technology, ‘Plug-and-play Dock’ enabled development of this solution in fraction of a typical product development time.`,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          partner_logo:
            'http://www.sunmobility.co.in/assets/images/about/partnership/uber.png',
          description: `July, 2019 SUN Mobility’s strategic partnership with Uber, one of the world’s largest mobility platforms, is part of its commitment to power 1 million EVs by 2025 for shared mobility. This partnership paves the way for using technology integration to offer electric 3-wheeler drivers an enhanced experience for EV refueling thereby accelerating EV adoption.`,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          partner_logo:
            'http://www.sunmobility.co.in/assets/images/about/partnership/smarte.png',
          description: `November, 2018 We partnered with SmartE, India’s largest electric vehicle fleet operator, to deploy our open-architecture platform to support their fleet of electric three-wheelers. Our battery swapping solution is currently deployed at SmartE Park & Charge Hubs across the Delhi-NCR, to bolster its first and last-mile connectivity services.`,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          partner_logo:
            'http://www.sunmobility.co.in/assets/images/about/partnership/microsoft.png',
          description: `July, 2018 To deploy our universal energy infrastructure effectively, we partnered with Microsoft to develop the Smart Network. It uses Microsoft’s technology to connect our Smart Batteries and Quick Interchange Stations (QIS) with end users through a mobile application. The Smart Network also helps users track battery charge and identify the nearest QIS.`,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          partner_logo:
            'http://www.sunmobility.co.in/assets/images/about/partnership/ashokleyland.png',
          description: `July, 2017 As part of our first partnership, we entered into a strategic alliance with Ashok Leyland, flagship of the Hinduja Group. This global partnership has helped both organizations leverage India’s engineering potential to develop the Circuit S bus. It is the first electric bus to be powered by SUN Mobility’s battery swapping technology and is currently operational in Ahmedabad as part of the BRTS fleet.`,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('partners', null, {});
  }
};
