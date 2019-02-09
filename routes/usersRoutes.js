const express = require('express');
//const router = express.Router();
const router = require('express-promise-router')();

//const { validateBody, schemas } = require('../helpers/routerHelpers');
const UsersController = require('../controllers/users');

router.route('/')
    .get(UsersController.get)
    .post(UsersController.post);

router.route('/:userName')
    .get(UsersController.getUser);

module.exports = router;