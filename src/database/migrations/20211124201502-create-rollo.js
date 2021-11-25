'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Rollos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      colorNombre: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      colorHex: {
        type: Sequelize.STRING
      },
      temperatura: {
        type: Sequelize.INTEGER,
        defaultValue:200
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Rollos');
  }
};