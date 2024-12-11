const express = require('express');
const app = express();
const db = require('./config/db');
const cors = require('cors');

// Move CORS before other middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

// Combine body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRoutes = require('./routes/userRoute');
const recordRoutes = require('./routes/recordRoute');

// Use routes with prefixes
app.use('/api/users', userRoutes);  // Changed from '/api' to '/api/users'
app.use('/api/records', recordRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
});