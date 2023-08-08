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
        order_price: 'Менее 5000 рублей',
        delivery_price: '2000 рублей',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_price: '5000 рублей и более',
        delivery_price: 'Бесплатно',
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
