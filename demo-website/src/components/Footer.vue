<template>
    <v-footer padless id="footer">
        <v-row justify="center" no-gutters>

            <!-- quick links -->
            <v-btn plain class="my-2">
                <router-link to="/" class="white--text"> Home </router-link>
            </v-btn>
            <v-btn plain class="my-2">
                <router-link to="/blog" class="white--text"> Blog </router-link>
            </v-btn>
            <v-btn plain class="my-2">
                <router-link to="/user" class="white--text"> User </router-link>
            </v-btn>
            <v-btn plain class="my-2">
                <router-link to="/form-data" class="white--text"> Form Data </router-link>
            </v-btn>
            <v-btn plain class="my-2">
                <router-link to="/contact-us" class="white--text"> Contact Us </router-link>
            </v-btn>

            <!-- copy rights -->
            <v-col
                class="py-4 text-center white--text"
                cols="12">
                2021 — Khodidas Gamdha
            </v-col>
            
        </v-row>
    </v-footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
#footer {
      background-color: #001936;
}
a {
    text-decoration: none;
    color: white;
}
</style>