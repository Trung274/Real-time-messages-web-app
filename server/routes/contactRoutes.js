const express = require('express');
const contactController = require('../controllers/contactController');
const authenticationMiddleware = require('../middleware/authentication');

const router = express.Router();

router.get('/', authenticationMiddleware, contactController.getContacts);
router.post('/', authenticationMiddleware, contactController.addContact);

module.exports = router;
