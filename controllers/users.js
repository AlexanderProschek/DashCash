const User = require('../models/users');

module.exports = {

    get: async (req, res, next) => {
        const users = await User.find({});
        console.log(users);
        res.status(200).json(users);
    },

    post: async (req, res, next) => {
        const newUser = new User(req.body);
        console.log(newUser);
        const user = await newUser.save();
        res.status(201).json(user);
    },

    getUser: async (req, res, next) => {
        const { userName } = req.params;
        const user = await User.find({ userName: userName });
        if(user) {
            return res.status(200).json(user[0]);
        }
        res.status(404).json({ error: "User Not Found"});
    }
};