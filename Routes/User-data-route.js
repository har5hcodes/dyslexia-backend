const express = require('express');

const userDataController = require('../Controllers/User-data-controller')
const router = express.Router();

router.get('/:uid', userDataController.getUserDatabyId);

router.post('/register', userDataController.registerUser);

module.exports = router;
