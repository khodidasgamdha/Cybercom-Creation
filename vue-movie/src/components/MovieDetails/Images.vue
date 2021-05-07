<template>
    <div class="container mx-auto border-b border-gray-500 px-4 py-4">
        <h2 class="text-4xl font-semibold mb-5">Images</h2>

        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 flex flex-col">
            <div v-for="(image, index) in images" :key="index">
                <img 
                    @click="openImageModel(image)"
                    :src="Image(image)" 
                    alt="movieImage" 
                    class="hover:opacity-50 transition easy-in-out duration-250" />
                <span class="text-gray-400">{{ Math.round(image.vote_average, 2) }} &#11088;</span> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        images: {
            required: true
        }
    },
    methods: {
        openImageModel(image) {
            let imagePath = '';
            if(image.file_path) {
                imagePath = `https://image.tmdb.org/t/p/w500/${image.file_path}`
            } else {
                imagePath = 'https://via.placeholder.com/280x158'
            }
            this.$emit('onImageClick', imagePath)
        },
        Image(image) {
            return `https://image.tmdb.org/t/p/w500/${image.file_path}`
        }
    }
};
</script>

<style>
</style>