const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.post("/signup", async (req, res) => {
    const { firstName, lastName, phone, email, password, category } = req.body;

    if (!firstName || !lastName || !phone || !email || !password || !category) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            phone,
            email,
            password: hashedPassword,
            category,
        });

        await newUser.save();
        return res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Server error" });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        return res.status(200).json({ message: "Login successful" });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;