import axios from "axios";

const state = {
    movies: [],
    genres: [],
};

const getters = {
    movies: (state) => state.movies,
    genres: (state) => state.genres,
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
};

const mutations = {
    setMovies: (state, Movies) => (state.movies = Movies),
    setGenres: (state, Genres) => (state.genres = Genres),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
