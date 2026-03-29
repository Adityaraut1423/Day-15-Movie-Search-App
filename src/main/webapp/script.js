const apiKey = "YOUR_API_KEY";

async function searchMovie() {
    const movieName = document.getElementById("movieInput").value;
    const movieDiv = document.getElementById("movie");

    if (movieName === "") {
        alert("Please enter a movie name");
        return;
    }

    movieDiv.innerHTML = "Loading...";

    try {
        const response = await fetch(
            `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`
        );
        const data = await response.json();

        if (data.Response === "False") {
            movieDiv.innerHTML = "❌ Movie not found";
            return;
        }

        movieDiv.innerHTML = `
            <img src="${data.Poster}">
            <h3>${data.Title}</h3>
            <p>📅 Year: ${data.Year}</p>
            <p>⭐ IMDb: ${data.imdbRating}</p>
            <p>🎭 Genre: ${data.Genre}</p>
        `;
    } catch (error) {
        movieDiv.innerHTML = "Error fetching movie data 😢";
    }
}
