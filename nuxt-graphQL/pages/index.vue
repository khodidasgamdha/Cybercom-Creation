<template>
    <div class="p-8">
        <h1 class="font-bold text-2xl mb-8">Rick and Morty Characters</h1>

        <!-- Search form -->
        <form @submit.prevent="search" class="flex items-center mb-8">
            <input
                type="text"
                name="Search"
                id="Search"
                class="border border-gray-600 rounded py-2 px-4 mr-2"
                v-model="searchText"
                placeholder="Search by name"
            />
            <button
                type="submit"
                class="bg-gray-200 px-4 py-2 border border-gray-200 rounded"
            >
                Search
            </button>
        </form>

        <div v-if="loading">Loading..</div>

        <div v-if="searchResults" class="mb-8">
            <div v-if="searchResults.length">
                <p class="font-bold mb-2">Your search results:</p>
                <div class="flex flex-wrap">
                    <div
                        v-for="character in searchResults"
                        :key="character.id"
                        class="mr-4 mb-2 flex"
                    >
                        <NuxtLink
                            :to="`/character/${character.id}`"
                            class="
                                border
                                rounded
                                px-2
                                py-1
                                text-gray-800
                                border-gray-800
                                text-sm
                                mt-2
                                whitespace-no-wrap
                            "
                        >
                            {{ character.name }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <p class="font-bold" v-else>No results found.</p>
        </div>

        <!-- Pre-rendered data -->
        <div class="grid grid-cols-3 gap-8">
            <article
                v-for="character in characters.results"
                :key="character.id"
                class="flex flex-col items-start"
            >
                <h2 class="font-bold">{{ character.name }}</h2>
                <div class="text-sm text-gray-800">
                    <p>Gender: {{ character.gender }}</p>
                    <p>Location: {{ character.location.name }}</p>
                </div>
                <NuxtLink
                    :to="`/character/${character.id}`"
                    class="
                        border
                        rounded
                        px-2
                        py-1
                        text-gray-800
                        border-gray-800
                        text-sm
                        mt-2
                    "
                >
                    Read more
                </NuxtLink>
            </article>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'

const ALL_CHARACTERS_QUERY = gql`
    query ALL_CHARACTERS_QUERY {
        characters {
            results {
                id
                name
                gender
                location {
                    name
                }
            }
        }
    }
`

const CHARACTERS_BY_NAME_QUERY = gql`
    query CHARACTERS_BY_NAME($name: String!) {
        characters(filter: { name: $name }) {
            results {
                id
                name
            }
        }
    }
`

export default {
    apollo: {
        characters: {
            query: ALL_CHARACTERS_QUERY,
            prefetch: true,
        },
    },

    data() {
        return {
            searchText: '',
            searchResults: null,
            loading: false,
        }
    },

    methods: {
        async search() {
            try {
                const res = await this.$apollo.query({
                    query: CHARACTERS_BY_NAME_QUERY,
                    variables: {
                        name: this.searchText,
                    },
                })

                if (res) {
                    this.loading = false
                    const { results } = res.data.characters
                    this.searchResults = results
                }
            } catch (err) {
                this.loading = false
                this.searchResults = []
            }
        },
    },
}
</script>