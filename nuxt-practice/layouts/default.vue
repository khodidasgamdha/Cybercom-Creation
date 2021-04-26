<template>
    <div class="container">
        <AppHeader />
        <Nuxt />
    </div>
</template>

<script>
import AppHeader from '../components/AppHeader'

export default {
    components: {
        AppHeader
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1rem;
    line-height: 1.6;
    background: #888;
}
.container {
    max-width: 800px;
    margin: 2rem auto;
    overflow: hidden;
    padding: 1rem 2rem;
    background: #fff;
}
</style>
