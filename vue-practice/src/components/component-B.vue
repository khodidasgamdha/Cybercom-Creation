<template>
    <div>
        <h1>Component B</h1>
        <h3>User Name : {{ name }}</h3>
        <input type="text" v-model="nm">
        
        <!-- pass data to parent using emit -->
        <button @click="$emit('close', nm)">Hide Component</button>
    </div>
</template>

<script>
export default {
    name: "componentB",
    inject: ['name'],
    data() {
        return {
            nm: '',
        }
    },
    emits: {
        close: (nm) => {
            if(!nm) {
                return false;
            } else {
                return true;
            }
        }
    }
};
</script>

<style>
</style>