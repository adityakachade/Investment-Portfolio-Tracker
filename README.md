# 📊 Investment Portfolio Tracker

This project is a full-stack web application that allows users to track and manage their investment portfolios including stocks, cryptocurrencies, and bonds.

---

## 🚀 Features

### 🔐 User Authentication
- Register & login with JWT-based authentication
- Secure endpoints with token validation

### 📁 Portfolio Management
- Create, update, and delete portfolios
- Add and manage individual assets

### 📈 Real-Time Asset Tracking
- Supports stocks, crypto, and bonds
- Fetch and display current prices

### 📊 Insights (Coming Soon)
- Track gains/losses
- Diversification reports

### 📦 Tech Stack
- **Frontend**: HTML,JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

---

## 📁 Project Structure

```
portfolio-tracker-backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── public/            # Frontend HTML, CSS, JS here
│   └── index.html
├── routes/
├── services/
├── .env
├── server.js
└── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repo
```bash
git clone https://github.com/yourname/portfolio-tracker.git
cd portfolio-tracker-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file:
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/portfolio-tracker
JWT_SECRET=your_jwt_secret_here
```

### 4. Start Backend Server
```bash
npm run dev
```

Backend will run at: `http://localhost:5000`

---

## 🧪 Usage

### 1. Access Frontend
Open your browser at:
```
http://localhost:5000/index.html
```

### 2. Workflow
- Register → Login
- Create portfolio
- Add assets
- View and manage portfolio assets

---

## 🛡️ Security
- JWT token validation
- Role-based middleware (extensible)
- CORS enabled for development

---

## 📬 API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Portfolios
- `GET /api/portfolios`
- `POST /api/portfolios`

### Assets
- `POST /api/assets`
- `GET /api/assets/:portfolioId`

---

## 📦 Deployment (Optional)
You can deploy backend (e.g. on Render) and frontend (e.g. Netlify or GitHub Pages) separately or serve frontend from the backend's `public/` folder.

---

## 🙋‍♂️ License
MIT License © 2025 Your Name
