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
                    <v-btn class="mr-3" plain>
                        <n-link to="/"> Home </n-link>
                    </v-btn>

                    <!-- products -->
                    <v-btn class="mr-2" plain>
                        <n-link to="/products"> Products </n-link>
                    </v-btn>

                    <!-- login -->
                    <v-btn class="mr-3" v-if="!$auth()" plain>
                        <n-link to="/login"> Login </n-link>
                    </v-btn>

                    <!-- logout -->
                    <v-btn class="mr-2" v-if="$auth()" @click="logout" plain>
                        Logout
                    </v-btn>

                    <!-- cart -->
                    <v-btn plain>
                        <n-link to="/cart">
                            <v-icon>mdi-cart</v-icon>
                        </n-link>
                    </v-btn>

                </v-toolbar-items>
            </v-toolbar>

            <nuxt />

        </v-main>
    </v-app>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$cookies.remove('token')
            this.$store.commit('token/setToken', null)
            this.$store.commit('auth/setLoggedIn', false)
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: white;
}
</style>
