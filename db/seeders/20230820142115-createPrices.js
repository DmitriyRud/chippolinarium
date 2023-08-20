'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Prices', [
      {
        item_id: 1,
        kg025: 45,
        kg05: 75,
        kg1: 90,
        kg3: 270,
        kg5: 400,
        kg10: 750,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 2,
        kg025: 45,
        kg05: 75,
        kg1: 90,
        kg3: 270,
        kg5: 400,
        kg10: 750,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 3,
        kg025: 45,
        kg05: 75,
        kg1: 90,
        kg3: 270,
        kg5: 400,
        kg10: 750,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 4,
        kg025: 45,
        kg05: 75,
        kg1: 90,
        kg3: 270,
        kg5: 400,
        kg10: 750,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 5,
        kg025: 65,
        kg05: 0,
        kg1: 280,
        kg3: 0,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 6,
        kg025: 65,
        kg05: 0,
        kg1: 280,
        kg3: 0,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 7,
        kg025: 100,
        kg05: 0,
        kg1: 400,
        kg3: 0,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 8,
        kg025: 55,
        kg05: 0,
        kg1: 140,
        kg3: 370,
        kg5: 600,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 9,
        kg025: 55,
        kg05: 0,
        kg1: 140,
        kg3: 370,
        kg5: 600,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 10,
        kg025: 0,
        kg05: 0,
        kg1: 0,
        kg3: 0,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 11,
        kg025: 90,
        kg05: 0,
        kg1: 450,
        kg3: 1100,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 12,
        kg025: 70,
        kg05: 0,
        kg1: 350,
        kg3: 0,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 13,
        kg025: 90,
        kg05: 0,
        kg1: 280,
        kg3: 750,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 14,
        kg025: 110,
        kg05: 0,
        kg1: 550,
        kg3: 1200,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 15,
        kg025: 118,
        kg05: 0,
        kg1: 600,
        kg3: 1500,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 16,
        kg025: 90,
        kg05: 0,
        kg1: 450,
        kg3: 1100,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 17,
        kg025: 90,
        kg05: 0,
        kg1: 450,
        kg3: 1100,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 18,
        kg025: 90,
        kg05: 0,
        kg1: 450,
        kg3: 1100,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 19,
        kg025: 75,
        kg05: 0,
        kg1: 380,
        kg3: 950,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 20,
        kg025: 75,
        kg05: 0,
        kg1: 380,
        kg3: 950,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 21,
        kg025: 112,
        kg05: 0,
        kg1: 400,
        kg3: 950,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 22,
        kg025: 112,
        kg05: 0,
        kg1: 400,
        kg3: 950,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 23,
        kg025: 116,
        kg05: 0,
        kg1: 450,
        kg3: 1050,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 24,
        kg025: 116,
        kg05: 0,
        kg1: 450,
        kg3: 1050,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 25,
        kg025: 95,
        kg05: 0,
        kg1: 350,
        kg3: 850,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 27,
        kg025: 60,
        kg05: 90,
        kg1: 150,
        kg3: 400,
        kg5: 600,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 28,
        kg025: 60,
        kg05: 90,
        kg1: 150,
        kg3: 400,
        kg5: 600,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 29,
        kg025: 75,
        kg05: 90,
        kg1: 160,
        kg3: 450,
        kg5: 650,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 30,
        kg025: 60,
        kg05: 85,
        kg1: 140,
        kg3: 400,
        kg5: 600,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 31,
        kg025: 70,
        kg05: 90,
        kg1: 150,
        kg3: 450,
        kg5: 650,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 32,
        kg025: 0,
        kg05: 95,
        kg1: 130,
        kg3: 0,
        kg5: 350,
        kg10: 650,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 33,
        kg025: 0,
        kg05: 60,
        kg1: 90,
        kg3: 0,
        kg5: 400,
        kg10: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 34,
        kg025: 0,
        kg05: 60,
        kg1: 90,
        kg3: 0,
        kg5: 400,
        kg10: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 35,
        kg025: 0,
        kg05: 65,
        kg1: 90,
        kg3: 0,
        kg5: 400,
        kg10: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 36,
        kg025: 0,
        kg05: 65,
        kg1: 90,
        kg3: 0,
        kg5: 400,
        kg10: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 37,
        kg025: 0,
        kg05: 65,
        kg1: 90,
        kg3: 0,
        kg5: 400,
        kg10: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 38,
        kg025: 0,
        kg05: 65,
        kg1: 90,
        kg3: 0,
        kg5: 400,
        kg10: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 39,
        kg025: 0,
        kg05: 80,
        kg1: 150,
        kg3: 0,
        kg5: 650,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 40,
        kg025: 95,
        kg05: 0,
        kg1: 300,
        kg3: 800,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 41,
        kg025: 95,
        kg05: 0,
        kg1: 300,
        kg3: 800,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 42,
        kg025: 0,
        kg05: 85,
        kg1: 105,
        kg3: 0,
        kg5: 450,
        kg10: 750,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 43,
        kg025: 0,
        kg05: 0,
        kg1: 0,
        kg3: 0,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 44,
        kg025: 0,
        kg05: 0,
        kg1: 0,
        kg3: 0,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 45,
        kg025: 0,
        kg05: 0,
        kg1: 0,
        kg3: 0,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 46,
        kg025: 0,
        kg05: 0,
        kg1: 0,
        kg3: 0,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 47,
        kg025: 105,
        kg05: 0,
        kg1: 380,
        kg3: 950,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 48,
        kg025: 90,
        kg05: 0,
        kg1: 350,
        kg3: 850,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 49,
        kg025: 75,
        kg05: 0,
        kg1: 180,
        kg3: 450,
        kg5: 0,
        kg10: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Prices', null, {});
  },
};