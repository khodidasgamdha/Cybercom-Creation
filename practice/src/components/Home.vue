<template>
<div>
    <h1 v-bind="$attrs">Hello, {{name}} : Like {{like}}</h1>
</div>
</template>

<script>
export default {
    name: 'Home',
    props: {
        name: {
            default: 'default Name'
        },
        like: Number
    },
    inheritAttrs: false
}
</script>

<style>

</style>