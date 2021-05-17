<template>
    <div>
        <div class="mb-10">
            <v-carousel hide-delimiters>
                <v-carousel-item
                    v-for="(banner, i) in banners"
                    :key="i"
                    :src="banner.src"
                ></v-carousel-item>
            </v-carousel>
        </div>
        <div class="container mx-auto row">
            <ProductItem
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </div>
    </div>
</template>

<script>
import ProductItem from '../../../../components/ProductItem'
import { mapGetters } from 'vuex'

export default {
    components: {
        ProductItem
    },
    data: () => ({
        banners: [
            { src: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/PostMayArt/AF_Header/AF-PC.jpg' },
            { src: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/MSD/CatPage/PC_header_01.jpg' },
            { src: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Laptops/D23372801_IN_PC_Laptops-Intel-Bundle_1500x300_2-revised.jpg' },
        ],
    }),
    computed: mapGetters('products', ['products']),    
    mounted() {
        this.$store.dispatch('products/getProducts', {
            category: location.pathname.split('/')[2], 
            subCategory: this.$route.params.id
        })
    },
}
</script>

<style>
</style>