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
//    .patch(UsersController.update);

router.route('/join/')
    .post(UsersController.join);

router.route('/:userName/getGroup')
    .get(UsersController.getGroup);

router.route('/getById/:id',)
    .get(UsersController.getById);

module.exports = router;