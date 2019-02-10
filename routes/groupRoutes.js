const express = require('express');
//const router = express.Router();
const router = require('express-promise-router')();

//const { validateBody, schemas } = require('../helpers/routerHelpers');
const GroupController = require('../controllers/groups');

router.route('/')
    .get(GroupController.get)

router.route('/:groupId')
    .get(GroupController.getGroup);

router.route('/make')
    .post(GroupController.make);

router.route('/elo/:elo')
    .get(GroupController.getFittingGroups);

module.exports = router;