<template>
    <div class="container mx-auto mt-10">

        <!-- if products in cart -->
        <div class="row" v-if="cartQuantities > 0">

            <!-- products -->
            <div class="col-md-9">
                <p class="headline">My Cart ({{ cartQuantities }} items)</p>
                <CartItem
                    v-for="item in cartItems"
                    :key="item.product.id"
                    :item="item"
                />
            </div>

            <!-- prices -->
            <div class="col-md-3 mt-9">
                <v-card elevation="2">
                    <v-card-title class="headline">Price Details</v-card-title>
                    <v-divider></v-divider>

                    <!-- pricing -->
                    <v-card-text class="row mx-auto">
                        <div>
                            <p class="subtitle-1">
                                Price ({{ cartQuantities }} items)
                            </p>
                            <p class="subtitle-1">Discount (10% Off)</p>
                            <p class="subtitle-1">Delivery Charges</p>
                        </div>
                        <div class="ml-auto">
                            <p class="subtitle-1">
                                &#x20B9; {{ Math.round(cartTotal * 100) / 100 }}
                            </p>
                            <p class="subtitle-1" id="grn">
                                - &#x20B9; {{ Math.round(cartTotal * 10) / 100 }}
                            </p>
                            <p class="subtitle-1" id="grn">Free</p>
                        </div>
                    </v-card-text>
                    <v-divider></v-divider>
                    
                    <!-- total amount -->
                    <v-card-title class="row mx-auto">
                        <span>Total Amount</span>
                        <span class="ml-auto">&#x20B9; {{Math.round((cartTotal - cartTotal / 10) * 100) / 100}}</span>
                    </v-card-title>
                    <v-divider></v-divider>
                    
                    <!-- saved money -->
                    <v-card-text>
                        <span class="subtitle-1" id="grn"
                            >You will save &#x20B9; {{ Math.round(cartTotal * 10) / 100 }} on this order</span>
                    </v-card-text>

                </v-card>
            </div>
        </div>

        <!-- if not products in cart -->
        <div v-else id="noProduct">
            <h1 class="text-center display-3">Oops, Your Cart is empty</h1>
            <h2 class="text-center headline mt-10">
                Add Products to Cart for Shopping
            </h2>
            <n-link id="addProduct" to="/products"> 
                <v-btn class="mt-10" color="primary" dark>
                    Add Product 
                </v-btn>
            </n-link>
        </div>

    </div>
</template>

<script>
import CartItem from '../../components/CartItem'
import { mapGetters } from 'vuex'

export default {
    components: {
        CartItem,
    },
    computed: mapGetters('cart', ['cartItems', 'cartQuantities', 'cartTotal']),
}
</script>

<style>
#grn {
    color: green;
    font-weight: bold;
}
#noProduct {
    color: #606060;
}
#addProduct {
    margin-left: 500px;
}
</style>