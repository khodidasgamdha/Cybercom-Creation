<template>
    <div>
        <h1>Welcome to Dad Jokes</h1>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Welcome to Dad Jokes',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Dad jokes',
                },
            ],
        }
    },
}
</script>

<style>
h1 {
    text-align: center;
}
</style>
