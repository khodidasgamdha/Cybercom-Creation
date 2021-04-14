<template>
  <div>
    <div>I'm for</div>
    <nuxt />
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      title: 'Inspire',
    }
  },
  head() {
    return {
      title: 'Inspire',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My Amazing About Page',
        },
      ],
    }
  },
}
</script>

<style></style>
