<template>
    <div>
        <div class="container mx-auto flex justify-between border-b border-gray-500">
            <Navbar />
            <Search />
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from './components/Header/Navbar'
import Search from './components/Header/Search'

export default {
    name: "App",
    components: {
        Navbar,
        Search,
    }
};
</script>

<style>
</style>
