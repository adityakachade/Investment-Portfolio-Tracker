const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');
const assetRoutes = require('./routes/assetRoutes');
const { errorHandler } = require('./middleware/errorHandler');
const path = require('path');

dotenv.config();

const app = express();
app.use(express.json());

// ✅ Serve static frontend files (after app is defined)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/portfolios', portfolioRoutes);
app.use('/api/assets', assetRoutes);
app.use(errorHandler);

// DB & Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT, () => console.log('Server running')))
  .catch(err => console.log(err));
