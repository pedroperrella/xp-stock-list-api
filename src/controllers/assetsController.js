const { findAll, findById, findByClientId } = require('../services/assetsService');

const assetsController = {
  findAll: async (_req, res) => {
    try {
      const assets = await findAll();
      res.status(200).json(assets);
    } catch (error) {
      return error;
    };
  },

  findById: async (req, res) => {
    try {
      const asset = await findById(req.params.id);
      res.status(200).json(asset);
    } catch (error) {
      return error;
    };
  },
  
  findByClientId: async (req, res) => {
    try {
      const asset = await findByClientId(req.params.id);
      res.status(200).json(asset);
    } catch (error) {
      return error;
    };
  },
};

module.exports = assetsController;
