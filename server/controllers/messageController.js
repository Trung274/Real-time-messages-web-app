const express = require('express');
const authMiddleware = require('../middleware/authentication');
const Message = require('../models/message');

const router = express.Router();

// Get messages between the user and a specific contact
router.get('/:contactUsername', authMiddleware, async (req, res, next) => {
  try {
    const userId = req.userId;
    const { contactUsername } = req.params;

    // Fetch messages from the database
    const messages = await Message.findAll({
      where: {
        $or: [
          { senderId: userId, receiverUsername: contactUsername },
          { senderUsername: contactUsername, receiverId: userId },
        ],
      },
    });

    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
});

// Send a new message
router.post('/:contactUsername', authMiddleware, async (req, res, next) => {
  try {
    const userId = req.userId;
    const { contactUsername, content } = req.body;

    // Save the message to the database
    const newMessage = await Message.create({
      senderId: userId,
      senderUsername: req.username,
      receiverUsername: contactUsername,
      content,
    });

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
