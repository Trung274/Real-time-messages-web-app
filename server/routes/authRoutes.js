const express = require('express');
const authController = require('../controllers/authController');
const authenticationMiddleware = require('../middleware/authentication');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

// Example protected route using authentication middleware
router.get('/protected', authenticationMiddleware, (req, res) => {
  res.status(200).json({ message: 'Protected route accessed successfully', user: { id: req.userId, username: req.username } });
});

module.exports = router;
