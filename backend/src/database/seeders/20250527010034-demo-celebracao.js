'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('celebracoes', [{
      data: '2025-05-25',
      horario: '08:00h',
      tempo_liturgico_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('celebracoes', null, {});
  }
};
