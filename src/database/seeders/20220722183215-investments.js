'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Investments', [{
      clientId: 1,
      assetId: 2,
      amount: 100,
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Investments', null, {});
  }
};
