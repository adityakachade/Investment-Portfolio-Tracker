const express = require('express');
const router = express.Router();
const { addAsset, getAssetsByPortfolio } = require('../controllers/assetController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, addAsset);

router.route('/:portfolioId')
  .get(protect, getAssetsByPortfolio);

module.exports = router;