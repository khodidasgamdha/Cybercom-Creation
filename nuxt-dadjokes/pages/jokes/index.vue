<template>
    <div>
        <SearchJokes @search-text="searchText" />
        <Jokes
            v-for="joke in jokes"
            :key="joke.id"
            :joke="joke.joke"
            :id="joke.id"
        />
    </div>
</template>

<script>
import axios from 'axios'
import Jokes from '../../components/Jokes'
import SearchJokes from '../../components/SearchJokes'

export default {
    components: {
        Jokes,
        SearchJokes,
    },
    data() {
        return {
            jokes: [],
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
                'https://icanhazdadjoke.com/search',
                config
            )
            this.jokes = res.data.results
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        async searchText(text) {
            const config = {
                headers: {
                    Accept: 'application/json',
                },
            }
            try {
                const res = await axios.get(
                    `https://icanhazdadjoke.com/search?term=${text}`,
                    config
                )
                this.jokes = res.data.results
            } catch (error) {
                console.log(error)
            }
        },
    },
    head() {
        return {
            title: 'Dad Jokes',
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
</style>