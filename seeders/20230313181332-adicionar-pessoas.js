'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [
      { nome: 'Maylla', idade: 16, sobrenome: 'Nascimento'},
      { nome: 'Maria', idade: 16, sobrenome: 'Barbieri'},
      { nome: 'Mariana', idade: 16, sobrenome: 'Santiago'},
      { nome: 'Eloise', idade: 16, sobrenome: 'Bridgerton'},
      { nome: 'Abelha', idade: 13, sobrenome: 'Brid'},
        ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};




