// config/db.js or database/db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/NoSQLProject', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('We are connected to MongoDB!');
});

module.exports = db;
