# Correlating Sentiment and Popularity in Music Data

## Overview
This project explores the intricate relationship between the sentiment of music data and its popularity, utilizing NoSQL databases and data science techniques. By analyzing sentiment scores derived from song descriptions against YouTube views and likes, we aim to uncover patterns that provide deeper insights into what contributes to a song's success or failure.

## Team Members
- Emre Serdar

## Objectives
The primary goal is to dissect the complex interplay between a song's perceived sentiment and its popularity metrics (YouTube views and likes), to determine any existing correlations. Additionally, we seek to explore whether a song's inherent characteristics, such as danceability, are reliable indicators of its popularity.

## Methodology
- **Data Acquisition and Cleaning**: Utilized Python for data manipulation, focusing on removing duplicates, filling missing values, and normalizing data formats.
- **Data Storage**: Leveraged MongoDB for its flexibility with large volumes of unstructured data and robust querying capabilities.
- **Sentiment Analysis**: Applied sentiment analysis on song descriptions to calculate sentiment scores.
- **Data Visualization**: Employed JavaScript and Node.js for data analysis and visualization, creating a bubble chart for sentiment analysis and scatter plots for popularity analysis.
- **API Endpoint Creation**: Developed Express.js routes to serve API endpoints for real-time data retrieval and chart rendering.

## Project Outcome
The analysis revealed that higher sentiment scores do not necessarily correlate to a higher number of views or likes, indicating that sentiment alone isn't a strong predictor of a song's popularity. Moreover, a weak correlation between danceability and views was found, suggesting that while danceability may influence views, it is not a definitive indicator of popularity.


## References
- Pang B. & Lee L. (2008). Opinion mining and sentiment analysis.
- T. Li and M. Ogihara, "Music Data Mining: An Introduction", CRC Press, 2011.
- And other references as listed in the project report.

## License
This project is licensed under the [Apache-2.0 license](LICENSE).
