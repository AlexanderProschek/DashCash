const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    buyIn: {
        type: Number,
        default: 0
    },
    level: {
        type: Number,
        default: 0
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: new Date((new Date().getTime())+7*24*60*60*1000)
    }
});

// Create a model
const Group = mongoose.model('group', groupSchema);

// Export the model
module.exports = Group;  