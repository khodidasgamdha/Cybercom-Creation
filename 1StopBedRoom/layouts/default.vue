<template>
    <v-app>
        <Header />
        <v-main>
            <Nuxt />
        </v-main>
        <Footer />
    </v-app>
</template>

<script>
import Header from '~/components/DefaultLayout/Header'
import Footer from '~/components/DefaultLayout/Footer'

export default {
    name: "default",
    components: {
        Header,
        Footer,
    },
}
</script>

<style scoped>
</style>