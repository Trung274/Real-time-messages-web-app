const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/user');

const authenticationMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, config.jwtSecret);

    // Find the user associated with the token
    const user = await User.findOne({
      where: { id: decoded.userId },
    });

    if (!user) {
      throw new Error();
    }

    req.userId = user.id;
    req.username = user.username;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate.' });
  }
};

module.exports = authenticationMiddleware;
