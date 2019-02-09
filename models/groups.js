const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    // Fill in schema
});

// Create a model
const Group = mongoose.model('user', userSchema);

// Export the model
module.exports = Group;  