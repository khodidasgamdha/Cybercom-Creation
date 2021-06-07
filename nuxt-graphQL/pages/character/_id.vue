<template>
    <div class="flex flex-col items-start p-4 space-y-4">
        <h1 class="font-bold text-2xl">{{ character.name }}</h1>
        <hr class="w-full" />
        <div class="text-gray-800">
            <p>Gender: {{ character.gender }}</p>
            <p>Species: {{ character.species }}</p>
            <p>Origin: {{ character.origin.name }}</p>
        </div>
        <hr class="w-full" />
        <h2 class="font-bold mb-2">Appears in:</h2>
        <div class="grid grid-cols-4 gap-4">
            <article v-for="episode in character.episode" :key="episode.id">
                <h3 class="font-bold">{{ episode.name }}</h3>
                <p class="">Air Date: {{ episode.air_date }}</p>
            </article>
        </div>
        <NuxtLink
            to="/"
            class="
                border
                rounded
                px-2
                py-1
                text-gray-800
                border-gray-800
                text-sm
            "
        >
            Go back
        </NuxtLink>
    </div>
</template>

<script>
import gql from 'graphql-tag'

const SINGLE_CHARACTER_QUERY = gql`
    query SINGLE_CHARACTER_QUERY($id: ID!) {
        character(id: $id) {
            name
            species
            gender
            origin {
                name
            }
            episode {
                id
                name
                air_date
            }
        }
    }
`

export default {
    async asyncData({ app, params }) {
        const client = app.apolloProvider.defaultClient
        const { id } = params

        const res = await client.query({
            query: SINGLE_CHARACTER_QUERY,
            variables: {
                id,
            },
        })

        const { character } = res.data
        console.log(character)
        return {
            character,
        }
    },
}
</script>