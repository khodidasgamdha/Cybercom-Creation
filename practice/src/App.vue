<template>
    <div id="app">
        <HelloWorld />
        <Form />
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Form from './components/Form'

export default {
    name: "App",
    components: {
        HelloWorld,
        Form
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body {
    color: aliceblue;
    margin-top: 60px;
    background-color: rgb(66, 66, 66);
    text-align: center;
}
</style>
