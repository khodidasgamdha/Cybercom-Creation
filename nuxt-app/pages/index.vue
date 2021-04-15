<template>
  <v-layout class="text-center mt-5">
    <v-flex class="mt-5">
      <h1 class="display-2">{{ course }}</h1>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    course: {
      get() {
        return this.$store.getters.upperCaseCourse
      },
      set(value) {
        this.$store.commit('setCourse', value)
      },
    },
  },
}
</script>

<style></style>
