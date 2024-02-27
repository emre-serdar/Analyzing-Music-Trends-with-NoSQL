from collections import Counter
import nltk
from nltk.corpus import stopwords
nltk.download('stopwords')

# Word Frequency in Descriptions
def get_most_common_words(text_column):
    text = ' '.join(text_column).split()
    text = [word for word in text if word not in stopwords.words('english')]
    return Counter(text).most_common(20)

most_common_words = get_most_common_words(cleaned_data['Description'])

# Display most common words
print(most_common_words)
