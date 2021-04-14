<template>
  <div>I'm From {{ slug.blog }} Blog</div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.blog)
  },
  data() {
    return {
      slug: this.$route.params,
    }
  },
  created() {
    console.log(this.$route.params)
  },
}
</script>

<style></style>
