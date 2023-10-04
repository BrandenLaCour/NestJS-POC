'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Tasks', 'isImportant', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Tasks', 'isImportant')
  }
};
