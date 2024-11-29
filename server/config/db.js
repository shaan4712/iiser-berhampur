const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  dbName: 'iiser'
});

//get the default connection
//mongoose maintains a default connection
const connectDB = mongoose.connection;

//Define event listeners
connectDB.on('connected', () => {
  console.log('Connected to MongoDB server');
})

connectDB.on('error', (err) => {
  console.error('MongoDB connection error');
})

connectDB.on('disconnected', () => {
  console.log('MongoDB server disconnected');
})

module.exports = connectDB;