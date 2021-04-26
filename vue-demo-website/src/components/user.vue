<template>
    <v-container>

        <!-- heading -->
        <h1 class="display-2 text-center"> User </h1>

        <div class="mt-5">
            <v-btn elevation="10" color="primary">
                <router-link to="/user/profile" class="white--text">Profile</router-link>
            </v-btn>
            <v-btn elevation="10" color="primary" class="float-right">
                <router-link to="/user/setting" class="white--text">Setting</router-link>
            </v-btn>
        </div>

        <!-- child components -->
        <router-view></router-view>

        <!-- contact banner -->
        <Contactbanner />

    </v-container>
</template>

<script>
import Contactbanner from "./contact-banner";

export default {
    name: "User",
    components: {
        Contactbanner,
    },
}
</script>

<style>
a {
    text-decoration: none;
}
</style>