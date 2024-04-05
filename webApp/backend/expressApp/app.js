const express = require('express');
const app = express();
const db = require('./database/db'); // This is assuming you have a db.js for your database connection logic

// Require the songs and popularityAnalysis routers
const songsRouter = require('./routes/songs'); // The path should be relative to the location of this app.js file
const popularityAnalysisRouter = require('./routes/popularity');

app.use(express.json()); // for parsing application/json

// Use the songs router
app.use('/songs', songsRouter);

// Use the popularityAnalysis router
app.use('/popularity', popularityAnalysisRouter);

app.use(express.static('public'));


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
