const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/user');

const router = express.Router();

// Register a new user
router.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user to the database
    const newUser = await User.create({
      username,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }
});

// Login an existing user
router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({
      where: { username },
    });

    // Check if the user exists and the password is correct
    if (user && await bcrypt.compare(password, user.password)) {
      // Generate a JWT token
      const token = jwt.sign({ userId: user.id }, config.jwtSecret, { expiresIn: '1h' });

      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
