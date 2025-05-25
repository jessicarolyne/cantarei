'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('salmos', [
      {
        titulo: 'Salmo 66 - Que as nações vos glorifiquem, ó Senhor, que todas as nações vos glorifiquem!',
        video_url: 'https://www.youtube.com/watch?v=BCoeLD6u-is',
        cifra: "C G Am",
        tempo_liturgico: '6º Domingo da Páscoa - Ano C',
        data: '2025-05-25',
        pessoa_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('salmos', null, {});
  }
};
