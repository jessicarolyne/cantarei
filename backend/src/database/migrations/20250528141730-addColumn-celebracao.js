'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('celebracoes', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    });
    await queryInterface.addColumn('celebracoes', 'pessoa_id', {
      allowNull: true,
      type: Sequelize.INTEGER,
      references: { model: 'pessoas', key: 'id' }
    });
    await queryInterface.addColumn('celebracoes', 'salmo_id', {
      allowNull: true,
      type: Sequelize.INTEGER,
      references: { model: 'salmos', key: 'id' }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('celebracoes', 'deletedAt');
    await queryInterface.removeColumn('celebracoes', 'pessoa_id');
    await queryInterface.removeColumn('celebracoes', 'salmo_id');
  }
};