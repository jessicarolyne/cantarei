'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('salmos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      video_url: {
        type: Sequelize.STRING
      },
      cifra: {
        type: Sequelize.STRING
      },
      tempo_liturgico: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.DATEONLY
      },
      pessoa_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model:'pessoas', key:'id' }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('salmos');
  }
};