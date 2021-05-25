<template>
    <div>

        <!-- carousal -->
        <div class="mb-10">
            <v-carousel hide-delimiters>
                <v-carousel-item
                    v-for="(banner, i) in banners"
                    :key="i"
                    :src="banner.src"
                ></v-carousel-item>
            </v-carousel>
        </div>

        <div class="row">

            <!-- filter -->
            <div id="filter">
                <Filters />
            </div>

            <div class="container">

                <!-- sort -->
                <div class="row">
                    <div class="mr-5 mt-3">
                        <b>Sort by :</b>
                    </div>
                    <div>    
                        <v-tabs>
                            <v-tab>Popularity</v-tab>
                            <v-tab>Price -- Low to High</v-tab>
                            <v-tab>Price -- High to Low</v-tab>
                            <v-tab>Newest First</v-tab>
                        </v-tabs>
                    </div>
                </div>
                
                <!-- products -->
                <div class="row mt-7">
                    <ProductItem
                        v-for="product in products"
                        :key="product.id"
                        :product="product"
                    />
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import Filters from '../../../../components/Filters'
import ProductItem from '../../../../components/ProductItem'
import { mapGetters } from 'vuex'

export default {
    components: {
        Filters,
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
            subCategory: this.$route.params.subCategory
        })
    },
}
</script>

<style>
#filter {
    width: 300px;
}
</style>