const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users');

const app = express();  

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/users', require('./routes/usersRoutes'));
app.use('images', express.static(__dirname + '/images'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening on port ${port}`);