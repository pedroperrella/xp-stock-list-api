const express = require('express');

const router = express.Router();

const { findAll, findById, createDeposit, createWithdraw } = require('../controllers/accountController');

router.get('/', findAll);
router.get('/:id', findById)
router.post('/deposit', createDeposit);
router.post('/withdraw', createWithdraw);

module.exports = router;