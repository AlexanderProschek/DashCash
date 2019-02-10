// Import model schemas
const User = require('../models/users');
const Group = require('../models/groups');

// Defines the characteristics of the /group/... uRIs have
module.exports = {

    // Returns all groups that are or will be active
    get: async (req, res, next) => {
        const allGroups = await Group.find({});
        res.status(200).json(allGroups);
    },

    // returns a specific group based on a give group id
    getGroup: async (req, res, next) => {
        const { groupId } = req.params;
        const group = await Group.find({ _id: groupId });
        // Check if a group was found
        if(group) {
            return res.status(200).json(group);
        }
        res.status(404).json({ error: "Group Not Found"});
    },

    // Make a new group based on 
    make: async (req, res, next) => {
        const newGroup = new Group(req.body);
        const group = await newGroup.save();
        res.status(201).json(group);
    },

    // Returns a list of groups based on the current elo rating of a user
    getFittingGroups: async (req, res, next) => {
        const { elo } = req.params;
        // Calculate the level the user is supposed to be in
        const xlevelx = Math.floor(elo/200) > 12 ? 12 : Math.floor(elo/200);

        const groups = await Group.find({ level: xlevelx });
        var ret = [];

        while(groups.length > 0) {
            var chunk = groups.pop();
            if(chunk.level == xlevelx) ret.push(chunk);
        }

        // Check if all classes of options are represented
        const options = [{m: 1, flag: false}, {m: 2*xlevelx, flag: false},
            {m: 5*xlevelx, flag: false}, {m: 8*xlevelx, flag: false},
            {m: 10*xlevelx, flag: false}];

        ret.forEach(g => {
            options.forEach(o => {
                if(g.buyIn == o.m) {
                    o.flag = true;
                }
            });
        });

        // Set the date range for the upcoming events
        var d = new Date();
        var c = new Date();
        c.setHours(24,0,0,0);
        const start = new Date(d.getTime() + (7-((d.getDay()+7)%8)) * 86400000 + (c.getTime() - new Date().getTime())).getTime();
        const end = start + 518400000;

        // Make the new needed groups
        options.forEach(o => {
            if(!o.flag) {
                const newGroup = new Group({
                    level: xlevelx,
                    buyIn: o.m,
                    startDate: start,
                    endDate: end
                });
                ret.push(newGroup);
            }
        });

        res.status(200).json(ret);
    }
};