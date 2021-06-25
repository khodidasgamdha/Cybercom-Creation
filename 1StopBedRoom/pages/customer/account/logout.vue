<template></template>

<script>
export default {
    middleware: 'auth',
    head() {
        return {
            title: '1StopBedrooms | Buy Bedroom Furniture Sets | Free Delivery',
        }
    },
    mounted() {
        this.$router.push('/customer/account/logoutSuccess')
    },
}
</script>

<style>
</style>