const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const UserRepo = require('../db/repository/userRepo');
const pathToKey = path.join(__dirname, '../..', 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

const authenticateUser = async (credentials) => {
  const user = await UserRepo.getUserByEmailWithPassword(credentials.email);

  if (user) {
    if (user.validPassword(credentials.password)) {
      return { status: true, user: user, isValidPassword: true };
    } else {
      return { status: true, user: user, isValidPassword: false };
    }
  } else {
    return { status: false, user: null };
  }
};

const issueJWT = (userId) => {
  const id = userId;
  const expiresIn = '2d';

  const payload = {
    sub: id,
    iat: Date.now()
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn: expiresIn,
    algorithm: 'RS256'
  });

  return {
    token: signedToken,
    expires: expiresIn
  };
};

module.exports = {
  authenticateUser,
  issueJWT
};
