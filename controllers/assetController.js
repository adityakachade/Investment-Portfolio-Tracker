const Asset = require('../models/Asset');

exports.addAsset = async (req, res, next) => {
  try {
    const asset = await Asset.create(req.body);
    res.status(201).json(asset);
  } catch (err) {
    next(err);
  }
};

exports.getAssetsByPortfolio = async (req, res, next) => {
  try {
    const assets = await Asset.find({ portfolioId: req.params.portfolioId });
    res.json(assets);
  } catch (err) {
    next(err);
  }
};
