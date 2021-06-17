<template>
    <v-container>
        
        <!-- cart header -->
        <v-row class="mb-n6">
            <v-col>
                <p class="headline">
                    <span class="font-weight-bold">Your Cart</span> 
                    <span v-if="cartItems.length != 0">({{ cartQuantities }} items)</span>
                </p>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="3" v-if="cartItems.length != 0">
                <v-btn
                    class="text-capitalize orange darken-3 rounded-0"
                    large
                    block
                    dark
                    to="/customer/account/login"
                >
                    <v-icon class="mr-2">mdi-lock</v-icon>
                    Process to Checkout
                    <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <!-- if cart empty -->
        <v-card
            v-if="cartItems.length == 0"
            class="grey lighten-3 py-16 rounded-0 mb-10"
            flat
            align="center"
        >
            <img
                src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/empty_cart_icon.png?v8b6166cd"
                alt="cart"
            />
            <p class="headline font-weight-bold mt-5">
                Your Shopping Cart Is Empty
            </p>
            <p class="title font-weight-light">
                Missing products? Sign in to see your cart from a previous
                visit.
            </p>
            <v-row class="justify-center">
                <v-col md="3">
                    <v-btn
                        class="text-capitalize orange darken-2 rounded-xl"
                        large
                        block
                        dark
                        to="/customer/account/login"
                    >
                        Sign In
                    </v-btn>
                </v-col>
                <v-col md="3">
                    <v-btn
                        class="text-capitalize indigo darken-2 rounded-xl"
                        large
                        block
                        dark
                        to="/customer/account/create"
                    >
                        Create Account
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>

        <!-- if cart have products -->
        <div v-if="cartItems.length != 0">
            <!-- total -->
            <v-card  class="grey lighten-3 rounded-0 pl-10 mt-5" flat>
                <v-row>
                    <v-col cols="4">
                        <v-btn class="text-capitalize rounded-0" to="/">
                            Back to Shopping
                        </v-btn>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="3">
                        <p class="headline mb-0">Subtotal ${{ Math.round(cartTotal * 100) / 100 }}</p>
                    </v-col>
                </v-row>
            </v-card>
            

            <!-- products -->
            <div v-for="(item, i) in cartItems" :key="i">
                <p class="font-weight-bold my-6">Shipment {{ i+1 }} of {{ cartItems.length }} - {{ item.product.brand }}</p>
                <v-card class="grey lighten-3 rounded-0" flat>
                    <v-row>
                        <v-col cols="1" class="ml-5">
                            <img
                                :src="item.product.imageUrl"
                                :alt="item.product.title"
                                width="100"
                            />
                        </v-col>
                        <v-col cols="5" class="ml-5">
                            <p class="title font-weight-light mb-0">
                                {{ item.product.description }}
                            </p>
                            <p class="grey--text body-2 font-weight-light mb-1">
                                by {{ item.product.brand }}
                            </p>
                            <p class="body-2 mb-0">Set Includes</p>
                            <ul class="caption secondary--text">
                                <li>
                                    <v-row>
                                        <v-col cols="7">
                                            <p class="mb-n2">
                                                Lettner Light Gray Twin Storage
                                                Sleigh Bed
                                            </p>
                                        </v-col>
                                        <v-col cols="2">
                                            <p class="mb-n2">
                                                Qty: {{ item.quantity }}
                                            </p>
                                        </v-col>
                                        <v-col cols="2">
                                            <p class="mb-n2">
                                                {{ item.product.price }}
                                            </p>
                                        </v-col>
                                    </v-row>
                                </li>
                            </ul>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="2" class="mr-5">
                            <p class="headline">{{ item.product.price }}</p>
                            <v-select
                                :value="item.quantity"
                                :items="quantities"
                                outlined
                                dense
                                class="mt-n3"
                                @change="changeQuantity(item, $event)"
                            ></v-select>
                            <div class="mt-n5">
                                <v-icon color="primary">mdi-delete</v-icon>
                                <v-btn
                                    text
                                    class="
                                        ml-n3
                                        primary--text
                                        text-lowercase text-decoration-underline
                                    "
                                    @click="removeItem(item)"
                                    
                                    >remove</v-btn
                                >
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </div>

            <!-- final bill -->
            <v-card class="grey lighten-3 rounded-0 my-10" flat>
                <v-row class="mx-0">
                    <!-- quotas -->
                    <v-col md="6">
                        <!-- coupon code -->
                        <v-card class="pa-4 rounded-0" flat>
                            <v-row class="mb-n10 justify-space-around">
                                <v-col md="auto">
                                    <p class="mb-0 title">Coupon Code:</p>
                                </v-col>
                                <v-col md="6">
                                    <v-text-field
                                        label="Coupon Code"
                                        outlined
                                        dense
                                    ></v-text-field>
                                </v-col>
                                <v-col md="auto">
                                    <v-btn
                                        class="text-capitalize"
                                        outlined
                                        color="primary"
                                    >
                                        Add
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card>

                        <!-- quotas -->
                        <v-row class="mt-2 mb-n7">
                            <v-col cols="auto">
                                <v-icon class="mt-3">mdi-lock</v-icon>
                            </v-col>
                            <v-col>
                                <p class="subtitle-1 font-weight-bold mb-0">
                                    Secure Shopping
                                </p>
                                <p class="caption mb-0">
                                    Our checkout meets the highest SSL protocol
                                    level with 128-bit encryption.
                                </p>
                            </v-col>
                        </v-row>
                        <v-row class="mb-n7">
                            <v-col cols="auto">
                                <v-icon class="mt-3">mdi-eye-off</v-icon>
                            </v-col>
                            <v-col>
                                <p class="subtitle-1 font-weight-bold mb-0">
                                    Privacy Protection
                                </p>
                                <p class="caption mb-0">
                                    Your privacy is always our top priority.
                                </p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="auto">
                                <v-icon class="mt-3">mdi-cellphone-iphone</v-icon>
                            </v-col>
                            <v-col>
                                <p class="subtitle-1 font-weight-bold mb-0">
                                    Top Rated Customer Service
                                </p>
                                <p class="caption mb-0">
                                    Have questions about the products your buying?
                                    We're here to help!
                                </p>
                            </v-col>
                        </v-row>

                        <!-- call us -->
                        <a
                            v-if="!callUs"
                            href="tel: 877-958-9203"
                            class="text-decoration-none"
                        >
                            <v-btn
                                class="text-capitalize px-16 mt-2 ml-12"
                                outlined
                                @click="callUs = true"
                            >
                                <v-icon class="mr-2">mdi-phone-in-talk</v-icon>
                                Contact Us
                            </v-btn>
                        </a>

                        <a
                            v-else
                            href="tel: 877-958-9203"
                            class="text-decoration-none"
                        >
                            <v-btn
                                class="text-capitalize px-16 mt-2 ml-12"
                                outlined
                            >
                                <v-icon class="mr-2">mdi-phone-in-talk</v-icon>
                                Contact Us: 877-958-9203
                            </v-btn>
                        </a>
                    </v-col>

                    <!-- total bill -->
                    <v-col md="6">
                        <v-card class="rounded-0 pa-4" flat>
                            <p class="headline mb-0">Order Summery</p>
                            <v-divider class="mt-2"></v-divider>

                            <!-- sub total -->
                            <v-row class="mb-n7 mt-3 font-weight-bold">
                                <v-col md="auto"> Subtotal </v-col>
                                <v-spacer></v-spacer>
                                <v-col md="auto">${{ Math.round(cartTotal * 100) / 100 }}</v-col>
                            </v-row>

                            <!-- shipping -->
                            <v-row class="font-weight-bold">
                                <v-col md="auto"> Shipping </v-col>
                                <v-spacer></v-spacer>
                                <v-col md="auto">FREE!</v-col>
                            </v-row>
                            <v-divider class="mt-2"></v-divider>

                            <!-- total -->
                            <v-row class="headline mt-1">
                                <v-col md="auto"> Total </v-col>
                                <v-spacer></v-spacer>
                                <v-col md="auto">${{ Math.round(cartTotal * 100) / 100 }}</v-col>
                            </v-row>
                            <v-divider class="mt-2"></v-divider>

                            <!-- EMI -->
                            <p class="body-2 text-center my-2">
                                Starting at $26/mo with affirm. prequalify now
                            </p>
                            <v-divider class="mb-3"></v-divider>

                            <!-- checkout -->
                            <v-btn
                                class="text-capitalize orange darken-4 rounded-0"
                                block
                                dark
                                to="/customer/account/login"
                            >
                                <v-icon class="mr-2">mdi-lock</v-icon>
                                Process to Checkout
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-btn>
                        </v-card>
                    </v-col>

                </v-row>
            </v-card>
        </div>

    </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    head() {
        return {
            title: 'Shopping Cart',
        }
    },
    data() {
        return {
            quantities: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            callUs: false,
        }
    },
    computed: mapGetters('cart', ['cartItems', 'cartQuantities', 'cartTotal']),
    methods: {
        changeQuantity(product, quantity) {
            this.$store.commit('cart/changeQuantity', { product, quantity})
        },
        ...mapMutations('cart', ['removeItem']),
    }
}
</script>

<style>
</style>