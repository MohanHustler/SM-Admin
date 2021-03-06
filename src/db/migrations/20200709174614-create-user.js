'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
      .createTable(
        'users',
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          first_name: {
            allowNull: false,
            type: Sequelize.STRING
          },
          last_name: {
            allowNull: false,
            type: Sequelize.STRING
          },
          email: {
            allowNull: false,
            type: Sequelize.STRING,
            unique: true
          },
          password: {
            allowNull: false,
            type: Sequelize.STRING
          },
          created_at: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE
          }
        },
        {
          timestamps: true
        }
      )
      .then(() => {
        queryInterface.addIndex('users', ['email']);
      });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
