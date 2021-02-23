const express = require('express');
const router = express.Router();
const sealsController = require('../controllers/seals');

router
  .route('/seals')
  .get(sealsController.getSeals)
  .post(sealsController.createSeal);

router
  .route('/seal/:sealid')
  .get(sealsController.getOneSeal)
  .put(sealsController.updateOneSeal)
  .delete(sealsController.deleteOneSeal);

module.exports = router;
