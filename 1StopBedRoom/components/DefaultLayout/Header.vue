<template>
    <div>
        <!-- 1st header -->
        <v-system-bar color="white" height="45" class="px-16 pt-3" fixed>
            <p class="subtitle-1 black--text">
                SPRING INTO SAVINGS! SAVE UP TO 75% + FREE HOME DELIVERY
            </p>
            <v-spacer></v-spacer>
            <p class="subtitle-1">
                Question? Non-commissioned consultants are here to help!
            </p>
            <a
                href="tel:877-958-9203"
                class="subtitle-1 text-decoration-none mt-n3 ml-2"
            >
                <v-icon color="orange" size="32">mdi-cellphone-android</v-icon>
                <span class="primary--text">877-958-9203</span>
            </a>
        </v-system-bar>

        <!-- 2nd header -->
        <v-row class="secondHeader mt-10 px-14 justify-space-around">
            <!-- image -->
            <v-col md="3">
                <nuxt-link to="/">
                    <v-img
                        width="200"
                        class="mt-2"
                        src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/account-logo.png"
                    ></v-img>
                </nuxt-link>
            </v-col>

            <!-- search -->
            <v-col md="4">
                <p class="white--text body-2">
                    <n-link to="/">
                        <span
                            class="
                                caption
                                text-decoration-underline
                                white--text
                            "
                        >
                            36 Month Financing*
                        </span>
                    </n-link>
                    <n-link to="/sales/guest/form" class="ml-8">
                        <span
                            class="
                                caption
                                text-decoration-underline
                                white--text
                            "
                        >
                            Track My Order
                        </span>
                    </n-link>
                </p>

                <v-text-field
                    label="Search Furniture"
                    rounded
                    solo
                    dense
                    append-icon="mdi-search-web"
                >
                </v-text-field>
            </v-col>

            <!-- other -->
            <v-col md="4">
                <span class="caption white--text"
                    >FREE HOME DELIVERY AVAILABLE NATIONWIDE*</span
                >
                <div class="mt-3">
                    <!-- review -->
                    <img
                        src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/1sb-general/1sb-testimonials-stars.png?va49360aa"
                        alt="review"
                    />

                    <!-- sign in -->
                    <v-menu rounded="0" open-on-hover offset-y>
                        <!-- button -->
                        <template #activator="{ on, attrs }">
                            <v-btn
                                to="/customer/account/login"
                                text
                                class="ml-5"
                                v-on="on"
                                v-bind="attrs"
                            >
                                <v-icon color="white" large>mdi-account</v-icon>
                                <span class="white--text text-capitalize ml-2"
                                    >Sign In</span
                                >
                            </v-btn>
                        </template>

                        <!-- list -->
                        <v-card flat width="250" height="281" class="rounded-0">
                            <div class="grey lighten-2">
                                <v-btn
                                    class="
                                        text-capitalize
                                        px-16
                                        rounded-0
                                        mx-8
                                        my-4
                                        orange
                                        darken-2
                                    "
                                    to="/customer/account/login"
                                    dark
                                    dense
                                    >Sign In</v-btn
                                >
                                <p class="text-center body-2 pb-3">
                                    <span>New Customer ?</span>
                                    <n-link
                                        to="/customer/account/create"
                                        class="
                                            primary--text
                                            text-decoration-none
                                        "
                                        >Sign Up</n-link
                                    >
                                </p>
                            </div>
                            <div v-for="(item, i) in signInMenu" :key="i">
                                <v-row class="justify-center">
                                    <v-col md="2">
                                        <v-icon>mdi-{{ item.icon }}</v-icon>
                                    </v-col>
                                    <v-col md="8">
                                        <n-link
                                            :to="item.link"
                                            class="
                                                text-decoration-none
                                                black--text
                                            "
                                            >{{ item.title }}</n-link
                                        >
                                        <span v-if="cartQuantities && i === 3">({{ cartQuantities }} items)</span>
                                    </v-col>
                                </v-row>
                                <v-divider class="my-2"></v-divider>
                            </div>
                        </v-card>
                    </v-menu>

                    <!-- cart -->
                    <v-menu rounded="0" open-on-hover offset-y>
                        <!-- button -->
                        <template #activator="{ on, attrs }">
                            <v-btn
                                to="/checkout/cart"
                                text
                                class="ml-5"
                                v-on="on"
                                v-bind="attrs"
                            >
                                <v-badge 
                                    color="orange darken-3" 
                                    v-if="cartQuantities" 
                                    overlap 
                                    :content="cartQuantities"
                                >
                                    <v-icon color="white" large>
                                        mdi-cart
                                    </v-icon>
                                </v-badge>
                                <v-icon v-else color="white" large>
                                        mdi-cart
                                </v-icon>
                                <span class="white--text text-capitalize ml-2"
                                    >Cart</span
                                >
                            </v-btn>
                        </template>

                        <!-- if cart empty -->
                        <v-card
                            v-if="cartItems.length == 0"
                            flat
                            width="400"
                            class="pa-3 rounded-0"
                            style="border: 1px solid black"
                        >
                            <p>RECENTLY ADDED ITEM(S)</p>
                            <p class="mb-0">
                                You have no items in your shopping cart.
                            </p>
                        </v-card>

                        <!-- if cart not empty -->
                        <v-card
                            v-else
                            class="rounded-0"
                            flat
                            width="410"
                            style="border: 1px solid black"
                        >
                            <!-- cart number -->
                            <p class="mb-0 grey lighten-2 pl-4 py-1">
                                <span class="indigo--text"
                                    >Your Cart Number:</span
                                >
                                <span class="orange--text">123456</span>
                            </p>
                            <p class="ml-4 mt-2 mb-0">RECENTLY ADDED ITEM(S)</p>

                            <!-- products -->
                            <v-list
                                class="overflow-y-auto ml-4"
                                max-height="400"
                            >
                                <div v-for="(item, i) in cartItems" :key="i">
                                    <v-row>
                                        <!-- image -->
                                        <v-col cols="2">
                                            <n-link
                                                :to="`/bedroom/bedroom-sets/${item.product.sku}`"
                                            >
                                                <img
                                                    :src="item.product.imageUrl"
                                                    :alt="item.product.description"
                                                    width="50"
                                                />
                                            </n-link>
                                        </v-col>

                                        <!-- title, items, delete, quantity -->
                                        <v-col cols="7">
                                            <n-link
                                                :to="`/bedroom/bedroom-sets/${item.product.sku}`"
                                                class="text-decoration-none"
                                            >
                                                <p
                                                    class="
                                                        caption
                                                        mb-0
                                                        indigo--text
                                                    "
                                                >
                                                    {{ item.product.description }}
                                                </p>
                                            </n-link>
                                            <v-row class="mb-n8">
                                                <v-col cols="auto">
                                                    <span class="caption">Qty: </span>
                                                </v-col>
                                                <v-col cols="3">
                                                    <v-text-field
                                                        :value="item.quantity"
                                                        dense
                                                        outlined
                                                    ></v-text-field>
                                                </v-col>
                                                <v-col>
                                                    <v-icon @click="removeItem(item)"
                                                        >mdi-delete</v-icon
                                                    >
                                                </v-col>
                                            </v-row>
                                            <p class="mb-0 caption">
                                                <span>{{ item.quantity }}x</span>
                                                <span>{{ item.product.description }}</span>
                                            </p>
                                        </v-col>

                                        <!-- price -->
                                        <v-col cols="3">
                                            <p class="caption font-weight-bold">
                                                {{ item.product.price }}
                                            </p>
                                        </v-col>
                                    </v-row>
                                    <v-divider
                                        v-if="cartItems.length != i + 1"
                                        class="my-2 mr-2"
                                    ></v-divider>
                                </div>
                            </v-list>

                            <!-- total -->
                            <p
                                class="
                                    mb-0
                                    indigo--text
                                    grey
                                    lighten-2
                                    pl-4
                                    py-1
                                "
                            >
                                CART SUB TOTAL: ${{ cartTotal }}
                            </p>

                            <!-- view cart & checkout button -->
                            <v-row class="mx-2 my-1">
                                <v-col cols="6">
                                    <v-btn
                                        class="text-capitalize rounded-0"
                                        outlined
                                        block
                                        color="primary"
                                        to="/checkout/cart"
                                    >
                                        View Cart
                                    </v-btn>
                                </v-col>
                                <v-col cols="6">
                                    <v-btn
                                        class="
                                            text-capitalize
                                            orange
                                            darken-4
                                            rounded-0
                                        "
                                        dark
                                        block
                                        to="/onepage"
                                    >
                                        Checkout
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-menu>
                </div>
            </v-col>
        </v-row>

        <!-- 3rd header -->
        <v-app-bar class="px-8 thirdHeader" height="45">
            <div v-for="(link, index) in navbarLinks" :key="index">
                <v-menu rounded="0" open-on-hover offset-y>
                    <!-- main links -->
                    <template #activator="{ on, attrs }">
                        <v-btn
                            text
                            v-bind="attrs"
                            tile
                            height="45"
                            class="onHoverBtn"
                            v-on="on"
                        >
                            <nuxt-link
                                :to="`/${link.link}`"
                                class="text-decoration-none"
                            >
                                {{ link.linkTitle }}
                            </nuxt-link>
                        </v-btn>
                    </template>

                    <!-- sublinks -->
                    <v-card
                        :max-width="
                            link.subCategoryLinks.length > 10 ? 750 : 500
                        "
                        flat
                    >
                        <v-row class="mb-0">
                            <!-- links -->
                            <v-col>
                                <v-row no-gutters>
                                    <v-col
                                        v-for="(
                                            item, i
                                        ) in link.subCategoryLinks"
                                        :key="i"
                                        :md="
                                            link.subCategoryLinks.length > 10
                                                ? '6'
                                                : '12'
                                        "
                                    >
                                        <v-btn text tile>
                                            <nuxt-link
                                                :to="`/${link.link}/'${item.link}`"
                                                class="
                                                    black--text
                                                    caption
                                                    text-decoration-none
                                                "
                                            >
                                                {{ item.linkTitle }}
                                            </nuxt-link>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>

                            <!-- image -->
                            <v-col
                                :md="
                                    link.subCategoryLinks.length > 10
                                        ? '4'
                                        : '6'
                                "
                            >
                                <v-card
                                    flat
                                    class="px-3 pt-3 rounded-0 grey lighten-2"
                                    width="250"
                                    height="100%"
                                >
                                    <v-img :src="link.image"> </v-img>
                                    <p class="caption mt-2">{{ link.info }}</p>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-menu>
            </div>
        </v-app-bar>

        <!-- image -->
        <v-img
            src="https://cdn.1stopbedrooms.com/media/bannerslider/m/e/memorial-day-2021-1stopbedrooms-int_240521.png"
            class="deep-orange lighten-1"
        ></v-img>

        <!-- go to top -->
        <v-main>
            <div fluid>
                <v-fab-transition>
                    <v-btn
                        color="grey lighten-2"
                        fixed
                        bottom
                        right
                        fab
                        @click="
                            $vuetify.goTo(0, {
                                easing: 'easeInCubic',
                                duration: '1000',
                            })
                        "
                    >
                        <v-icon class="mt-2" large
                            >mdi-apple-keyboard-control</v-icon
                        >
                    </v-btn>
                </v-fab-transition>
            </div>
        </v-main>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import gql from 'graphql-tag'

