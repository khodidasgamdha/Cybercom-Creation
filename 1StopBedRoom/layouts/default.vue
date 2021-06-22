<template>
    <v-app>
        <Header />
        <Nuxt />
        <Footer />
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