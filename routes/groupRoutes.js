const express = require('express');
//const router = express.Router();
const router = require('express-promise-router')();

//const { validateBody, schemas } = require('../helpers/routerHelpers');
const UsersController = require('../controllers/groups');

router.route('/')
    .get(UsersController.get)

router.route('/:groupId')
    .get(UsersController.getUser);

module.exports = router;