const router = require('express').Router;
//const auth = require('../controllers/auth');

// Routh the /auth path
modules.exports = {
    router.route()
    .get((req, res, next) => {
        res.status(200).json({ code: "Good"});
    })
    .post((req, res, next) => {
        res.status(200).json({ code: "Good2"});
    });
};