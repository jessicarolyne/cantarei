'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('celebracoes_salmos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      celebracao_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'celebracoes', key: 'id' }
      },
      salmo_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'salmos', key: 'id' }
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
    await queryInterface.dropTable('celebracoes_salmos');
  }
};