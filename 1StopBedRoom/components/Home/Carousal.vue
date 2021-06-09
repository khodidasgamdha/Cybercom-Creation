  
<template>
    <v-carousel
        cycle
        hide-delimiter-background
        show-arrows-on-hover
        class="mt-n6"
    >
        <v-carousel-item v-for="(image, i) in images" :key="i">
            <v-img :src="image.imgUrl" :alt="image.alt" width="100%"></v-img>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    data() {
        return {
            images: [
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/media/bannerslider/m/e/memorialday_mattress_deck_240521.png',
                    alt: 'img1',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/media/bannerslider/m/e/memorialday_home_decktop_240521.png',
                    alt: 'img2',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/media/bannerslider/b/e/bedroomblowout_mainbnr_desk_120321.png',
                    alt: 'img3',
                },
            ],
        }
    },
}
</script>