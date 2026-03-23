require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
app.use(cors());

// connect DB
connectDB();

// middleware
app.use(express.json());

// routes
app.use('/api/chat', require('./routes/aiRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/history', require('./routes/chatRoutes'));

// test route
app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});