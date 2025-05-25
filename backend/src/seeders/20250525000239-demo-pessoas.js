'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [
      {
        nome: 'Edvaldo',
        grupo_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Erica',
        grupo_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Jessica',
        grupo_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Julia',
        grupo_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};
