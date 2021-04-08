<template>
    <div id="app">

        <!-- nav -->
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

        <!-- provide inject -->
        <h3>User Name : {{ username }}</h3>
        <componentA />
        <hr>

        <!-- slot -->
        <Slots>
            <template v-slot:named>
                hi
            </template>
            <template v-slot:default='slotProp'>
                {{ slotProp.firstName }} {{ slotProp.lastName }}
            </template>
        </Slots>

        <router-view></router-view>

    </div>
</template>

<script>
import componentA from './components/component-A'
import Slots from './components/slot'

export default {
    name: "App",
    data() {
        return {
            username: 'Khodidas'
        }
    },
    components: {
        componentA,
        Slots,
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
