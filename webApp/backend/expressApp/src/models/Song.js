// src/models/Song.js
const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  artist: String,
  spotifyUrl: String,
  track: String,
  album: String,
  albumType: String,
  uri: String,
  danceability: Number,
  energy: Number,
  key: Number,
  loudness: Number,
  speechiness: Number,
  acousticness: Number,
  instrumentalness: Number,
  sentimentScore: Number,
  liveness: Number,
  valence: Number,
  tempo: Number,
  durationMs: Number,
  youtubeUrl: String,
  youtubeTitle: String,
  youtubeChannel: String,
  youtubeViews: Number,
  youtubeLikes: Number,
  youtubeComments: Number,
  description: String,
  licensed: Boolean,
  officialVideo: Boolean,
  streamCount: Number
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;

