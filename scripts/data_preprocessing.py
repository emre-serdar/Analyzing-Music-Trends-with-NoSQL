#  run:
#     python data_preprocessing.py

import pandas as pd
import re

def clean_text(text):
    # Remove special characters and convert text to lowercase
    text = re.sub(r'\W+', ' ', text)
    text = text.lower()
    return text

def preprocess_data(file_path):
    # Load the CSV file
    data = pd.read_csv(file_path)

    # Handling missing values
    data['Description'].fillna('No description', inplace=True)
    numerical_columns = data.select_dtypes(include=['float64', 'int64']).columns
    data[numerical_columns] = data[numerical_columns].apply(lambda x: x.fillna(x.median()), axis=0)

    # Text cleaning for the 'Description' column
    data['Description'] = data['Description'].apply(clean_text)

    return data

if __name__ == "__main__":
    # Update this path to the path of your raw data file
    file_path = '../data/raw_data/Spotify_Youtube.csv'
    
    # Preprocess the data
    cleaned_data = preprocess_data(file_path)
    
    # Save the cleaned data
    cleaned_data.to_csv('../data/processed_data/cleaned_data.csv', index=False)
