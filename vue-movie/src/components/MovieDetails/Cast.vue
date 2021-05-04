<template>    
    <div class="container mx-auto border-b border-gray-500 px-4 py-4">
        <h2 class="text-4xl font-semibold mb-5">Cast</h2>

        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-5 flex flex-col">
            <div v-for="(cast, index) in casts" :key="index" class="mx-auto">
                <router-link :to="{name: 'actor-details', params:{id: cast.id}}">
                <img
                    :src="castProfile(cast)"
                    :alt="cast.name"
                    class="hover:opacity-50 transition easy-in-out duration-250 w-48"
                />
                </router-link>
                <span>Name:
                    <span class="text-gray-400">{{ cast.name }}</span>
                </span><br />
                <span>Character: 
                    <span class="text-gray-400">{{ cast.character }}</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        casts: {
            required: true,
        }
    },
    methods: {
        castProfile(cast) {
            if(cast.profile_path) {
                return `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
            } else {
                return 'https://via.placeholder.com/192x288'
            }
        },
    }
};
</script>

<style>
</style>