'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('pessoas', 'grupo_id', );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('pessoas', 'grupo_id');
  }
};