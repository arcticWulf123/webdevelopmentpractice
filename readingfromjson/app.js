const state = {
    movies: [],       // filled by fetch()
    searchTerm: "",   // updated by the search input
};

async function loadMovies() {
    const response = await fetch("data.json");
    const data = await response.json();
    state.movies = data;
    render();
}

function getVisibleMovies() {
    return state.movies.filter((movie) => {
        return movie.title.toLowerCase().includes(state.searchTerm.toLowerCase());
    });
}

document.getElementById("searchInput").addEventListener("input", (event) => {
    state.searchTerm = event.target.value;
    render();
});

function render() {
    const visibleMovies = getVisibleMovies();
    const movieGrid = document.getElementById("movieGrid");

    movieGrid.innerHTML = visibleMovies
        .map((movie) => `
            <div class="card">
                <h3>${movie.title}</h3>
                <p>${movie.genre} — ${movie.year}</p>
            </div>
        `)
        .join("");
}

loadMovies();