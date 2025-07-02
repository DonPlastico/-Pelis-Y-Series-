const API_KEY = '7ee7a6fd34df964084ea1a98761a819e';
const BASE_URL = 'https://api.themoviedb.org/3';

const LOAD_DELAY_MS = 1000;

let currentPage = 1;
let currentQuery = '';
let isLoading = false;
const MOVIES_PER_LOAD = 50;
const API_PAGE_SIZE = 20;

const resultsDiv = document.getElementById('results');
const loadingIndicator = document.getElementById('loading');

document.addEventListener('DOMContentLoaded', () => {
    fetchMoviesInitialLoad();
    setupInfiniteScroll();
});

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value;
    if (query) {
        currentQuery = query;
        currentPage = 1;
        searchMovies(query, true);
    } else {
        currentQuery = '';
        currentPage = 1;
        fetchMoviesInitialLoad();
    }
});

async function fetchMoviesInitialLoad() {
    resultsDiv.innerHTML = '';
    currentPage = 1;
    await loadMoreContent();
}

function setupInfiniteScroll() {
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !isLoading) {
            loadMoreContent();
        }
    });
}

async function loadMoreContent() {
    if (isLoading) return;
    isLoading = true;
    loadingIndicator.style.display = 'flex';

    const fetchedMovies = [];
    const numApiPagesToFetch = Math.ceil(MOVIES_PER_LOAD / API_PAGE_SIZE);

    for (let i = 0; i < numApiPagesToFetch; i++) {
        const pageToFetch = currentPage + i;
        let data = [];
        if (currentQuery) {
            data = await fetchApiPage(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${currentQuery}&language=es&page=${pageToFetch}`);
        } else {
            data = await fetchApiPage(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es&page=${pageToFetch}`);
        }
        if (data && data.results) {
            fetchedMovies.push(...data.results);
        } else {
            break;
        }
    }

    setTimeout(() => {
        displayMovies(fetchedMovies);
        currentPage += numApiPagesToFetch;

        loadingIndicator.style.display = 'none';
        isLoading = false;

        if (document.body.offsetHeight < window.innerHeight && fetchedMovies.length > 0) {
            loadMoreContent();
        }
    }, LOAD_DELAY_MS);
}

async function fetchApiPage(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching API page:", error);
        return null;
    }
}

function displayMovies(movies) {
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/200x300?text=Póster+No+Disponible'">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>⭐ ${movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}/10</p>
                <p>${movie.release_date ? movie.release_date.split('-')[0] : 'Año desconocido'}</p>
            </div>
        `;
        resultsDiv.appendChild(movieCard);
    });
}

async function searchMovies(query, clearResults) {
    if (clearResults) {
        resultsDiv.innerHTML = '';
        currentPage = 1;
    }
    await loadMoreContent();
}