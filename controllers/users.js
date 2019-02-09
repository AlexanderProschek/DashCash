const User = require('../models/users');

module.exports = {
    get: async (req, res, next) => {
        User.find({}, (err, users) => {
            if(err) {
                next(err);
            }
            res.status(200).json(users);
        })
    }
};