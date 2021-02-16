const express = require('express');
const router = express.Router();
const mainController = require('../controllers/homepage');

router.get('/', mainController.homepage);

module.exports = router;
