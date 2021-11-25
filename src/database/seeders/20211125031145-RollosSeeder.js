'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rollos', [
      {
       colorNombre: 'Rojo transparente',
       colorHex: '#ff2b00',
       marcaId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      colorNombre: 'Caribe',
      colorHex: '#0051ff',
      marcaId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      colorNombre: 'Rojo',
      colorHex: '#b40404',
      marcaId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
     
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
