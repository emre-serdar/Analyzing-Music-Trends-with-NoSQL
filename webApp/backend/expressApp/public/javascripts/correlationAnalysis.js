fetch('/popularity')
  .then(response => response.json())
  .then(data => {
    const correlationDiv = document.getElementById('correlationResult');
    const correlationValue = data.correlation.toFixed(2);
    const interpretation = correlationValue >= 0.5 ? 'strong positive correlation' : correlationValue <= -0.5 ? 'strong negative correlation' : 'weak or no correlation';
    correlationDiv.innerHTML = `<p>Correlation between Danceability and Views: ${correlationValue} (${interpretation})</p>`;
  });
