'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Marcas', [
      {
        nombre: 'Grillon3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Rojo 3D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'XSI',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
