<template>
    <div class="px-2 py-10">

        <!-- heading -->
        <h1 class="uppercase mb-5 text-yellow-500 text-lg font-semibold">
            Popular Actors
        </h1>

        <!-- popular actor -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            <ActorItem
                v-for="actor in actors"
                :key="actor.id"
                :actor="actor" />
        </div>

        <!-- loading spinner -->
        <div class="flec justify-center">
            <div class="spinner"></div>
        </div>
        
    </div>
</template>

<script>
let currentPage = 1;

import ActorItem from './ActorItem'
import { mapGetters, mapActions } from 'vuex';

export default {
    components: {
        ActorItem
    },
    computed: mapGetters(['actors']),
    mounted() {
        this.fetchActors();
        this.scroll();
    },
    methods: {
        ...mapActions(['fetchActors']),
        scroll() {
            window.onscroll = () => {
                let bottomOfWindow = Math.round(document.documentElement.scrollTop) + window.innerHeight === document.documentElement.offsetHeight;
                if(bottomOfWindow) {
                    currentPage += 1;
                    this.fetchActors(currentPage += 1);
                }
            }
        }
    }
}
</script>

<style>
</style>