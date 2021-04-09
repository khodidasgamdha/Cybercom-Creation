<template>
    <div id="app">

        <!-- nav -->
        <div>
            <b-navbar toggleable="lg" type="dark" variant="info">

                <!-- brand -->
                <b-navbar-brand to="/">
                    <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten">
                    Vue Practice
                </b-navbar-brand>

                <!-- collaps btn -->
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <!-- links -->
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item to="/">/</b-nav-item>
                        <b-nav-item to="/home">Home</b-nav-item>
                        <b-nav-item to="/practice">Practice</b-nav-item>
                        <b-nav-item to="/form">Form</b-nav-item>
                        <b-nav-item to="/post">Post</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>

            </b-navbar>
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
        <hr>

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
    margin-top: 60px;
    background-color: rgb(66, 66, 66);
    color: aliceblue;
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
