// routes/songs.js

const express = require('express');
const router = express.Router();
const Song = require('../src/models/Song');
const getSentimentScore = require('../utils/SentimentAnalysis');

// GET all songs with sentiment scores
router.get('/', async (req, res) => {
  try {
    const songs = await Song.find().lean(); // Using .lean() to get plain JavaScript objects
    const songsWithSentiment = songs.map(song => {
      let sentimentScore = 0; // Default score
      if (song.Description) {
        sentimentScore = getSentimentScore(song.Description);
      }
      return { ...song, sentimentScore };
    });
    res.json(songsWithSentiment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
