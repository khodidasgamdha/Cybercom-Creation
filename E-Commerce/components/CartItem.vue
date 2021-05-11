<template>
    <div class="container mx-auto row mt-10 mb-10">
        <v-card class="row" outlined>
            <div>
                <img
                    :src="product.image_link"
                    :alt="product.name"
                />
            </div>
            <div class="ml-10">
                <v-card-title>{{ product.name }}</v-card-title>

                <v-card-text>
                    {{ product.brand }}
                    <span v-if="product.category">|| {{ product.category }}</span>
                    <span v-if="product.product_type">|| {{ product.product_type }}</span>
                </v-card-text>

                <v-card-text>
                    <p>$ {{ product.price }}</p>
                    <v-btn class="mr-2" fab x-small color="primary">
                        <v-icon dark> mdi-minus </v-icon>
                    </v-btn>
                    <span class="subtitle-1">1</span>
                    <v-btn class="mx-2" fab x-small color="primary">
                        <v-icon dark> mdi-plus </v-icon>
                    </v-btn>
                </v-card-text>

                <v-card-actions class="row ml-2 mb-2">
                    <v-btn text class="primary" small @click="removeItem(product)"> Remove </v-btn>
                    <v-btn text class="primary" small> Place Order </v-btn>
                </v-card-actions>
            </div>
        </v-card>
        <div class="col-md-4">hi</div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            required: true,
        },
    },
    methods: {
        removeItem(product) {
            this.$store.commit('cart/removeItem', product)
        }
    }
}
</script>

<style>
</style>