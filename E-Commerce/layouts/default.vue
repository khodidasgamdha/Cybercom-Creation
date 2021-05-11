<template>
    <v-app>
        <!-- notification -->
        <!-- <no-ssr>
            <notifications group="notify" />
        </no-ssr> -->
        <v-main>
            <!-- toolbar -->
            <v-toolbar color="light-blue darken-1 pl-16 pr-16" dark flat>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>E-Commerce</v-toolbar-title>
                <v-spacer></v-spacer>

                <!-- menu -->
                <v-toolbar-items class="hidden-sm-and-down">
                    <!-- home -->
                    <v-btn class="mr-3" text>
                        <n-link to="/"> Home </n-link>
                    </v-btn>

                    <!-- products -->
                    <v-btn class="mr-2" text>
                        <n-link to="/products"> Products </n-link>
                    </v-btn>

                    <!-- login -->
                    <v-btn class="mr-3" v-if="!$auth()" text>
                        <n-link to="/login"> Login </n-link>
                    </v-btn>

                    <!-- logout -->
                    <v-btn class="mr-2" v-if="$auth()" @click="logout" text>
                        Logout
                    </v-btn>

                    <v-badge
                        :content="cartItems.length"
                        :value="cartItems.length"
                        color="black"
                        overlap
                        class="mt-5"
                    >
                        <n-link to="/cart">
                            <v-icon>mdi-cart</v-icon>
                        </n-link>
                    </v-badge>

                </v-toolbar-items>
            </v-toolbar>

            <nuxt />
        </v-main>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters('cart', ['cartItems']),
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
</style>
