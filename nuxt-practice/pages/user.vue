<template>
    <div>
        I'm user.vue
        <transition name="user"></transition>
        <NuxtChild />
    </div>
</template>

<script>
export default {
    transition: {
        name: 'user',
        afterLeave(el) {
            console.log('afterLeave', el)
        },
    }
}
</script>

<style>
.user-enter-active,
.user-leave-active {
    transition: opacity 0.5s;
}
.user-enter,
.user-leave-active {
    opacity: 0;
}
</style>