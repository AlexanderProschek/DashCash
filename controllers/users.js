// Necessary imports
const User = require('../models/users');
const Group = require('../models/groups');

module.exports = {

    // Get all users in the database
    get: async (req, res, next) => {
        const users = await User.find({});
        res.status(200).json(users);
    },

    // Get a user by his ID
    getById: async (req, res, next) => {
        const users = await User.findById(req.params.id)
        res.status(200).json(users);
    },

    // Create a new user object
    post: async (req, res, next) => {
        const newUser = new User(req.body);
        const user = await newUser.save();
        res.status(201).json(user);
    },

    // Get the object for a specific user
    getUser: async (req, res, next) => {
        const { userName } = req.params;
        const user = await User.findOne({ userName: userName });
        if(user) {
            return res.status(200).json(user);
        }
        res.status(404).json({ error: "User Not Found"});
    },

    // Make a specific user join a specific group
    join: async (req, res, next) => {
        const { groupId , userName } = req.body;
        console.log(groupId);
        console.log(userName);
        const qUser = await User.findOne({userName: userName});
        const group = await Group.updateOne(
            { _id: groupId },
            { $push: {members: qUser._id} });
        res.status(201).json({ action: "Done" });
        res.status(401).json({ Message: "Unauthorized access"});
    },

    // The the group object that the specified user is in
    getGroup: async (req, res, next) => {
        const { userName } = req.params;
        const tempUser = await User.findOne({ userName: userName });
        if(tempUser){
            const allGroups = await Group.find({});
            allGroups.forEach(e => {
                e.members.forEach(ee => {
                    if(ee.equals(tempUser._id)) {
                        return res.status(200).json(e);
                    }
                });
            });
        }
        
        res.status(404).json({ error: "Did not find a group" });
    }
};