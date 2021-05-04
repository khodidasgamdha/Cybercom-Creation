<template>
    <div>
        <router-link :to="`/actors/${actor.id}`">
            <img 
                :src="actorImage" 
                :alt="actor.name">
            <h3>{{ actor.name }}</h3>
            <span
                class="text-gray-400" 
                v-for="(known, index) in actor.known_for" 
                :key="index">
                <span v-if="known.title">
                    {{ known.title }} 
                    <br />
                </span>
            </span>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        actor: {
            required: true
        }
    },
    computed: {
        actorImage() {
            return `https://image.tmdb.org/t/p/w500/${this.actor.profile_path}`
        }
    }
}
</script>

<style>

</style>