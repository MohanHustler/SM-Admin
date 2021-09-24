const fs = require('fs');
const config = require('.');

module.exports = {
  development: {
    username: config.DEV_DB_USER_NAME,
    password: config.DEV_DB_USER_PASSWORD,
    database: config.DEV_DB,
    host: config.DEV_DB_HOST,
    dialect: config.DEV_DB_DIALECT
  },
  test: {
    username: config.DEV_DB_USER_NAME,
    password: config.DEV_DB_USER_PASSWORD,
    database: config.DEV_DB,
    host: config.DEV_DB_HOST,
    dialect: config.DEV_DB_DIALECT
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOST,
    dialect: process.env.PROD_DB_DIALECT
  }
};
