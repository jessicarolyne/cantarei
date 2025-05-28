'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tempos_liturgicos', [{
       nome: 'Tempo Comum',
       cor: 'Verde',
       descricao: null
     }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('tempos_liturgicos', null, {});
  }
};
