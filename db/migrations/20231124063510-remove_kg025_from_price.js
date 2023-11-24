'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Prices', 'kg025');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Prices', 'kg025', {
      type: Sequelize.FLOAT,
      allowNull: true,
    });
  },
};
