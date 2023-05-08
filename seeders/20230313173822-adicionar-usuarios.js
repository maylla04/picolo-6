'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { //colocar os dados no banco
    await queryInterface.bulkInsert('usuarios', [
      { nome: 'Maylla Nascimento' },
      { nome: 'Mariana Santiago' },
      { nome: 'Maria Barbieri' },
      { nome: 'Helder Gabriel' },
      { nome: 'Eloise Brid' }
      ], {});
  },

  async down (queryInterface, Sequelize) { //retira dados do banco e apaga
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
