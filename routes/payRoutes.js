// Neccesary imports
const express = require('express');
const router = require('express-promise-router')();

const PayController = require('../controllers/pay');

// Base router
router.route('/')
    .post(PayController.pay);

// Router to successful transactions
router.route('/success')
    .get(PayController.success);

// Export this router
module.exports = router;