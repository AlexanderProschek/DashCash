const User = require('../models/users');

module.exports = {

    login: async (req, res, next) => {
        const { user, password } = req.body;
        if(User.find({ userName: user })) {
            return res.status(406).json({ message: "Username already exists" });
        }

        req.body['token'] = Math.random().toString(36).substr(2)+Math.random().toString(36).substr(2);
        const newUser = new User(req.body);
        const user = await newUser.save();
        res.status(201).json(user);
    }
};