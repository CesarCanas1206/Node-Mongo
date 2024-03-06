const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const userValidator = require('../middleware/schemaValidators/userValidator');

router.post(
    '/signup',
    userValidator.addUser,
    userController.addUser
);

module.exports = router;