const MilestoneRepo = require('../../db/repository/milestoneRepo');

const createMilestone = async (req, res) => {
  try {
    const milestone = await MilestoneRepo.createMilestone(req.body);
    if (milestone) {
      res.json({
        status: true,
        message: 'Milestone created successfully',
        data: milestone
      });
    } else {
      res.json({
        status: false,
        message: 'Failed to create milestone',
        data: milestone
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getMilestones = async (req, res) => {
  const { pageNumber, pageSize } = req.query;

  try {
    const milestones = await MilestoneRepo.getMilestones(pageNumber, pageSize);
    if (milestones) {
      res.json({
        status: true,
        message: 'All milestones',
        ...milestones
      });
    } else {
      res.json({
        status: false,
        message: 'Milestone not found',
        ...milestones
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getMilestoneById = async (req, res) => {
  try {
    const milestone = await MilestoneRepo.getMilestoneById(req.params.id);
    if (milestone) {
      res.json({
        status: true,
        message: `Milestones id: ${req.params.id}`,
        data: milestone
      });
    } else {
      res.json({
        status: false,
        message: 'Milestone not found',
        data: {}
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const updateMilestone = async (req, res) => {
  try {
    const updatedMilestone = await MilestoneRepo.updateMilestone(
      req.params.id,
      req.body
    );
    if (updatedMilestone[0]) {
      res.status(200).json({
        status: true,
        message: 'Milestone updated successfully'
      });
    } else {
      res.json({
        status: false,
        message: 'Invalid milestone'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const deleteMilestone = async (req, res) => {
  try {
    const milestone = await MilestoneRepo.deleteMilestone(req.params.id);
    if (milestone) {
      res.status(204).json({
        status: true,
        message: 'Milestone deleted successfully'
      });
    } else {
      res.json({
        status: true,
        message: 'Invalid milestone'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

module.exports = {
  createMilestone,
  getMilestones,
  getMilestoneById,
  updateMilestone,
  deleteMilestone
};
