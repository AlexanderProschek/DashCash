const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes


// Start the server
const port = process.env.PORT || 3000;
app.listen(port);