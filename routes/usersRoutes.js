// Necesary imports
const express = require('express');
const router = require('express-promise-router')();

const UsersController = require('../controllers/users');

// Basic router
router.route('/')
    .get(UsersController.get)
    .post(UsersController.post);

// Route base on user name
router.route('/:userName')
    .get(UsersController.getUser);

// Route based on join activity
router.route('/join/')
    .post(UsersController.join);

// Route based on finding a group
router.route('/:userName/getGroup')
    .get(UsersController.getGroup);

// Route to get users by id
router.route('/getById/:id',)
    .get(UsersController.getById);

// Export this router
module.exports = router;