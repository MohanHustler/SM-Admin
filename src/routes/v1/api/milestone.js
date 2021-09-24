const express = require('express');
const milestoneRouter = express.Router();

const {
  createMilestone,
  getMilestones,
  updateMilestone,
  deleteMilestone,
  getMilestoneById
} = require('../../../controllers/v1/milestones');

// Create Milestone
milestoneRouter.post('/', createMilestone);

// Get Milestone
milestoneRouter.get('/', getMilestones);

// Get Milestone By Id
milestoneRouter.get('/:id', getMilestoneById);

// Update Milestone
milestoneRouter.patch('/:id', updateMilestone);

// Delete Milestone
milestoneRouter.delete('/:id', deleteMilestone);

module.exports = milestoneRouter;
