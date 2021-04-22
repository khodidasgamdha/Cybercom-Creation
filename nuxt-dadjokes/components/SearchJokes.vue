<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="text" placeholder="Search Jokes...">
        <input type="submit" value="Search Jokes">
    </form>
</template>

<script>
export default {
    name: 'SearchJokes',
    data() {
        return {
            text: ''
        }
    },
    methods: {
        onSubmit() {
            this.$emit('search-text', this.text);
            this.text = '';
        }
    }
}
</script>

<style>
form {
    display: flex;
    padding-bottom: 2rem;
}
input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 2px solid #41b883;
    outline: 0;
}
input[type="submit"] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px solid #41b883;
    cursor: pointer;
}
</style>