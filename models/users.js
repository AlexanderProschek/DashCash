// Necessary imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Start of the schema
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