const db = require('../database/models');
const assetsService = require('../services/assetsService');

const investmentsService = {
  findAll: async () => {
    const investments = await db.Investment.findAll();
    return investments;
  },

  // findByClientId: async (clientId) => {
  //   const investments = await db.Investment.findAll({ where: { clientId }});
  //   return investments;
  // },

  createBuy: async (value) => {
    const { clientId, assetId, amount } = value;

    const assetById = await assetsService.findById(assetId);
    const amountAtBroker = assetById.dataValues.amount;

    if (amount > amountAtBroker) {
      throw new Error('Asset amount is greater than the amount available at the broker');
    };

    assetById.amount = amountAtBroker - amount;
    await assetById.save();

    const investment = await db.Investment.create({ clientId, assetId, amount });
    return investment;
  },

  createSell: async (value) => {
    const { clientId, assetId, amount } = value;

    const investmentByClient = await db.Investment.findOne({ where: {
      clientId,
      assetId
    } });

    const amountAtAcoount = investmentByClient.dataValues.amount;

    if (amount > amountAtAcoount) {
      throw new Error('Amount of asset to be sold cannot be greater that the amount available in the account');
    };

    const assetById = await assetsService.findById(assetId);
    const amountAtBroker = assetById.dataValues.amount;

    assetById.amount = amountAtBroker + amount;
    await assetById.save();

    investmentByClient.amount = amountAtAcoount - amount;
    await investmentByClient.save();
    
    return investmentByClient;
  },

};

module.exports = investmentsService;