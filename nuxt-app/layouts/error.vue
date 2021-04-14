<template>
    <div>
        error page
    </div>
</template>

<script>
export default {
    layout: 'error-layout',
    props: {
        error: {
            type: Object,
            default: null
        }
    }
}
</script>

<style>

</style>