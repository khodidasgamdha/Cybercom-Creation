<template>
    <div class="px-2 py-10">

        <!-- heading -->
        <h1 class="uppercase mb-5 text-yellow-500 text-lg font-semibold">
            UpComing Movies
        </h1>

        <!-- carousal -->
        <div id="example">
            <carousel-3d
                :controls-visible="true"
                :clickable="true"
                :controls-prev-html="'&#10092; '" 
                :controls-next-html="'&#10093;'" 
                :controls-width="30" 
                :controls-height="60"
                :key="upcomingMovies.length"
                :listDate="upcomingMovies"
                :height="500">
                <slide
                    :index="i"
                    :key="i"
                    v-for="(movie, i) in upcomingMovies">
                    <figure>
                        <router-link :to="`/movie/${movie.id}`">
                            <img
                                :src="movieImage(movie)"
                                :alt="movie.title"
                            />
                        </router-link>
                        <figcaption>
                            <span class="text-xl ">{{ movie.title }}</span><br/>
                            <span class="text-gray-400">{{ movie.overview }}</span>
                        </figcaption>
                    </figure>
                </slide>
            </carousel-3d>
        </div>
        
    </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
    components: {
        Carousel3d,
        Slide,
    },
    data() {
        return {
            upcomingMovies: [],
        };
    },
    mounted() {
        this.fetchUpcomingMovies();
    },
    methods: {
        async fetchUpcomingMovies() {
            const response = await this.$http.get(
                "http://api.themoviedb.org/3/movie/upcoming"
            );
            this.upcomingMovies = response.data.results;
        },
        movieImage(movie) {
            return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        }
    },
};
</script>

<style>
.carousel-3d-container figure {
    margin: 0;
}
.carousel-3d-container figcaption {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    bottom: 0;
    position: absolute;
    bottom: 0;
    padding: 15px;
    font-size: 12px;
    min-width: 100%;
    box-sizing: border-box;
}
.next span,
.prev span {
    color: #fff;
}
</style>