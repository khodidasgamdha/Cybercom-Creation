<template>
    <div class="container mx-auto px-2 py-10">

        <!-- details -->
        <div class="border-b border-gray-500 pb-10">

            <!-- image & details -->
            <div class="flex">

                <!-- image -->
                <img
                    :src="actorImage"
                    :alt="actor.name" />

                <!-- details -->
                <div class="ml-20">

                    <!-- name -->
                    <h2 class="text-4xl font-semibold">
                        {{ actor.name }}
                    </h2>

                    <div class="mt-5">
                        <!-- popularity -->
                        <p class="text-gray-400">{{ Math.round(actor.popularity/10) }} &#11088; </p>
                        
                        <!-- dob -->
                        <p class="mt-2">DOB : 
                            <span class="text-gray-400">{{ actor.birthday }}</span>
                        </p>

                        <!-- death -->
                        <p class="mt-2" v-if="actor.deathday">Death : 
                            <span class="text-gray-400">{{ actor.deathday }}</span>
                        </p>

                        <!-- birth place -->
                        <p class="mt-2">Birth Place : 
                            <span class="text-gray-400">{{ actor.place_of_birth }}</span>
                        </p>
                    </div>

                    <!-- social media account -->
                    <ul class="flex items-cnter mt-5">
                        <li>
                            <a href="">F</a>
                        </li>
                        <li>
                            <a href="">Insta</a>
                        </li>
                        <li>
                            <a href="">Twitter</a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                    </ul>

                </div>
            </div>

            <!-- overview -->
            <div>
                <p class="text-gray mt-8">
                    {{ actor.biography }}
                </p>
            </div>

        </div>

        <!-- known for -->
        <h2 class="mt-5 text-3xl font-semibold">Known For</h2>
        <div class="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            <div v-for="movie in knownFor" :key="movie.id">
                <router-link :to="`/movie/${movie.id}`">
                    <img
                        :src="posterPath(movie)"
                        alt="poster"
                        class="hover:opacity-75 transition ease-in-out duration-250 mt-1"
                    />
                </router-link>
                <h3 class="text-gray-400">
                    <p class="text-white">{{ movie.title }}</p>
                    <p class="text-sm">{{ movie.vote_average }} &#11088; | {{ movie.release_date }}</p>
                </h3>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            socialMediaItems: [],
            actor: {},
            knownFor: [],
        };
    },
    computed: {
        actorImage() {
            return `https://image.tmdb.org/t/p/w300/${this.actor.profile_path}`
        }
    },
    mounted() {
        this.fetchActor(this.$route.params.id);
        this.fetchActorKnown(this.$route.params.id);
    },
    methods: {
        async fetchActor(id) {
            const response = await this.$http.get(
                `https://api.themoviedb.org/3/person/${id}`
            );
            this.actor = response.data;
        },
        async fetchActorKnown(id) {
            const response = await this.$http.get(
                `https://api.themoviedb.org/3/person/${id}/credits`
            );
            this.knownFor = response.data.cast;
        },
        posterPath(movie) {
            if (movie.poster_path) {
                return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            } else {
                return "https://via.placeholder.com/197x295";
            }
        },
    },
};
</script>

<style>
</style>