<template>
    <div class="mx-16 mt-5">
        <p class="headline mb-0">You are now signed out</p>
        <p class="body-2">
            You have signed out and will be redirected to our homepage in 5
            seconds.
        </p>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    head() {
        return {
            title: '1StopBedrooms | Buy Bedroom Furniture Sets | Free Delivery',
        }
    },
    mounted() {
        setTimeout(() => {
            this.$cookies.remove('token')
            this.$store.commit('auth/setLoggedIn', false)
            this.$store.commit('auth/setUserInfo', [])
            this.$router.push('/')
        }, 5000);
    },
}
</script>

<style>
</style>