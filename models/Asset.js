const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  portfolioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Portfolio', required: true },
  type: { type: String, enum: ['stock', 'crypto', 'bond'], required: true },
  symbol: { type: String, required: true },
  quantity: { type: Number, required: true },
  buyPrice: { type: Number, required: true }
});

module.exports = mongoose.model('Asset', assetSchema);
