/* =========================================================
   STREAMFLIX
   Vanilla JavaScript
   ========================================================= */


/* =========================================================
   MOVIE DATA
   ========================================================= */

const movies = [
    {
        id: 1,
        title: "The Last Horizon",
        genre: "Sci-Fi",
        rating: "8.7",
        year: "2026",
        duration: "2h 18m",
        image:
            "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=80",
        description:
            "When humanity's final colony loses contact with Earth, a fearless explorer begins a journey beyond the known frontier to uncover a secret that could change civilization forever."
    },

    {
        id: 2,
        title: "Midnight Protocol",
        genre: "Thriller",
        rating: "8.4",
        year: "2025",
        duration: "1h 58m",
        image:
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80",
        description:
            "A cybersecurity analyst discovers a hidden protocol buried inside a global network and must race against time before the system goes completely dark."
    },

    {
        id: 3,
        title: "Neon City",
        genre: "Crime",
        rating: "8.1",
        year: "2025",
        duration: "2h 05m",
        image:
            "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=80",
        description:
            "In a city controlled by corporations, a detective follows a mysterious trail that leads into the most powerful underground organization."
    },

    {
        id: 4,
        title: "Ocean Deep",
        genre: "Adventure",
        rating: "8.6",
        year: "2026",
        duration: "2h 10m",
        image:
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=700&q=80",
        description:
            "A team of marine researchers travels into unexplored waters and discovers evidence of an extraordinary underwater civilization."
    },

    {
        id: 5,
        title: "Silent Code",
        genre: "Mystery",
        rating: "8.3",
        year: "2024",
        duration: "1h 52m",
        image:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=700&q=80",
        description:
            "A software engineer receives an encrypted message that appears to have been written by someone who disappeared ten years ago."
    },

    {
        id: 6,
        title: "After Tomorrow",
        genre: "Drama",
        rating: "8.9",
        year: "2026",
        duration: "2h 22m",
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=80",
        description:
            "After an unexpected event changes everything, three strangers discover that their futures are connected in ways they never imagined."
    },

    {
        id: 7,
        title: "Red Planet",
        genre: "Sci-Fi",
        rating: "8.5",
        year: "2025",
        duration: "2h 15m",
        image:
            "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=700&q=80",
        description:
            "The first generation born on Mars faces a difficult decision when a mysterious signal arrives from deep space."
    },

    {
        id: 8,
        title: "The Forgotten Road",
        genre: "Drama",
        rating: "7.9",
        year: "2024",
        duration: "1h 48m",
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
        description:
            "A photographer returns to her hometown and discovers an old road that brings back memories she thought she had forgotten."
    },

    {
        id: 9,
        title: "Black Signal",
        genre: "Action",
        rating: "8.2",
        year: "2025",
        duration: "2h 01m",
        image:
            "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=80",
        description:
            "An intelligence agent intercepts a mysterious signal and uncovers an international operation hidden in plain sight."
    },

    {
        id: 10,
        title: "Beyond Earth",
        genre: "Adventure",
        rating: "8.8",
        year: "2026",
        duration: "2h 27m",
        image:
            "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=700&q=80",
        description:
            "A pioneering crew begins humanity's most ambitious mission and discovers something impossible beyond the edge of the solar system."
    },

    {
        id: 11,
        title: "Digital Shadows",
        genre: "Thriller",
        rating: "8.0",
        year: "2025",
        duration: "1h 55m",
        image:
            "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=700&q=80",
        description:
            "A digital investigator discovers that someone has been manipulating the world's most secure systems."
    },

    {
        id: 12,
        title: "Winter Lights",
        genre: "Romance",
        rating: "8.1",
        year: "2024",
        duration: "1h 50m",
        image:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=700&q=80",
        description:
            "Two strangers meet during a winter festival and discover that their separate journeys may have brought them together."
    }
];


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const trendingMovies = document.getElementById("trendingMovies");
const popularMovies = document.getElementById("popularMovies");
const recommendedMovies = document.getElementById("recommendedMovies");
const myListMovies = document.getElementById("myListMovies");

const movieModal = document.getElementById("movieModal");
const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalYear = document.getElementById("modalYear");
const modalDuration = document.getElementById("modalDuration");
const modalRating = document.getElementById("modalRating");
const modalGenre = document.getElementById("modalGenre");
const modalDescription = document.getElementById("modalDescription");

const modalPlay = document.getElementById("modalPlay");
const modalList = document.getElementById("modalList");

const searchInput = document.getElementById("searchInput");
const searchToggle = document.getElementById("searchToggle");
const searchContainer = document.querySelector(".search-container");

const searchResultsSection =
    document.getElementById("searchResultsSection");

const searchResults =
    document.getElementById("searchResults");

