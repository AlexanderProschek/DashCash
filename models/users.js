const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: {
        type: String,
    },
    lname: {
        type: String,
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
    },
    elo: {
        type: Number,
        default: 100
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
        default: 0
    },
    progress: {
        type: Number,
        default: 0
    },
    token: {
        type: String,
    }
});

// Create a model
const User = mongoose.model('user', userSchema);

// Export the model
module.exports = User;  