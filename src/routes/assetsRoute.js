const express = require('express');

const router = express.Router();

const { findAll, findById, findByClientId } = require('../controllers/assetsController');

router.get('/', findAll);
router.get('/client/:id', findByClientId);
router.get('/:id', findById)

module.exports = router;