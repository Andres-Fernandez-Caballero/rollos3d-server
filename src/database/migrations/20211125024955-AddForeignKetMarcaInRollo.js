'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Rollos', 'marcaId', Sequelize.INTEGER);
    await queryInterface.addConstraint('Rollos', {
      fields:['marcaId'],
      type: 'foreign key',
      name: 'fk_rollos_marcas',
      references: {
        table: 'Marcas',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    const dropForeignKeySQL = queryInterface.QueryGenerator.dropForeignKeyQuery("Rollos", "marcaId");
    await queryInterface.sequelize.query(dropForeignKeySQL);
    await queryInterface.removeColumn('Rollos', 'marcaId');
  }
};
