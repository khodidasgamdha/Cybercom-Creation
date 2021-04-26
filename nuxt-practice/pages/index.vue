<template>
    <v-main>
        <!-- refresh data -->
        <div>
            <h4>{{ content }}</h4>
            <v-btn small @click="refresh" elevation="10"> Refresh </v-btn>
        </div>

        <!-- rendered side -->
        <div>
            <h4>I am rendered on the {{ renderedOn }} side</h4>
        </div>

        <!-- check user online or offline -->
        <div>
            <h4 v-if="$nuxt.isOnline">You are online</h4>
            <h4 v-if="$nuxt.isOffline">You are offline</h4>
        </div>

        <!-- feaching -->
        <div>
            <p v-if="$fetchState.pending">Fetching Users...</p>
            <p v-else-if="$fetchState.error">An error occurred :(</p>
            <div v-else>
                <h3>Nuxt - JsonPlaceholder Users</h3>
                <p>
                    Last time featched :
                    {{ new Date($fetchState.timestamp * 1000) }}
                </p>
                <ul>
                    <li v-for="user of users" :key="user.id">
                        {{ user.website }}
                    </li>
                </ul>
                <button @click="$fetch">Refresh</button>
            </div>
        </div>
    </v-main>
</template>

<script>
export default {
    data() {
        return {
            users: [],
        }
    },
    asyncData() {
        return {
            content: 'Created at: ' + new Date(),
            renderedOn: process.client ? 'client' : 'server',
        }
    },
    activated() {
        // Call fetch again if last fetch more than 30 sec ago
        if (this.$fetchState.timestamp <= Date.now() - 30000) {
            this.$fetch()
        }
    },
    async fetch() {
        this.users = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        ).then((response) => response.json())
    },
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    },
    methods: {
        refresh() {
            this.$nuxt.refresh()
        },
    },
    fetchDelay: 2000,
}
</script>

<style>
div {
    margin-top: 20px;
}
</style>