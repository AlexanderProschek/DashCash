const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    memebers: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    buyIn: {
        type: Number,
        default: 0
    },
    level: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    endDate: {
        type: Date,
        required: true,
        default: Date.parse(Date.now.getTime+7*24*60*60*1000)
    }
});

// Create a model
const Group = mongoose.model('group', groupSchema);

// Export the model
module.exports = Group;  