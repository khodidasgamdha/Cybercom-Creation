  
<template>
    <v-app>

        <v-row class="blue darken-4 justify-space-around">
            <v-col md="auto" class="my-5">
                <nuxt-link to="/">
                    <v-img
                        width="200"
                        src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/account-logo.png"
                    ></v-img>
                </nuxt-link>
            </v-col>
            <v-col md="auto">
                <p class="pt-10">
                    <a class="white--text" @click="$router.go(-1)">
                        Return to previous page
                    </a>
                </p>
            </v-col>

        </v-row>

        <v-main>
            <Nuxt />
        </v-main>

        <v-footer>
            <Footer />
        </v-footer>

    </v-app>
</template>

<script>
import Footer from '~/components/DefaultLayout/Footer'

export default {
    components: {
        Footer
    }
}
</script>

<style>
</style>