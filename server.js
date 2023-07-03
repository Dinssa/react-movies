const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config(); // Load environment variables from .env file

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico'))); // Serve favicon
app.use(express.static(path.join(__dirname, 'build'))); // Serve static files from the React app

// Put API routes here, before the "catch all" route
// we'll use a route prefix of /api for all of our routes
app.get('/api', (req, res) => {
    res.send('Hello from API route');
});

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

 // Configure to use port 3001 instead of 3000 during
 // development to avoid collision with React's dev server
const port = process.env.SERVER_PORT || 4001; // Set port

app.listen(port, () => console.log(`Listening on port ${port}`)); // Start server

