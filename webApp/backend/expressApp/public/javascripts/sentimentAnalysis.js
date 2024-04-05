// Fetch the data from the server
fetch('/songs')
  .then(response => response.json())
  .then(data => {
    // Prepare the data for the bubble chart
    const bubbleData = data.map(song => ({
      x: song.sentimentScore, // Sentiment Score for the x-axis
      y: song.Views,          // Views for the y-axis
      r: song.Likes / 1000000 // Likes for the bubble size (scaled down for visualization)
    }));

    // Get the context of the canvas element we want to select
    const ctx = document.getElementById('sentimentChart').getContext('2d');
    const sentimentChart = new Chart(ctx, {
      type: 'bubble', // Define the chart type
      data: {
        datasets: [{
          label: 'Songs',
          data: bubbleData,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
        }]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Sentiment Score'
            }
          },
          y: {
            title: {
              display: true,
              text: 'YouTube Views'
            },
            type: 'logarithmic' // Logarithmic scale can help visualize wide-ranging values
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                const data = context.raw;
                return [
                  `Sentiment Score: ${data.x}`,
                  `Views: ${data.y.toLocaleString()}`,
                  `Likes: ${(data.r * 1000000).toLocaleString()}`
                ];
              }
            }
          }
        }
      }
    });
  });
