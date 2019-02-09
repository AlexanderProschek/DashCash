const User = require('../models/users');
const Group = require('../models/groups');

module.exports = {

    get: async (req, res, next) => {
        const users = await User.find({});
        res.status(200).json(users);
    },

    post: async (req, res, next) => {
        const newUser = new User(req.body);
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
    },

    join: async (req, res, next) => {
        const { groupId , userName } = req.params;
        const qUser = await User.findOne({userName: userName});
        const group = await Group.updateOne(
            {
                _id: groupId
            },
            {
                $push: {members: qUser._id}
            });
        res.status(201).json({ action: "Done" });
    },

    getGroup: async (req, res, next) => {
        const { userName } = req.params;
        const u = await User.findOne({ userName: userName });
        const allGroups = await Group.find({});
        allGroups.forEach(e => {
            e.members.forEach(ee => {
                if(ee.equals(u._id)) {
                    console.log("TT");
                    return res.status(200).json({ "_id": e._id });
                }
            });
        });
        res.status(404).json({ error: "Did not find a group" });
    }
};