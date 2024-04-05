const Sentiment = require('sentiment');
const sentiment = new Sentiment();

const getSentimentScore = (text) => {
  

 // Convert non-string or empty values to an empty string
 if (typeof text !== 'string' || !text) {
  text = '';
  }  
  const result = sentiment.analyze(text);
  return result.score; // The score is a number indicating positive or negative sentiment.
  
};

module.exports = getSentimentScore;
