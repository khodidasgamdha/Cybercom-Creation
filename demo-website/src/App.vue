<template>
    <div id="app">
        <v-app>
            <v-main>
                <NavBar />
                <router-view></router-view>
                <Footer />
            </v-main>
        </v-app>
    </div>
</template>

<script>
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default {
    name: "App",

    components: {
        NavBar,
        Footer,
    },

    data: () => ({
        //
    }),
};
</script>
