const Portfolio = require('../models/Portfolio');

exports.createPortfolio = async (req, res, next) => {
  try {
    const portfolio = await Portfolio.create({ ...req.body, userId: req.user.id });
    res.status(201).json(portfolio);
  } catch (err) {
    next(err);
  }
};

exports.getPortfolios = async (req, res, next) => {
  try {
    const portfolios = await Portfolio.find({ userId: req.user.id });
    res.json(portfolios);
  } catch (err) {
    next(err);
  }
};
