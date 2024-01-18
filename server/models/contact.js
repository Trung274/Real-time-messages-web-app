const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Contact = sequelize.define('Contact', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  contactUsername: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Contact;
