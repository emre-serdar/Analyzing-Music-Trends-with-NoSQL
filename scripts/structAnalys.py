import matplotlib.pyplot as plt
import seaborn as sns

# Histograms for numerical attributes
cleaned_data[['Danceability', 'Energy', 'Views', 'Likes']].hist(bins=15, figsize=(15, 6), layout=(2, 2))

# Correlation heatmap
plt.figure(figsize=(10, 8))
sns.heatmap(cleaned_data[['Danceability', 'Energy', 'Views', 'Likes']].corr(), annot=True, fmt=".2f")
plt.show()
