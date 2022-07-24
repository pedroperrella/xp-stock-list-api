const db = require('../database/models');
const investmentsService = require('../services/investmentsService');

const assetsService = {
  findAll: async () => {
    const assets = await db.Asset.findAll();
    return assets;
  },

  findById: async (assetId) => {
    const asset = await db.Asset.findByPk(assetId, { attributes: { exclude: 'name' } });
    return asset;
  },

  findByClientId: async (clientId) => {
    const investments = await db.Investment.findAll({
      where: { clientId },
    });

    // const investments = await investmentsService.findByClientId(clientId);
    // console.log(investments);

    const investmentsByClient = Promise.all(investments.map(async (e) => {
        const findAssetById = await db.Asset.findByPk(e.assetId);
        const valueOfAsset = findAssetById.dataValues.value;
        return { ...e.dataValues, valueOfAsset };
      }));

      return investmentsByClient;
  },
};

module.exports = assetsService;