const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.post("/signup", async (req, res) => {
    const { firstName, lastName, phone, email, password, category } = req.body;

    if (!firstName || !lastName || !phone || !email || !password || !category) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists. Please login." });
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
        return res.status(201).json({ message: "User created successfully." });
    } catch (err) {
        console.error("Signup Error:", err.message);
        return res.status(500).json({ error: "An unexpected server error occurred." });
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

        // Return user data with the success message
        return res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            }
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const User = require('../models/user');
// const bcrypt = require('bcrypt');

// router.post("/signup", async (req, res) => {
//     const { firstName, lastName, phone, email, password, category } = req.body;

//     // Validate required fields
//     if (!firstName || !lastName || !phone || !email || !password || !category) {
//         return res.status(400).json({ error: "All fields are required." });
//     }

//     try {
//         // Check if the user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ error: "User already exists. Please login." });
//         }

//         // Hash the password securely
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create a new user instance
//         const newUser = new User({
//             firstName,
//             lastName,
//             phone,
//             email,
//             password: hashedPassword,
//             category,
//         });

//         // Save the user to the database
//         await newUser.save();

//         return res.status(201).json({ message: "User created successfully." });
//     } catch (err) {
//         console.error("Signup Error:", err.message);
//         return res.status(500).json({ error: "An unexpected server error occurred." });
//     }
// });


// router.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ error: "Email and password are required" });
//     }

//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ error: "Invalid credentials" });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ error: "Invalid credentials" });
//         }

//         return res.status(200).json({ message: "Login successful" });
//     } catch (err) {
//         console.error(err.message);
//         return res.status(500).json({ error: "Server error" });
//     }
// });

// module.exports = router;