const GET_NAVBAR_LINKS = gql`
    query GET_NAVBAR_LINKS {
        navbarLinks {
            linkTitle
            link
            image
            info
            subCategoryLinks {
                linkTitle
                link
            }
        }
    }
`

export default {
    apollo: {
        navbarLinks: {
            query: GET_NAVBAR_LINKS,
            prefetch: true,
        },
    },
    data() {
        return {
            signInMenu: [
                {
                    icon: 'account',
                    title: 'My Account',
                    link: '/customer/account/welcome',
                },
                {
                    icon: 'script',
                    title: 'Order Status',
                    link: '/sales/guest/form',
                },
                {
                    icon: 'headset',
                    title: 'Help Center',
                    link: '/shipping-and-delivery',
                },
                { icon: 'cart', title: 'My Cart', link: '/checkout/cart' },
            ],
        }
    },
    computed: mapGetters('cart', ['cartItems', 'cartQuantities', 'cartTotal']),
    methods: {
        ...mapMutations('cart', ['removeItem']),
    },
}
</script>
<style scoped>
.onHoverBtn:hover {
    background-color: white;
}
a {
    color: white;
}
.thirdHeader a:hover {
    color: #003980;
}
.secondHeader {
    background: url('https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/header_img.png?v4b3a5475')
        0 0 repeat;
}
.thirdHeader {
    background-color: #003980 !important;
}
</style>