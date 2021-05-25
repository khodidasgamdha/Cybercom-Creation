<template>
    <div>

        <!-- logged user data -->
        <!-- <p>{{ user }}</p> -->

        <!-- image slider -->
        <div class="mb-5">
            <v-carousel hide-delimiters>
                <v-carousel-item
                    v-for="(banner, i) in banners"
                    :key="i"
                    :src="banner.src"
                ></v-carousel-item>
            </v-carousel>
        </div>

        <!-- deals of the day -->
        <div class="ml-10 mr-10">
            <v-card class="rounded-0 mt-10" elevation="5">

                <!-- name, time, viewall -->
                <div class="row mx-5 py-5">
                    <h2>Deals of the Day</h2>
                    
                    <p class="pl-5 pt-2 mb-0 heading">
                        <v-icon>mdi-clock</v-icon>
                        {{timestamp}} Left
                    </p>

                    <v-btn color="primary" class="rounded-0 ml-auto">View all</v-btn>
                </div>
                <v-divider></v-divider>

                <!-- slider -->
                <v-slide-group v-model="model">
                    <v-slide-item v-for="prod in product" :key="prod.name">
                        <v-card class="ma-4" :to="prod.path">
                            <img
                                :src="prod.src"
                                :alt="prod.name"
                                max-height="220"
                                width="200"
                            />
                            <v-card-text class="text-center"><b>{{ prod.name }}</b></v-card-text>
                        </v-card>
                    </v-slide-item>
                </v-slide-group>
            </v-card>
        </div>

        <!-- Recently Viewed -->
        <div class="ml-10 mr-10">
            <v-card class="rounded-0 mt-10" elevation="5">

                <!-- name -->
                <div class="row mx-5 py-5">
                    <h2>Recently Viewed</h2>
                    <v-btn color="primary" class="rounded-0 ml-auto">View all</v-btn>
                </div>
                <v-divider></v-divider>

                <!-- products -->
                <div class="row mt-5">
                    <ProductItem
                        v-for="product in products"
                        :key="product.id"
                        :product="product"
                    />
                </div>
            </v-card>
        </div>

    </div>
</template>

<script>
import ProductItem from '../components/ProductItem'
import { mapGetters } from 'vuex'

export default {
    components: {
        ProductItem,
    },
    data: () => ({
        model: null,
        timestamp: '',
        banners: [
            { src: 'https://www.theindianwire.com/wp-content/uploads/2019/01/Flipkart-New-Logo.jpg' },
            { src: 'http://www.allininfosystems.com/wp-content/uploads/2020/02/banner.jpg' },
            { src: 'https://i.pinimg.com/originals/37/e9/e0/37e9e012b6e0f2a3edf47438f066958d.jpg' },
            { src: 'https://androidjunglee.com/wp-content/uploads/2015/06/big-app-shoppings-android-phones.jpg' },
        ],
        product: [
            {
                name: 'Headphones',
                src: 'https://rukminim1.flixcart.com/image/150/150/kfbfr0w0-0/headphone/w/d/q/b120-truke-original-imafvtf3cyrgfqmk.jpeg?q=70',
            },
            {
                name: 'Sport toys',
                src: 'https://rukminim1.flixcart.com/image/150/150/k0flmkw0/remote-control-toy/g/e/x/big-and-mean-rock-crawling-1-20-scale-modified-off-road-hummer-original-imafk84ffnngkutk.jpeg?q=70',
            },
            {
                name: 'Skybags',
                src: 'https://rukminim1.flixcart.com/flap/150/150/image/74bc985c62f19245.jpeg?q=70',
            },
            {
                name: 'Fitness Essentails',
                src: 'https://rukminim1.flixcart.com/image/150/150/jmgmmq80/skipping-rope/w/h/x/skipping-rope-basic-black-2-8-m-fksb-ad-sr-1-flipkart-smartbuy-original-imaf9d2hefkfwg6m.jpeg?q=70',
            },
            {
                name: 'Bedsheets',
                src: 'https://rukminim1.flixcart.com/image/150/150/kgtqhe80-0/bedsheet/f/h/3/red-11066-flat-chhavi-india-original-imafwzc6tgdpdfng.jpeg?q=70',
            },
            {
                name: 'Irons',
                src: 'https://rukminim1.flixcart.com/image/150/150/k6fd47k0pkrrdj/iron-refurbished/g/x/s/a-ultra-light-weight-qualx-original-imafk8t4fvuhqbdc.jpeg?q=70',
            },
            {
                name: 'Webcams',
                src: 'https://rukminim1.flixcart.com/image/150/150/ja73ki80/webcam/pc-webcam/7/q/e/logitech-c310-original-imaeztzqny7jh7gh.jpeg?q=70',
            },
        ],
    }),
    computed: mapGetters('products', ['products']),
    created() {
        setInterval(this.getNow, 1000);
    },
    mounted() {
        this.$store.dispatch('products/getProducts', {
            category: 'fashion',
            subCategory: 'clothing',
        })
    },
    methods: {
        getNow() {
            const today = new Date();
            this.timestamp = today.getHours() + " : " + today.getMinutes() + " : " + today.getSeconds();
        }
    }
}
</script>

<style>
</style>