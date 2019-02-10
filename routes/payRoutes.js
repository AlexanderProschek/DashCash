const express = require('express');
//const router = express.Router();
const router = require('express-promise-router')();

//const { validateBody, schemas } = require('../helpers/routerHelpers');
const PayController = require('../controllers/pay');

router.route('/')
    .post(PayController.pay);

router.route('/success')
    .get(PayController.success);

router.route('/cancel')
    .get(PayController.cancel);

module.exports = router;