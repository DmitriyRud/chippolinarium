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
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'Салаты',
        image: '/image/categories/salad.jpg',
        description:
          'Откройте для себя новые гастрономические горизонты с нашими восхитительными салатами и превратите обычные приемы пищи в настоящее кулинарное путешествие!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Грибы',
        image: '/image/categories/mushroom.jpg',
        description:
          'Здесь вы найдете самую увлекательную коллекцию грибных вкусов, которые унесут вас в удивительное путешествие вкуса и текстур',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Салаты из моркови',
        image: '/image/categories/carrots.jpg',
        description:
          'Вас ждет разнообразие удивительных салатов, где морковь становится основным героем и приносит яркость и свежесть на любой стол',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Салаты из капусты',
        image: '/image/categories/cabbage-salad.jpg',
        description:
          'Добро пожаловать в наш раздел с салатами из капусты: здесь вы откроете для себя удивительный мир вкусов и текстур, связанных с этим универсальным овощем',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Баклажаны',
        image: '/image/categories/eggplant.jpg',
        description:
          'Баклажаны - настоящее волшебство для вашего вкусового опыта, и мы исследовали бесконечные сочетания для удовлетворения самых изысканных вкусов',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Пикантные соленья',
        image: '/image/categories/pickles.jpg',
        description:
          'Здесь вы обнаружите абсолютное разнообразие вкусов и запахов, которые подарят вашему столу неповторимый колорит',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Другие закуски',
        image: '/image/categories/snacks.jpg',
        description:
          'Наши закуски - идеальное дополнение к любому столу и соблазнительное начало вечеринки',
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
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
