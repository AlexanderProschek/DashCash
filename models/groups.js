// Necessary imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for a group object
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
    },
    endDate: {
        type: Date,
    }
});

// Create a model
const Group = mongoose.model('group', groupSchema);

// Export the model
module.exports = Group;  