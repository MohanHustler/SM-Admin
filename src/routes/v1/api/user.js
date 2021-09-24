const express = require('express');
const userRouter = express.Router();
const loginRouter = express.Router();

const {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  login,
  getUserById
} = require('../../../controllers/v1/users');

// Login
loginRouter.post('/login', login);

// Create New User
userRouter.post('/', createNewUser);

// Read All User
userRouter.get('/', getAllUsers);

// Get User By Id
userRouter.get('/:id', getUserById);

// Update User
userRouter.patch('/:id', updateUser);

// Delete User
userRouter.delete('/:id', deleteUser);

module.exports = { userRouter, loginRouter };
