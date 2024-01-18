const express = require('express');
const authMiddleware = require('../middleware/authentication');
const Contact = require('../models/contact');

const router = express.Router();

// Get user's contacts
router.get('/', authMiddleware, async (req, res, next) => {
  try {
    const userId = req.userId;

    // Fetch the user's contacts from the database
    const contacts = await Contact.findAll({
      where: { userId },
    });

    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
});

// Add a new contact
router.post('/', authMiddleware, async (req, res, next) => {
  try {
    const userId = req.userId;
    const { contactUsername } = req.body;

    // Save the contact to the database
    const newContact = await Contact.create({
      userId,
      contactUsername,
    });

    res.status(201).json({ message: 'Contact added successfully' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
