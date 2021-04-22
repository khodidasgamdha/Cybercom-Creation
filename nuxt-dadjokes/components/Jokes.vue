<template>
    <n-link :to="`jokes/${id}`">
        <div class="joke">
            <p>{{ joke }}</p>
        </div>
    </n-link>
</template>

<script>
export default {
    name: 'Jokes',
    props: ['joke', 'id'],
}
</script>

<style>
.joke {
    padding: 1rem;
    border: 1px solid #41b883;
    margin: 1rem 0;
}
a {
    text-decoration: none;
}
</style>