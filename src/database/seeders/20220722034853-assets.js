'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkInsert('Assets', [{
        name: 'Berkshire',
        amount: 1000,
        value: 1000,
      },
      {
        name: 'Meta',
        amount: 1000,
        value: 180,
      },
      {
        name: 'Amazon',
        amount: 1000,
        value: 120,  
      },
      {
        name: 'Alphabet',
        amount: 1000,
        value: 150,
      },
      {
        name: 'Apple',
        amount: 1000,
        value: 150,
      },
      {
        name: 'Microsoft',
        amount: 1000,
        value: 260,
      },
      {
        name: 'Tesla',
        amount: 1000,
        value: 515,
      },
      {
        name: 'Nvidia',
        amount: 1000,
        value: 180,
      },
      {
        name: 'Netflix',
        amount: 1000,
        value: 220,
      },
      {
        name: 'JPMorgan',
        amount: 1000,
        value: 115,
      },
    ], {
        timestamps: false,
      });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Assets', null, {});
  }
};
