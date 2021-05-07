<template>
    <div class="border-b border-gray-500 px-2 py-10">
        <!-- heading -->
        <h1 class="uppercase mb-5 text-yellow-500 text-lg font-semibold">
            Popular Movies
        </h1>

        <!-- movie item -->
        <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
        >
            <MovieItems
                v-for="movie in movies"
                :key="movie.id"
                :movie="movie"
                :genres="genres"
            />
        </div>
    </div>
</template>

<script>
import MovieItems from "./MovieItem";

export default {
    components: {
        MovieItems,
    },
    data() {
        return {
            movies: [],
            genres: [],
        };
    },
    mounted() {
        this.fetchMovies();
        this.fetchGenres();
    },
    methods: {
        async fetchMovies() {
            try {
                const response = await this.$http.get(
                    "https://api.themoviedb.org/3/movie/popular"
                );
                this.movies = response.data.results;
            } catch (error) {
                console.log(error);
            }
        },
        async fetchGenres() {
            try {
                const response = await this.$http.get(
                    "https://api.themoviedb.org/3/genre/movie/list"
                );
                this.genres = response.data.genres;
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style>
</style>