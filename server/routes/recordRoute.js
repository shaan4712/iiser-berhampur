// routes/recordRoute.js
const express = require('express');
const router = express.Router();
const Record = require('../models/record');
const User = require('../models/user');

// Get records for a specific user
router.get('/:userId', async (req, res) => {
  try {
    const records = await Record.find({ userId: req.params.userId });
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new record
router.post('/', async (req, res) => {
    try {
        const { userId, instrumentName, purpose, fromDate, toDate, fuelRequired } = req.body;
        
        if (!userId || !instrumentName || !purpose || !fromDate || !toDate || !fuelRequired) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newRecord = new Record({
            userId,
            instrumentName,
            purpose,
            fromDate,
            toDate,
            fuelRequired
        });

        const savedRecord = await newRecord.save();
        res.status(201).json(savedRecord);
    } catch (error) {
        console.error('Error creating record:', error);
        res.status(500).json({ error: 'Failed to create record' });
    }
});

// Delete a record
router.delete('/delete/:id', async (req, res) => {
    
    const origin = req.get('origin');
    if (origin === 'https://iiser-berhampur.vercel.app') {
        res.header('Access-Control-Allow-Origin', 'https://iiser-berhampur.vercel.app');
    } else {
        res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    }
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    try {
        const deletedRecord = await Record.findByIdAndDelete(req.params.id);
        if (!deletedRecord) {
            return res.status(404).json({ error: 'Record not found' });
        }
        res.json({ message: 'Record deleted successfully' });
    } catch (error) {
        console.error('Error deleting record:', error);
        res.status(500).json({ error: 'Failed to delete record' });
    }
});

module.exports = router;