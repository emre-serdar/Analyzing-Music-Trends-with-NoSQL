const express = require('express');
const router = express.Router();
const Song = require('../src/models/Song');
const calculateCorrelation = require('../utils/PopularityAnalysis');

router.get('/', async (req, res) => {
    try {
        const songs = await Song.find().lean(); // Using .lean() to get plain JavaScript objects

        // Extract 'Danceability' and 'Views' from each song
        const danceabilityArray = songs.map(song => song.Danceability);
        const viewsArray = songs.map(song => song.Views);

        // Calculate the correlation
        const correlation = calculateCorrelation(danceabilityArray, viewsArray);
        res.json({ correlation });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
