<template>    
    <div class="container mx-auto border-b border-gray-500 px-4 py-4">
        <h2 class="text-4xl font-semibold mb-5">Crew</h2>

        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5 flex flex-col">
            <div v-for="(crew, index) in crews" :key="index">
                <span>Name:
                    <span class="text-gray-400">{{ crew.name }}</span>
                </span><br />
                <span>Department: 
                    <span class="text-gray-400">{{ crew.department }}</span>
                </span><br />
                <span>Job: 
                    <span class="text-gray-400">{{ crew.job }}</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        crews: {
            required: true
        }
    }
}
</script>

<style>

</style>