<template>
    <div class="container mx-auto mt-10">
        <div class="row">
            <div class="col-md-5">
                <img :src="product.image_link" :alt="product.name" width="350" />
            </div>
            <div class="col-md-7 mt-5">
                <v-card class="mx-auto" flat>
                    <v-card-title class="display-1"
                        >{{ product.name }}</v-card-title
                    >
                    <v-card-text>
                        {{ product.brand }}
                        <span v-if="product.category">|| {{ product.category }}</span>
                        <span v-if="product.product_type">|| {{ product.product_type }}</span>
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
                        <div class="grey--text"> {{ product.rating }} - {{ product.id }} Review</div>
                    </div>

                    <v-card-subtitle class="headline mt-2 ml-2"
                        >$ {{ product.price }}</v-card-subtitle
                    >
                    <v-card-text class="ml-2">
                        <span class="subtitle-1">Avilable Offers</span> 
                        <p>Bank Offer : 5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</p>
                        <p>Bank Offer : 10% Off on Bank of Baroda Mastercard debit card first time transaction T&C</p>
                    </v-card-text>

                    <v-card-text class="ml-2"
                        >{{ product.description }}</v-card-text
                    >

                    <v-card-actions class="ml-5">
                        <v-btn class="primary col-md-6" text @click="addToCart(product)"> 
                            Add to Cart
                            <v-icon class="ml-2" dense>mdi-cart</v-icon> 
                        </v-btn>
                        <v-btn class="primary col-md-6" text> 
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
export default {
    data() {
        return {
            product: []
        }
    },
    async mounted() {
        try {
            const res = await this.$axios
                .get(
                    `http://makeup-api.herokuapp.com/api/v1/products/${this.$route.params.id}.json`
                )
            this.product = res.data;
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        addToCart(product) {
            this.$store.commit('cart/addItem', product)
        }
    }
}
</script>

<style>
</style>