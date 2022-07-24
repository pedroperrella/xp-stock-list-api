const { findAll, findById, createDeposit, createWithdraw } = require('../services/accountService')

const accountController = {
  findAll: async (req, res) => {
    try {
      const accounts = await findAll();
      res.status(200).json(accounts);
    } catch (error) {
      return error;
    };
  },

  findById: async (req, res) => {
    try {
      const account = await findById(req.params.id);
      res.status(200).json(account);
    } catch ({ message }) {
      res.status(400).json({ message });
    };
  },

  createDeposit: async (req, res) => {
    try {
      const deposit = await createDeposit(req.body);
      res.status(200).json(deposit);
    } catch ({ message }) {
      res.status(400).json({ message });
    };
  },

  createWithdraw: async (req, res) => {
    try {
      const withdraw = await createWithdraw(req.body);
      res.status(200).json(withdraw);
    } catch ({ message }) {
      res.status(400).json({ message });
    };
  },
};

module.exports = accountController;