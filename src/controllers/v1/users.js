const UserRepo = require('../../db/repository/userRepo');
const { authenticateUser, issueJWT } = require('../../auth/authUtils');

const login = async (req, res) => {
  try {
    const user = await authenticateUser(req.body);
    if (!user.status) {
      return res.status(400).json({
        success: false,
        msg: `Couldn't find your admin account. Enter valid email.`
      });
    } else {
      if (user.isValidPassword) {
        const tokenObject = issueJWT(user.user.dataValues.id);
        return res.status(200).json({
          success: true,
          token: tokenObject.token,
          expiresIn: tokenObject.expires
        });
      } else {
        return res
          .status(400)
          .json({ success: false, msg: 'Wrong password! Try again.' });
      }
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const createNewUser = async (req, res) => {
  try {
    const user = await UserRepo.createNewUser(req.body);
    if (user) {
      res.json({
        status: true,
        message: 'User created successfully',
        data: user
      });
    } else {
      res.json({
        status: false,
        message: 'Failed to create user',
        data: user
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getAllUsers = async (req, res) => {
  const { pageNumber, pageSize } = req.query;

  try {
    const users = await UserRepo.getAllUsers(pageNumber, pageSize);

    if (users) {
      res.json({
        status: true,
        message: 'All users',
        ...users
      });
    } else {
      res.json({
        status: false,
        message: 'Users not found',
        ...users
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await UserRepo.getUserById(req.params.id);

    if (user) {
      res.json({
        status: true,
        message: `User id: ${req.params.id}`,
        data: user
      });
    } else {
      res.json({
        status: false,
        message: 'Users not found',
        data: {}
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await UserRepo.updateUser(req.params.id, req.body);
    if (updatedUser[0]) {
      res.status(200).json({
        status: true,
        message: 'User updated successfully'
      });
    } else {
      res.json({
        status: false,
        message: 'Invalid user'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await UserRepo.deleteUser(req.params.id);
    if (user) {
      res.status(204).json({
        status: true,
        message: 'User deleted successfully'
      });
    } else {
      res.json({
        status: true,
        message: 'Invalid user'
      });
    }
  } catch (err) {
    res.json({ status: false, error: err });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
  login
};
