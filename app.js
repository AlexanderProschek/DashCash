// Necessary imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up the MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users');

// Create an instance of express
const app = express();

// Routes
const userRoutes = require('./routes/usersRoutes');
const groupRoutes = require('./routes/groupRoutes');
const authRoutes = require('./routes/authRoutes');
const payRoutes = require('./routes/payRoutes');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/groups', groupRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/pay', payRoutes);

// 404 Error Handler
app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
})

// Start the server
const port = process.env.PORT || 3000;
app.listen(port);