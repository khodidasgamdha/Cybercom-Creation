<template>
  <v-app>
    <v-main>
      <v-toolbar color="deep-purple" dark flat>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Nuxt js</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn color="deep-purple" plain>
            <n-link to="/"> Home </n-link>
          </v-btn>
          <v-btn color="deep-purple" plain>
            <n-link to="/weather-app"> Weather App </n-link>
          </v-btn>
          <v-btn color="deep-purple" plain>
            <n-link to="/quiz"> Quiz App </n-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>
