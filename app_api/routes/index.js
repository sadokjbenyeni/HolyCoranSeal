const express = require('express');
const router = express.Router();
const sealsController = require('../controllers/seals');

router
  .route('/seals')
  .post(sealsController.createSeal)
  .get(sealsController.getSeals);

router
  .route('/seal/:sealid')
  .put(sealsController.updateOneSeal)
  .delete(sealsController.deleteOneSeal);

router
  .route('/seal')
  .get(sealsController.getOneSeal)
module.exports = router;
