const express = require('express');
//const router = express.Router();
const router = require('express-promise-router')();

//const { validateBody, schemas } = require('../helpers/routerHelpers');
const AuthController = require('../controllers/auth');

router.route('/login')
    .post(AuthController.login);

module.exports = router;