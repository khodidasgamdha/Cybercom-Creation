<template>
    <v-app>
        <Header />
        <v-main>
            <Nuxt />
        </v-main>
        <v-footer>
            <Footer />
        </v-footer>
    </v-app>
</template>

<script>
import Header from '~/components/DefaultLayout/Header.vue'
import Footer from '~/components/DefaultLayout/Footer.vue'

export default {
    components: {
        Header,
        Footer,
    },
}
</script>

<style scoped>
</style>