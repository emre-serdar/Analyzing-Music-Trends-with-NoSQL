// In correlationAnalysis.js
fetch('/songs')
    .then(response => response.json())
    .then(songs => {
        // Prepare the data for Views
        const scatterDataViews = songs.map(song => ({
            x: song.Danceability,
            y: song.Views
        }));

        // Prepare the data for Likes
        const scatterDataLikes = songs.map(song => ({
            x: song.Danceability,
            y: song.Likes
        }));

        // Get the context for the views chart
        const ctxViews = document.getElementById('viewsChart').getContext('2d');
        // Create the views chart
        const viewsChart = new Chart(ctxViews, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Danceability vs Views',
                    data: scatterDataViews,
                    backgroundColor: 'rgba(0, 123, 255, 0.5)'
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Get the context for the likes chart
        const ctxLikes = document.getElementById('likesChart').getContext('2d');
        // Create the likes chart
        const likesChart = new Chart(ctxLikes, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Danceability vs Likes',
                    data: scatterDataLikes,
                    backgroundColor: 'rgba(255, 159, 64, 0.5)'
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error fetching data:', error));
