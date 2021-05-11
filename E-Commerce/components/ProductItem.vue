<template>
    <v-card class="col-md-3 mx-auto mb-10" max-width="280" elevation="5">

        <!-- image -->
        <n-link :to='`/products/${product.id}`'>
            <v-img
                height="250"
                :src="product.image_link"
            ></v-img>
        </n-link>

        <!-- title & price -->
        <div class="mt-1">
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle class="subtitle-1">$ {{ product.price }}</v-card-subtitle>
        </div>

        <!-- review and actions -->
        <div class="row mb-1">
            <div>
                <v-card-text>
                    <v-row align="center" class="mx-0">
                        <v-rating
                            :value="product.rating"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="12"
                        ></v-rating>
                        <div class="grey--text ml-2">
                            {{ product.rating }} 
                            <span v-if="product.rating">({{ product.id }})</span>
                            <span v-else>(0)</span>
                        </div>
                    </v-row>
                </v-card-text>
            </div>

            <!-- cart & favorite -->
            <div class="ml-auto">
                <v-card-actions class="mr-3">
                        <v-icon class="mr-3" color="dark" dense>mdi-heart</v-icon>
                        <v-icon color="dark" dense @click="addToCart(product)">mdi-cart</v-icon>
                </v-card-actions>
            </div>
        </div>

    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        product: {
            required: true
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