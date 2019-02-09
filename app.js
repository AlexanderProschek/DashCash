const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users');

const app = express();

// Routes
const userRoutes = require('./routes/usersRoutes');
const groupRoutes = require('./routes/groupRoutes');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
//app.use('/groups', groupRoutes);

// 404 Error Handler
app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
})

// Start the server
const port = process.env.PORT || 3000;
app.listen(port);