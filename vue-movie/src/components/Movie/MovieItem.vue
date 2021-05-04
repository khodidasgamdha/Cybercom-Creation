<template>
    <div>

        <!-- movie image -->
        <router-link :to='`/movie/${movie.id}`'>
            <img
                :src="movieImage"
                :alt="movie.title"
                class="hover:opacity-50 transition easy-in-out duration-250"
            />
        </router-link>

        <!-- movie details -->
        <h3>
            {{ movie.title }} <br /> 
            {{ movie.vote_average }} &#11088; | {{ movie.release_date }} <br />
            <span class="text-sm text-gray-500">
                <span v-for="(genre, index) in movie.genre_ids" :key="genre">
                    {{ genreTypeName(genre, index) }}
                </span>
            </span>
        </h3>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            required: true
        },
        genres: {
            required: true
        }
    },
    computed: {
        movieImage() {
            return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
        }
    },
    methods: {
        genreTypeName(id, index) {
            for(const item of this.genres) {
                if(item.id == id) {
                    if(this.movie.genre_ids.length -1 == index) {
                        return item.name;
                    } else {
                        return `${item.name}, `
                    }
                }
            }
        }
    }
};
</script>

<style>
</style>