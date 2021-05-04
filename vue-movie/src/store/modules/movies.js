import axios from "axios";

const state = {
    movies: [],
    genres: [],
    actors: [],
    movie: {
        credits: {
            crew: {},
        },
    },
    images: [],
};

const getters = {
    movies: (state) => state.movies,
    genres: (state) => state.genres,
    movie: (state) => state.movie,
    images: (state) => state.images,
    actors: (state) => state.actors,
};

const actions = {
    async fetchMovies({ commit }) {
        try {
            const response = await axios.get(
                "https://api.themoviedb.org/3/movie/popular"
            );
            commit("setMovies", response.data.results);
        } catch (error) {
            console.log(error);
        }
    },
    async fetchGenres({ commit }) {
        try {
            const response = await axios.get(
                "https://api.themoviedb.org/3/genre/movie/list"
            );
            commit("setGenres", response.data.genres);
        } catch (error) {
            console.log(error);
        }
    },
    async fetchActors({ commit }) {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/person/popular?page=1`
            );
            commit("setActors", response.data.results);
        } catch (error) {
            console.log(error);
        }
    },
    async fetchMovie({ commit }, movieId) {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=credits,videos`
        );
        const images = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/images`
        );
        commit("fetchMovie", response.data);
        commit("fetchImage", images.data.backdrops);
    },
};

const mutations = {
    setMovies: (state, Movies) => (state.movies = Movies),
    setGenres: (state, Genres) => (state.genres = Genres),
    fetchMovie: (state, Movie) => (state.movie = Movie),
    fetchImage: (state, Image) => (state.images = Image),
    setActors: (state, Actors) => (state.actors = Actors),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
