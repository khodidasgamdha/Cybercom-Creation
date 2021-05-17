<template>
    <div>
        <!-- image slider -->
        <div class="mb-10">
            <!-- <h1 class="text-center display-4">Welcome to NuxtZon</h1>
            <h2 class="text-center display-1 mt-10">It's Online Shopping Store</h2>
            <p>{{ user }}</p> -->
            <v-carousel hide-delimiters>
                <v-carousel-item
                    v-for="(banner, i) in banners"
                    :key="i"
                    :src="banner.src"
                ></v-carousel-item>
            </v-carousel>
        </div>

        
        
    </div>
</template>

<script>

export default {
    data: () => ({
        model: null,
        banners: [
            { src: 'https://www.theindianwire.com/wp-content/uploads/2019/01/Flipkart-New-Logo.jpg' },
            { src: 'http://www.allininfosystems.com/wp-content/uploads/2020/02/banner.jpg' },
            { src: 'https://i.pinimg.com/originals/37/e9/e0/37e9e012b6e0f2a3edf47438f066958d.jpg' },
            { src: 'https://androidjunglee.com/wp-content/uploads/2015/06/big-app-shoppings-android-phones.jpg' },
        ],
    }),
}
</script>

<style>
</style>