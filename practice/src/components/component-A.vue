<template>
    <div>
        <h1>Component A</h1>
        <button @click="popup = true">Show Component B</button>
        <componentB v-show="popup" @close='cls' />
    </div>
</template>

<script>
import componentB from "./component-B";

export default {
    name: "componentA",
    components: {
        componentB,
    },
    data() {
        return {
            popup: false
        }
    },
    methods: {
        cls(name) {
            this.popup = false;
            console.log(name);
        }
    }
};
</script>

<style>
</style>