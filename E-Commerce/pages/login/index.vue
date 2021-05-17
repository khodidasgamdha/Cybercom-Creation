<template>
    <div class="container">
        <v-row justify="center" class="mt-5">
            <v-sheet>
                <v-switch
                    v-model="login"
                    inset
                    :label="login ? 'Already Sign Up - Login' : 'New User - Registeration'"
                ></v-switch>
            </v-sheet>
        </v-row>
        <div v-if="!login">
            <Login />
        </div>
        <div v-if="login">
            <Registration />
        </div>
    </div>
</template>

<script>
import Login from '../../components/auth/Login'
import Registration from '../../components/auth/Registration'

export default {
    components: {
        Login,
        Registration,
    },
    data() {
        return {
            login: false,
        }
    },
}
</script>

<style>
#login {
    color: green;
}
</style>