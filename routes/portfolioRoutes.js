const express = require('express');
const router = express.Router();
const { createPortfolio, getPortfolios } = require('../controllers/portfolioController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, createPortfolio)
  .get(protect, getPortfolios);

module.exports = router;