const noSearchResults =
    document.getElementById("noSearchResults");

const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

const popularPrev = document.getElementById("popularPrev");
const popularNext = document.getElementById("popularNext");

const emptyMyList = document.getElementById("emptyMyList");

const heroPlay = document.getElementById("heroPlay");
const heroInfo = document.getElementById("heroInfo");

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");


/* =========================================================
   APPLICATION STATE
   ========================================================= */

let selectedMovie = null;

let myList = JSON.parse(
    localStorage.getItem("streamflixMyList")
) || [];


/* =========================================================
   CREATE MOVIE CARD
   ========================================================= */

function createMovieCard(movie) {

    const card = document.createElement("article");

    card.className = "movie-card";

    card.dataset.movieId = movie.id;

    card.innerHTML = `
        <div class="card-image">
            <img
                class="poster"
                src="${movie.image}"
                alt="${movie.title} poster"
                loading="lazy"
            >

            <div class="card-overlay">
                <span class="play-circle">▶</span>
            </div>
        </div>

        <div class="card-info">

            <h3 class="card-title">
                ${movie.title}
            </h3>

            <div class="card-meta">

                <span class="rating">
                    ⭐ ${movie.rating}
                </span>

                <span>
                    ${movie.genre}
                </span>

                <span>
                    ${movie.year}
                </span>

            </div>

        </div>
    `;

    card.addEventListener("click", () => {
        openMovieModal(movie);
    });

    return card;
}


/* =========================================================
   RENDER MOVIES
   ========================================================= */

function renderTrending() {

    trendingMovies.innerHTML = "";

    movies
        .slice(0, 7)
        .forEach(movie => {
            trendingMovies.appendChild(
                createMovieCard(movie)
            );
        });
}


function renderPopular() {

    popularMovies.innerHTML = "";

    movies
        .slice(3, 10)
        .forEach(movie => {
            popularMovies.appendChild(
                createMovieCard(movie)
            );
        });
}


function renderRecommended() {

    recommendedMovies.innerHTML = "";

    movies
        .slice(0, 12)
        .forEach(movie => {
            recommendedMovies.appendChild(
                createMovieCard(movie)
            );
        });
}


/* =========================================================
   CONTINUE WATCHING
   ========================================================= */

const continueWatching = [
    {
        title: "Stranger Things",
        episode: "S02 E04 • The Lost Signal",
        progress: 72,
        remaining: "18 min remaining",
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "The Silent Code",
        episode: "S01 E06 • Hidden Layer",
        progress: 46,
        remaining: "31 min remaining",
        image:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "Ocean Deep",
        episode: "Episode 03 • Into the Abyss",
        progress: 82,
        remaining: "9 min remaining",
        image:
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80"
    },

    {
        title: "Red Planet",
        episode: "S01 E02 • New World",
        progress: 35,
        remaining: "44 min remaining",
        image:
            "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=900&q=80"
    }
];


function renderContinueWatching() {

    const container =
        document.getElementById("continueWatching");

    container.innerHTML = "";

    continueWatching.forEach(item => {

        const card = document.createElement("article");

        card.className = "continue-card";

        card.innerHTML = `
            <div class="continue-image">

                <img
                    src="${item.image}"
                    alt="${item.title}"
                    loading="lazy"
                >

                <span class="continue-play">
                    ▶
                </span>

            </div>

            <div class="continue-info">

                <h3 class="continue-title">
                    ${item.title}
                </h3>

                <p class="episode">
                    ${item.episode}
                </p>

                <div class="progress-track">

                    <div
                        class="progress-bar"
                        style="width: ${item.progress}%"
                    ></div>

                </div>

                <p class="remaining">
                    ${item.remaining}
                </p>

            </div>
        `;

        container.appendChild(card);
    });
}


/* =========================================================
   OPEN MOVIE MODAL
   ========================================================= */

