const { findAll, createBuy, createSell } = require('../services/investmentsService')

const investmentsController = {
  findAll: async (_req, res) => {
    try {
      const investments = await findAll();
      res.status(200).json(investments);      
    } catch (error) {
      return error;
    };
  },

  createBuy: async (req, res) => {
    try {
      const investment = await createBuy(req.body);
      res.status(200).json(investment);
    } catch ({ message }) {
      res.status(400).json({ message });
    };
  },

  createSell: async (req, res) => {
    try {
      const investment = await createSell(req.body);
      res.status(200).json(investment);
    } catch ({ message }) {
      res.status(400).json({ message });
    };
  }
};

module.exports = investmentsController;