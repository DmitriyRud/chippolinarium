'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Deliveries', [
      {
        order_price: 'Москва: от 40 000 руб.',
        delivery_price: 'Бесплатно',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_price: 'Московская обл.',
        delivery_price: 'По договоренности',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Deliveries', null, {});
  },
};
