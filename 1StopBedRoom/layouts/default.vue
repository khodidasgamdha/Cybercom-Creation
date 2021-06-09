<template>
    <v-app>
        <Header />
        <Nuxt />
        <Footer />
    </v-app>
</template>

<script>
import Header from '../components/Default/Header.vue'
import Footer from '../components/Default/Footer.vue'

export default {
    components: {
        Header,
        Footer,
    },
}
</script>

<style>
</style>