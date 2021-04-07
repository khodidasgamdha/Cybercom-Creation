<template>
    <div id="app">
        <div id="nav">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/practice">Practice</router-link>
            </li>
            <li>
                <router-link to="/form">Form</router-link>
            </li>
        </div>
        <h3>User Name : {{ username }}</h3>
        <componentA />
        <router-view></router-view>
    </div>
</template>

<script>
import componentA from './components/component-A'

export default {
    name: "App",
    data() {
        return {
            username: 'Khodidas'
        }
    },
    components: {
        componentA
    },
    provide() {
        return {
            name: this.username
        }
    }
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
#nav {
    display: flex;
    justify-content: center;
}
li {
    margin-left: 50px;
}
</style>
