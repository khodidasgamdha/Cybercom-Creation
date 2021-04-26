<template>
    <v-toolbar dark flat id="toolbar">
        
        <!-- icon -->
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <!-- logo -->
        <v-toolbar-title>Khodidas Gamdha</v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- links -->
        <v-toolbar-items class="">
            <v-btn plain>
                <router-link to="/" class="white--text" active-class="active" exact> Home </router-link>
            </v-btn>
            <v-btn plain>
                <router-link to="/blog" class="white--text" active-class="active" exact> Blog </router-link>
            </v-btn>
            <v-btn plain>
                <router-link to="/user" class="white--text" active-class="active" exact> User </router-link>
            </v-btn>
            <v-btn plain>
                <router-link to="/form-data" class="white--text" active-class="active" exact> Form Data </router-link>
            </v-btn>
            <v-btn plain>
                <router-link to="/contact-us" class="white--text" active-class="active" exact> Contact US </router-link>
            </v-btn>
        </v-toolbar-items>

    </v-toolbar>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style scoped>
#toolbar {
    background-color: #001936;
}
a {
    text-decoration: none;
    color: white;
}
</style>
