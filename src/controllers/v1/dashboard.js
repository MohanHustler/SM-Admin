const SunMobilityWebsiteRepo = require('../../db/repository/dashboardRepo');

const getDashboard = async (req, res) => {
  try {
    const dashboardData = await SunMobilityWebsiteRepo.getDashboard();
    if (dashboardData) {
      res.json({
        status: true,
        message: 'Dashboard Data',
        data: dashboardData
      });
    } else {
      res.json({
        status: false,
        message: 'Data not found',
        data: dashboardData
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

module.exports = getDashboard;
