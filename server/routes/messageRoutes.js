const express = require('express');
const messageController = require('../controllers/messageController');
const authenticationMiddleware = require('../middleware/authentication');

const router = express.Router();

router.get('/:contactUsername', authenticationMiddleware, messageController.getMessages);
router.post('/:contactUsername', authenticationMiddleware, messageController.sendMessage);

module.exports = router;
