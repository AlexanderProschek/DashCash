// Necessary imports
const express = require('express');
const router = require('express-promise-router')();

const GroupController = require('../controllers/groups');

// Basic router
router.route('/')
    .get(GroupController.get)

// Route by groupId
router.route('/:groupId')
    .get(GroupController.getGroup);

// Route by make
router.route('/make')
    .post(GroupController.make);

// Route by elo
router.route('/elo/:elo')
    .get(GroupController.getFittingGroups);

// Export this router
module.exports = router;