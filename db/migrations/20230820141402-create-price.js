'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Prices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      item_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Items',
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      kg025: {
        type: Sequelize.FLOAT,
      },
      kg05: {
        type: Sequelize.FLOAT,
      },
      kg1: {
        type: Sequelize.FLOAT,
      },
      kg3: {
        type: Sequelize.FLOAT,
      },
      kg5: {
        type: Sequelize.FLOAT,
      },
      kg10: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Prices');
  },
};
