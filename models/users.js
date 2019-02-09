const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    elo: {
        type: Number,
        requierd: true,
        // Ask Sai about elo
        default: 800
    },
    dateSignedUp: {
        type: Date,
        default: Date.now()
    },
    picture: {
        // Maybe add a default picture
        type: String
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    },
    currentGroup: {
        type: Schema.Types.ObjectI
    }
});

// Create a model
const User = mongoose.model('user', userSchema);

// Export the model
module.exports = User;