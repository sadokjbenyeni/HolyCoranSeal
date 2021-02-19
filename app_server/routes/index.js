const express = require('express');
const router = express.Router();
const mainController = require('../controllers/homepage');

router.get('/', mainController.sealsList);
router.get('/', mainController.sealDetails);
router.post('/', mainController.createNewSeal);
module.exports = router;
