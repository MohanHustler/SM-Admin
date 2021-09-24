const db = require('..');

class DashboardRepo {
  static async getDashboard() {
    try {
      const newsCount = db.News.count();
      const networksCount = db.Network.count();
      const milestonesCount = db.Milestone.count();
      const partershipCount = db.Partner.count();
      const coveragesCount = db.Coverage.count();
      const imageGalleriesCount = db.ImageGallery.count();
      const videosCount = db.Video.count();
      const mediaKitsCount = db.MediaKit.count();
      const usersCount = db.User.count();

      const allResourceCount = await Promise.all([
        newsCount,
        networksCount,
        milestonesCount,
        partershipCount,
        coveragesCount,
        imageGalleriesCount,
        videosCount,
        mediaKitsCount,
        usersCount
      ]);
      const resources = [
        'News',
        'Networks',
        'Milestones',
        'Partnership',
        'Coverages',
        'Image Galleries',
        'Videos',
        'Mediakits',
        'Users'
      ];
      const dashboardData = [];
      allResourceCount.forEach((el, index) => {
        dashboardData.push({ title: resources[index], count: el });
      });

      return dashboardData;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = DashboardRepo;
