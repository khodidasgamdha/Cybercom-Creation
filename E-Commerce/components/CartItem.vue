<template>
    <v-card max-height="300px" class="mb-5" elevation="5">
        <div class="row">
            <!-- image -->
            <div class="col-sm-3">
                <n-link :to="`products/${item.product.category}/${item.product.subCategory}/${item.product.id}`">
                    <img width="180px" :src="item.product.img" :alt="item.product.name" />
                </n-link>
            </div>

            <!-- name & description -->
            <div class="col-sm-8 ml-10">
                <v-card-title>{{ item.product.name }}</v-card-title>
                <v-card-text>
                    <strong>Brand :</strong> {{ item.product.brandName }}<br />
                    <strong>Category :</strong> {{ item.product.category }}<br />
                    <strong>Sub Category :</strong>{{ item.product.subCategory }}
                    <p class="mt-5">
                        <span><b>Total =</b> &#x20B9; {{ Math.round(item.quantity * item.product.price * 100) / 100}}</span>
                        <span class="ml-2"><del>&#x20B9; {{ Math.round(((item.quantity * item.product.price) + (item.quantity * item.product.price/10)) * 100 ) / 100}}</del></span>
                        <span id="grn" class="ml-2">10 % Off</span>
                    </p>
                </v-card-text>
                <v-card-actions class="row ml-2 mb-2">
                    <v-btn class="mr-2" fab x-small color="indigo lighten-4" @click="decrementProd(item.product)">
                        <v-icon dark> mdi-minus </v-icon>
                    </v-btn>
                    <span class="subtitle-1 quantity">{{ item.quantity }}</span>
                    <v-btn
                        class="mx-2"
                        fab
                        x-small
                        color="indigo lighten-4"
                        @click="addToCart(item.product)"
                    >
                        <v-icon dark> mdi-plus </v-icon>
                    </v-btn>
                    <v-btn
                        text
                        class="primary"
                        small
                        @click="removeItem(item.product)"
                    >
                        Remove
                    </v-btn>
                    <v-btn text class="primary" small> Place Order </v-btn>
                </v-card-actions>
            </div>
        </div>

        
    </v-card>
</template>

<script>
export default {
    props: {
        item: {
            required: true,
        },
    },
    methods: {
        addToCart(product) {
            this.$store.commit('cart/addToCart', product)
        },
        decrementProd(product) {
            this.$store.commit('cart/decrementQuantity', product)
        },
        removeItem(product) {
            this.$store.commit('cart/removeItem', product)
        },
    },
}
</script>

<style>
.quantity {
    border: 1px solid black;
    padding: 0 15px;
}
#id {
    color: green;
}
</style>