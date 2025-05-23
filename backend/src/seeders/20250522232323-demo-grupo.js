'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Grupo', [
      {
        nome: 'Abba Pai'
      },
      {
        nome: 'Celebrai'
      },
      {
        nome: 'Jesus Peregrino'
      },
      {
        nome: 'Pastoral do Adolescente'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Grupo', null, {});
  }
};
