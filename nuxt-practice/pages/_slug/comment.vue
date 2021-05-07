<template>
    <div>
        <h2>
            I'm _slug/comment
        </h2>
        <div>
            <span>{{ a[b] }}</span>
            <button @click="b < a.length -1 ? b++ : b=0">increment</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            a: [1, 2, 3, 4],
            b: 0
        }
    },
}
</script>

<style>
</style>