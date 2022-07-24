const express = require('express');

const router = express.Router();

const { findAll, createBuy, createSell } = require('../controllers/investmentsController');

router.get('/', findAll);
router.post('/buy', createBuy);
router.post('/sell', createSell);

module.exports = router;