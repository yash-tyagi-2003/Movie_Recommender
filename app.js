function getRecommendations() {
    const movieTitle = document.getElementById('movieInput').value;

    fetch("http://127.0.0.1:5000/recommend", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'movie_title': movieTitle
        })
    })
    .then(response => response.json())
    .then(data => {
        const recommendations = data.recommendations;
        const recommendationsDiv = document.getElementById('recommendations');
        recommendationsDiv.innerHTML = '<h2>Recommended Movies:</h2>';

        recommendations.forEach(movie => {
            const movieTitle = movie.title;
            const movieImage = movie.poster_path;

            recommendationsDiv.innerHTML += `
                <div class="movie">
                    <a href="https://www.google.com/search?q=${movieTitle}"><img src="https://image.tmdb.org/t/p/w500${movieImage}" alt="${movieTitle}" /></a>
                    <p>${movieTitle}</p>
                </div>`;
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
