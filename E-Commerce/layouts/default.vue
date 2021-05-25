<template>
    <v-app>
        <!-- notification -->
        <no-ssr>
            <notifications class="notify" group="notify" />
        </no-ssr>

        <v-main>
            <!-- navbar -->
                <v-toolbar color="primary pl-16 pr-16" dark flat>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>E-Commerce</v-toolbar-title>
                <v-spacer></v-spacer>

                <!-- Search -->
                <v-text-field
                    hide-details
                    prepend-icon="mdi-magnify"
                    single-line
                    placeholder="Search for products, brands and more"
                ></v-text-field>
                <v-spacer></v-spacer>

                <!-- routes -->
                <v-toolbar-items v-for="route in routes" :key="route.name">
                    <v-btn class="mr-3" text>
                        <n-link :to="route.path"> {{ route.name }} </n-link>
                    </v-btn>
                </v-toolbar-items>

                <v-toolbar-items>
                    <!-- login -->
                    <v-btn class="mr-2" v-if="!$auth()" text>
                        <n-link to="/login"> Login </n-link>
                    </v-btn>

                    <!-- logout -->
                    <v-btn 
                        class="mr-2" 
                        v-if="$auth()" 
                        @click="logout" text
                    > Logout </v-btn>

                    <!-- cart -->
                    <v-badge
                        :content="cartQuantities"
                        :value="cartQuantities"
                        color="black"
                        overlap
                        class="mt-5"
                    >
                        <n-link to="/cart">
                            <v-icon>mdi-cart</v-icon> Cart
                        </n-link>
                    </v-badge>
                </v-toolbar-items>
            </v-toolbar>

            <nuxt />

            <!-- footer -->
            <v-footer class="mt-10" color="primary" padless>
                <v-row justify="center" no-gutters>
                    <v-btn
                        v-for="route in routes"
                        :key="route.name"
                        color="white"
                        text
                        class="my-2"
                        :to="`${route.path}`"
                    >
                        {{ route.name }}
                    </v-btn>
                    <v-col class="primary py-4 text-center white--text" cols="12">
                        {{ new Date().getFullYear() }} —
                        <strong>Khodidas Gamdha</strong>
                    </v-col>
                </v-row>
            </v-footer>

        </v-main>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data: () => ({
        routes: [
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/products' },
            { name: 'Admin', path: '/admin' },
        ],
    }),
    computed: mapGetters('cart', ['cartQuantities']),
    methods: {
        logout() {
            this.$cookies.remove('token')
            this.$store.commit('userInfo/setToken', null)
            this.$store.commit('userInfo/setUser', null)
            this.$store.commit('auth/setLoggedIn', false)
            this.$router.push('/')
        },
    },
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: white;
}
.notify {
    margin-top: 70px;
}
</style>
