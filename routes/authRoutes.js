// Necesary imports
const express = require('express');
const router = require('express-promise-router')();

const AuthController = require('../controllers/auth');

// Athentification router
router.route('/login')
    .post(AuthController.login);

// Export this router
module.exports = router;