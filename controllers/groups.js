const User = required('../models/users');
const Group = require('../models/groups');

module.exports = {

    get: async (req, res, next) => {
        if(User.findOne({ token: req.query.token })){
            const allGroups = await Group.find({});
            res.status(200).json(allGroups);
        } else {
            res.status(401).json({ Message: "Unauthorized access"});
        }
    },

    /*post: async (req, res, next) => {
        const newUser = new User(req.body);
        console.log(newUser);
        const user = await newUser.save();
        res.status(201).json(user)
    }, */

    getGroup: async (req, res, next) => {
        if(User.findOne({ token: req.query.token })){
            const { groupId } = req.params;
            const group = await Group.find({ _id: groupId });
            if(group) {
                return res.status(200).json(group);
            }
            res.status(404).json({ error: "Group Not Found"});
        } else {
            res.status(401).json({ Message: "Unauthorized access"});
        }
    },

    make: async (req, res, next) => {
        if(User.findOne({ token: req.query.token })){
            const newGroup = new Group(req.body);
            const group = await newGroup.save();
            res.status(201).json(group);
        } else {
            res.status(401).json({ Message: "Unauthorized access"});
        }
    },

    getFittingGroups: async (req, res, next) => {
        const { elo } = req.params;
        const xlevelx = Math.floor(elo/200) > 12 ? 12 : Math.floor(elo/200);

        const groups = Group.find({ level: xlevelx });
        var ret = [];
        while(groups.length > 0) {
            var chunk = groups.pop();
            if(chunk.level == xlevelx) ret.push(chunk);
        }

        const options = [{m: 1, flag: false}, {m: 2*level, flag: false},
            {m: 5*level, flag: false}, {m: 8*level, flag: false},
            {m: 10*level, flag: false}];

        ret.forEach(g => {
            options.forEach(o => {
                if(g.buyIn == o.m) o.flag = true;
            });
        });

        var d = new Date();
        var c = new Date();
        c.setHours(24,0,0,0);
        const start = d.getTime() + (7-d.getDay()) * 86400000 + (c.getTime() - new Date().getTime());
        const end = start + 518400000;

        options.forEach(o => {
            if(!o.flag) {
                const newGroup = new Group({
                    level: xlevelx,
                    buyIn: o.m,
                    startDate: start,
                    endDate: end
                });
            }
        })
    }
};