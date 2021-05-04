<template>
    <div class="flex mt-3">

        <!-- logo -->
        <h1 class="mt-5">
            <router-link to="/">
                Movie App
            </router-link>
        </h1>

        <!-- routes -->
        <ul class="flex mt-5">
            <li>
                <router-link to="/" class="ml-5">
                    Movies
                </router-link>
            </li>
            <li>
                <router-link to="/actors" class="ml-5">
                    Actors
                </router-link>
            </li>
        </ul>
        
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>