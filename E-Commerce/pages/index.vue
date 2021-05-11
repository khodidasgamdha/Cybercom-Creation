<template>
    <div>
        <h1 class="text-center display-4">Welcome to NuxtZon</h1>
        <h2 class="text-center display-1 mt-10">It is Online Shopping Store</h2>{{user}}
    </div> 
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: mapGetters('userInfo', ['user'])
}
</script>

<style>
h1 {
    margin: 200px auto 0;
}
</style>