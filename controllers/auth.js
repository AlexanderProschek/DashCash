// Necessary imports
const User = require('../models/users');

module.exports = {
    // Authentication function
    login: async (req, res, next) => {

        const { user, password } = req.body;
        const tempUser = await User.findOne({ $and: [{ userName: user }, { password: password }] });

        // Check is the combination of User/Password exists
        if(!tempUser) {
            return res.status(406).json({ message: "Username and password don't match!" });
        }

        // Generate a token and 
        const tokenIn = Math.random().toString(36).substr(2)+Math.random().toString(36).substr(2);

        // Save the token in the corresponding user object
        await User.updateOne({ $and: [{ userName: user }, { password: password }] },
            {$set: { 'token': tokenIn }});

        // Save the token in the local user JSON
        tempUser['token'] = tokenIn;

        // Send back the user object with the
        res.status(201).json(tempUser);
    }
};