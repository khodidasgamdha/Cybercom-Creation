<template>
    <div>
        <img :src='`https://icanhazdadjoke.com/j/${$route.params.id}.png`' :alt='`${joke}`' />
        <h2>{{ joke }}</h2>
        <hr>
        <n-link to="/jokes">
            <button>Back to Jokes</button>
        </n-link>
        <small>Joke ID: {{ $route.params.id }}</small>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            joke: {},
        }
    },
    async created() {
        const config = {
            headers: {
                Accept: 'application/json',
            },
        }
        try {
            const res = await axios.get(
                `https://icanhazdadjoke.com/j/${this.$route.params.id}`,
                config
            )
            this.joke = res.data.joke
        } catch (error) {
            console.log(error)
        }
    },
    head() {
        return {
            title: this.joke,
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
h2, 
button, 
small,
img {
    margin: 1rem 2rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
button {
    background: #41b883;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    text-decoration: none;
}
</style>