<template>
    <div class="container my-10">
        <v-row class="justify-space-around">
            <v-col cols="auto">
                <img
                    src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/404_img_v2.png"
                    alt="404_image"
                />
            </v-col>
            <v-col cols="auto" class="error404 align-self-center">
                <h1 v-if="type === '404 Not Found'">404</h1>
                <h2 v-else>An error occurred</h2>
                <p class="headline missing">Oops something's missing...</p>
                <p class="body-1 font-weight-ragular">
                    The page you are looking for was removed, renamed, <br />
                    or might have never existed...
                </p>
                <v-btn class="orange darken-4" dark>
                    Go to Home Page
                    <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <v-divider class="my-10"></v-divider>

        <!-- shop by room -->
        <p class="headline font-weight-light">Shop by Room</p>
        <ImageSlider />

    </div>
</template>

<script>
import ImageSlider from './Home/ImageSlider.vue'

export default {
    components: {
        ImageSlider,
    },
    props: {
        type: { type: String, default: 'An error occurred' },
    },
}
</script>

<style>
.error404 h1, 
.error404 h2 {
    line-height: 150px;
    color: #005ccc;
    font-weight: 300;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.error404 h1 {
    font-size: 150px;
}
.error404 h2 {
    font-size: 100px;
}
.missing {
    color: #005ccc;
}
</style>