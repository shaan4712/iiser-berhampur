const express = require('express');
const app = express();
const db = require('./config/db');
const cors = require('cors');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

app.use(express.json());

const userRoutes = require('./routes/userRoute');
app.use('/api', userRoutes);

app.listen(5000, () => {
  console.log("Listening on port 5000");
})