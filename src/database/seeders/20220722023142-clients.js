module.exports = {
  up: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkInsert('Clients', [{
        fullName: 'Ana Nogueira',
        balance: 10000
      },
      {
        fullName: 'Luigi Dias',
        balance: 3000
      },
      {
        fullName: 'Sofia Cunha',
        balance: 500
      },
      {
        fullName: 'Eduarda Moreira',
        balance: 5000
      },
      {
        fullName: 'Emanuel Lopes',
        balance: 100
      },
      {
        fullName: 'Pedro Souza',
        balance: 3000
      },
    ], {
        timestamps: false,
      });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {});
  }
};
