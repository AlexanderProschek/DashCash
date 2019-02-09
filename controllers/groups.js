const Group = require('../models/groups');

module.exports = {

    get: async (req, res, next) => {
        const allGroups = await Group.find({});
        res.status(200).json(allGroups);
    },

    /*post: async (req, res, next) => {
        const newUser = new User(req.body);
        console.log(newUser);
        const user = await newUser.save();
        res.status(201).json(user)
    }, */

    getUser: async (req, res, next) => {
        const { groupId } = req.params;
        const group = await Group.findById({ groupId });
        if(group) {
            return res.status(200).json(group);
        }
        res.status(404).json({ error: "Group Not Found"});
    },

    make: async (req, res, next) => {
        const { level } = req.body;
        const newGroup = await new Group({
            level: level
        });
        res.status(201).json(newGroup);
    }

   /* getFittingGroups: async (req, res, next) => {
        const { elo } = req.params;
        const level = Math.floor(elo/200) > 12 ? 12 : Math.floor(elo/200);
        const groups = Group.find({ level : level, members: { $not: { $size: 10 }}});
        if(groups.length == 0) {
            const buyIn = 1 + 3 * level;
            const newGroup = new Group({
                level: level,
                buyIn: buyIn,
                startDate: ,
                endDate
            });
        }
    }*/
};