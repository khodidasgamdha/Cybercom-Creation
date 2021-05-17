<template>
    <div class="container mx-auto mt-10">
        <div class="row">

            <!-- image -->
            <div class="mx-auto col-md-5 col-sm-12">
                <img
                    :src="product.img"
                    :alt="product.name"
                    width="350px"
                    max-height="500px"
                />
            </div>

            <!-- details -->
            <div class="col-md-7 mt-5">
                <v-card class="mx-auto" flat>
                    <v-card-title class="display-1">{{product.name}}</v-card-title>
                    
                    <v-card-text>
                        <strong>Brand :</strong> {{ product.brandName }}
                        <p>
                            <strong>Category :</strong>
                            {{ product.category }}
                        </p>
                        <p>
                            <strong>Sub Category :</strong>
                            {{ product.subCategory }}
                        </p>
                    </v-card-text>

                    <div class="row ml-5">
                        <v-rating
                            :value="product.rating"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="12"
                        ></v-rating>
                        <div class="grey--text">
                            &nbsp; {{ product.rating }} - 449 Reviews
                        </div>
                    </div>

                    <v-card-subtitle class="headline mt-2 ml-2">
                        <span>&#x20B9; {{ product.price}}</span>
                        <span class="ml-2"><del>&#x20B9; {{ Math.round(1*product.price + 1*product.price/10)}}</del></span>
                        <span id="grn" class="ml-2">10 % Off</span>
                    </v-card-subtitle>

                    <v-card-text class="ml-2">
                        <span class="subtitle-1">Avilable Offers</span>
                        <p>
                            Bank Offer : 5% Unlimited Cashback on Flipkart Axis
                            Bank Credit Card T&C
                        </p>
                        <p>
                            Bank Offer : 10% Off on Bank of Baroda Mastercard
                            debit card first time transaction T&C
                        </p>
                    </v-card-text>

                    <v-card-text class="ml-2">{{product.description}}</v-card-text>

                    <v-card-actions class="row justify-space-around">
                        <v-btn
                            class="primary col-sm-5 mt-1"
                            text
                            @click="addToCart(product)"
                        >
                            Add to Cart
                            <v-icon class="ml-2" dense>mdi-cart</v-icon>
                        </v-btn>
                        <v-btn 
                            class="primary col-sm-5 mt-1"
                            text
                            @click="addToCart(product)"
                        >
                            Buy Now
                            <v-icon class="ml-2" dense>mdi-cart</v-icon>
                        </v-btn>
                    </v-card-actions>
                    
                </v-card>
            </div>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters('products', ['product']),
    mounted() {
        this.$store.dispatch('products/productDetail', {
            category: location.pathname.split('/')[2], 
            subCategory: location.pathname.split('/')[3],
            id: this.$route.params.id
        })
    },
    methods: {
        addToCart(product) {
            this.$store.commit('cart/addToCart', product)
        },
    },
}
</script>

<style>
</style>