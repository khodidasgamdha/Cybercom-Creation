<template>
    <v-app>
        <Header />
        <Nuxt />
        <Footer />
    </v-app>
</template>

<script>
import Header from '../components/CMS/Header'
import Footer from '../components/CMS/Footer'

export default {
    components: {
        Header,
        Footer,
    },
}
</script>

<style>
</style>