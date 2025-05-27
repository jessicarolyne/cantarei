'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('salmos', 'pessoa_id');
    await queryInterface.removeColumn('salmos', 'tempo_liturgico');
    await queryInterface.addColumn('salmos', 'ano_liturgico', {
      allowNull: true,
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('salmos', 'observacoes', {
      allowNull: true,
      type: Sequelize.STRING
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('salmos', 'pessoa_id', {
      allowNull: true,
      type: Sequelize.DATE
    });
  }
};