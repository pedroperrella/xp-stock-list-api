const db = require('../database/models');

const accountService = {
  findAll: async () => {
    const accounts = await db.Client.findAll();
    return accounts;
  },

  findById: async (clientId) => {
    const account = await db.Client.findByPk(clientId, { attributes: { exclude: 'fullName' } });
    return account;
  },

  createDeposit: async (deposit) => {
    const { clientId, value } = deposit;

    if (value <= 0) {
      const error = new Error(`Amount to be deposited can't be negative or zero`);
      throw error;
    };

    const clientById = await db.Client.findByPk(clientId);
    const clientBalance = clientById.dataValues.balance;

    clientById.balance = clientBalance + value;
    await clientById.save();

    return deposit;
  },

  createWithdraw: async (withdraw) => {
    const { clientId, value } = withdraw;

    const clientById = await db.Client.findByPk(clientId);
    const clientBalance = clientById.dataValues.balance;

    if (value <= 0 || value > clientBalance) {
      const error = new Error(`Amount to be deposited can't be negative, zero or greater that the amount available in the account`);
      throw error;
    };

    clientById.balance = clientBalance - value;
    await clientById.save();

    return withdraw;
  },
};

module.exports = accountService;