function openMovieModal(movie) {

    selectedMovie = movie;

    modalImage.src = movie.image;
    modalImage.alt = movie.title;

    modalTitle.textContent = movie.title;
    modalYear.textContent = movie.year;
    modalDuration.textContent = movie.duration;
    modalRating.textContent = `⭐ ${movie.rating}`;
    modalGenre.textContent = movie.genre;

    modalDescription.textContent =
        movie.description;

    updateModalListButton();

    movieModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* =========================================================
   CLOSE MOVIE MODAL
   ========================================================= */

function closeMovieModal() {

    movieModal.classList.remove("active");

    document.body.style.overflow = "";
}


/* =========================================================
   MODAL LIST BUTTON
   ========================================================= */

function updateModalListButton() {

    if (!selectedMovie) {
        return;
    }

    const exists =
        myList.includes(selectedMovie.id);

    if (exists) {

        modalList.textContent =
            "✓ Added to My List";

        modalList.classList.add("added");

    } else {

        modalList.textContent =
            "+ Add to My List";

        modalList.classList.remove("added");
    }
}


/* =========================================================
   MY LIST
   ========================================================= */

function toggleMyList(movie) {

    const movieIndex =
        myList.indexOf(movie.id);

    if (movieIndex === -1) {

        myList.push(movie.id);

        showToast(
            `${movie.title} added to My List`
        );

    } else {

        myList.splice(movieIndex, 1);

        showToast(
            `${movie.title} removed from My List`
        );
    }

    saveMyList();

    renderMyList();

    updateModalListButton();
}


/* =========================================================
   SAVE MY LIST
   ========================================================= */

function saveMyList() {

    localStorage.setItem(
        "streamflixMyList",
        JSON.stringify(myList)
    );
}


/* =========================================================
   RENDER MY LIST
   ========================================================= */

function renderMyList() {

    myListMovies.innerHTML = "";

    const selectedMovies = movies.filter(movie =>
        myList.includes(movie.id)
    );

    if (selectedMovies.length === 0) {

        emptyMyList.style.display = "block";

        return;
    }

    emptyMyList.style.display = "none";

    selectedMovies.forEach(movie => {

        myListMovies.appendChild(
            createMovieCard(movie)
        );
    });
}


/* =========================================================
   SEARCH
   ========================================================= */

function performSearch(query) {

    const searchTerm =
        query.trim().toLowerCase();

    if (!searchTerm) {

        searchResultsSection.classList.remove(
            "visible"
        );

        return;
    }

    const results =
        movies.filter(movie => {

            return (
                movie.title
                    .toLowerCase()
                    .includes(searchTerm) ||

                movie.genre
                    .toLowerCase()
                    .includes(searchTerm) ||

                movie.year
                    .includes(searchTerm)
            );
        });

    searchResultsSection.classList.add(
        "visible"
    );

    searchResults.innerHTML = "";

    if (results.length === 0) {

        noSearchResults.classList.add(
            "visible"
        );

        return;
    }

    noSearchResults.classList.remove(
        "visible"
    );

    results.forEach(movie => {

        searchResults.appendChild(
            createMovieCard(movie)
        );
    });
}


/* =========================================================
   SEARCH EVENTS
   ========================================================= */

searchToggle.addEventListener("click", () => {

    searchContainer.classList.toggle("active");

    if (
        searchContainer.classList.contains("active")
    ) {
        searchInput.focus();
    } else {
        searchInput.value = "";

        performSearch("");
    }
});


searchInput.addEventListener("input", event => {

    performSearch(event.target.value);
});


/* =========================================================
   CAROUSEL
   ========================================================= */

popularNext.addEventListener("click", () => {

    popularMovies.scrollBy({
        left: 500,
        behavior: "smooth"
    });
});


popularPrev.addEventListener("click", () => {

    popularMovies.scrollBy({
        left: -500,
        behavior: "smooth"
    });
});


/* =========================================================
   MODAL EVENTS
   ========================================================= */

modalClose.addEventListener(
    "click",
    closeMovieModal
);


movieModal.addEventListener("click", event => {

    if (event.target === movieModal) {

        closeMovieModal();
    }
});


document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        movieModal.classList.contains("active")
    ) {

        closeMovieModal();
    }
});


/* =========================================================
   MODAL PLAY
   ========================================================= */

modalPlay.addEventListener("click", () => {

    if (!selectedMovie) {
        return;
    }

    showToast(
        `Playing ${selectedMovie.title}`
    );

    closeMovieModal();
});


/* =========================================================
   MODAL MY LIST
   ========================================================= */

modalList.addEventListener("click", () => {

    if (!selectedMovie) {
        return;
    }

    toggleMyList(selectedMovie);
});


/* =========================================================
   HERO PLAY
   ========================================================= */

heroPlay.addEventListener("click", () => {

    const heroMovie = movies[0];

    showToast(
        `Playing ${heroMovie.title}`
    );
});


/* =========================================================
   HERO INFO
   ========================================================= */

heroInfo.addEventListener("click", () => {

    openMovieModal(movies[0]);
});


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

menuButton.addEventListener("click", () => {

    mobileNav.classList.toggle("active");
});


document.querySelectorAll(".mobile-nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove(
                "active"
            );
        });
    });


/* =========================================================
   TOAST
   ========================================================= */

let toastTimeout;

function showToast(message) {

    toastMessage.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}


/* =========================================================
   INITIALIZE APPLICATION
   ========================================================= */

function initializeApp() {

    renderTrending();

    renderPopular();

    renderRecommended();

    renderContinueWatching();

    renderMyList();
}


initializeApp();