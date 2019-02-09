const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    memebers: [{

    }],
    pool: {
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
        default: Date.parse(Date.getDa)
    }
});

// Create a model
const Group = mongoose.model('user', userSchema);

// Export the model
module.exports = Group;  