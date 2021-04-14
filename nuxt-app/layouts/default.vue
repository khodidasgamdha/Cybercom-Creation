<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Nuxt js</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn>
          <n-link to="/"> Home </n-link>
        </v-btn>
        <v-btn>
          <n-link to="/inspire"> Inspire </n-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
