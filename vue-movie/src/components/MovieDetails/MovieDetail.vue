<template>
    <div>
        <div class="flex mt-20 border-b border-gray-500">
            
            <!-- image -->
            <div>
                <img
                    :src="movieImage"
                    :alt="movie.title"
                    id="poster" />
            </div>

            <div class="ml-24">

                <!-- title -->
                <h1 class="text-4xl font-semibold">{{ movie.title }}</h1>
                
                <!-- tagline -->
                <span>{{ movie.tagline }}</span><br />
                
                <!-- vote-date-genres -->
                <span class="text-gray-500 text-sm">
                    {{ movie.vote_average }} &#11088;  || {{ movie.release_date }} || {{ movie.status }} <br /> 
                    <span v-for="(genre, index) in movie.genres" :key="genre.id">
                        {{ genre.name }}
                        <span v-if="movie.genres.length - 1 != index">,</span>
                    </span>
                </span>

                <!-- overview -->
                <p class="mt-5">{{ movie.overview }}</p>

                <!-- featuree cast -->
                <div class="mt-5">
                    <span class="text-xl font-semibold">Featured Cast</span>

                    <div class="flex">
                        <div v-for="(crew, index) in movie.credits.crew" :key="index">
                            <div class="flex flex-col mt-3 mr-16" v-if="crew.job == 'Director' || crew.job == 'Writer'">
                                <span>{{ crew.name }}</span>
                                <span class="text-gray-500">{{ crew.job }}</span>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- trailer-favorite button  -->
                <div class="mt-10 mb-10">
                    <a
                        @click.prevent="openTrailerModel"
                        target="blank"
                        class="rounded bg-yellow-500 px-5 py-3 text-black"
                    >
                        Play Trailer
                    </a>
                    <a
                        href="#"
                        class="rounded bg-yellow-500 px-5 py-3 text-black ml-5"
                    >
                        Favourite
                    </a>
                </div>
            </div>

        </div>
        <div>
            <Cast :casts="movie.credits.cast" />
            <Images :images="images" @onImageClick="showImageModel" />
            <Crew :crews="movie.credits.crew" />
            <Popup v-model="modelOpen" :mediaURL="mediaURL" :isVideo="isVideo" />
        </div>
    </div>
</template>

<script>
import Cast from "./Cast";
import Images from "./Images";
import Crew from "./Crew";
import Popup from "./Popup";

export default {
    components: {
        Cast,
        Images,
        Crew,
        Popup
    },
    data() {
        return {
            movie: {
                credits: {
                    crew: {}
                }
            },
            images: [],
            modelOpen: false,
            isVideo: false,
            mediaURL: ''
        }
    },
    watch: {
        "$route.params.id": {
            handler() {
                this.fetchMovie(this.$route.params.id);
            },
            immediate: true
        }
    },
    computed: {
        movieImage() {
            return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
        }
    },
    methods: {
        async fetchMovie(movieId) {
            const response = await this.$http.get(
                `/movie/${movieId}?append_to_response=credits,videos`
            )
            const images = await this.$http.get(
                `/movie/${movieId}/images`
            )
            this.movie = response.data;
            this.images = images.data.backdrops;
        },
        trailer() {
            if(!this.movie.videos) return;
            return (
                `https://www.youtube.com/embed/${this.movie.videos.results[0].key}`
            )
        },
        openTrailerModel() {
            this.mediaURL = this.trailer();
            this.isVideo = true;
            this.modelOpen = true;
        },
        openImageModel() {
            this.isVideo = false;
            this.modelOpen = true;
        },
        showImageModel(image) {
            this.mediaURL = image;
            this.isVideo = false;
            this.modelOpen = true;
        }
    }
};
</script>

<style>
</style>