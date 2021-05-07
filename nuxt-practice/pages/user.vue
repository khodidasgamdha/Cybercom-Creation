<template>
    <div id="parent">
        <h2>
            I'm user.vue
        </h2>
        <transition name="user"></transition>
        <NuxtChild />
    </div>
</template>

<script>
export default {
    scrollToTop: false,
    transition: {
        name: 'user',
        mode: 'out-in'
    }
}
</script>

<style>
#parent {
    background: #555;
}
.user-enter-active,
.user-leave-active {
    transition: opacity 0.5s;
}
.user-enter,
.user-leave-active {
    opacity: 0;
}
h2 {
    text-align: center;
    padding: 0px 0;
    font-weight: bold;
}
</style>