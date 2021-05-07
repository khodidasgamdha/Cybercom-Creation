<template>
    <v-container>
        <v-layout>
            <v-flex xs5 offset-xs3>
                <v-card>
                    <!-- title -->
                    <v-card-title>
                        <h1 class="mt-0 display-1">Login</h1>
                    </v-card-title>

                    <!-- from -->
                    <v-card-text>
                        <v-flex xs12>
                            <!-- email -->
                            <v-text-field
                                v-model="email"
                                :error-messages="emailErrors"
                                label="E-mail"
                                type="email"
                                required
                                solo
                                single-line
                                @input="$v.email.$touch()"
                                @blur="$v.email.$touch()"
                            ></v-text-field>

                            <!-- password -->
                            <v-text-field
                                v-model="password"
                                :error-messages="passwordErrors"
                                label="Password"
                                type="password"
                                required
                                solo
                                single-line
                                @input="$v.password.$touch()"
                                @blur="$v.password.$touch()"
                            ></v-text-field>

                            <!-- submit -->
                            <v-btn
                                class="primary"
                                block
                                dark
                                elevation="10"
                                @click="signIn"
                                >Login</v-btn
                            >

                            <!-- new user -->
                            <div class="text-center mt-5">
                                New User ?
                                <span @click="registration" color="text-primary"
                                    >Registration</span
                                >
                            </div>
                        </v-flex>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    validations: {
        email: { required, email },
        password: { required, minLength: minLength(6) },
    },
    data: () => ({
        email: '',
        password: '',
    }),
    computed: {
        emailErrors() {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('E-mail Must be valid')
            !this.$v.email.required && errors.push('E-mail is required.')
            return errors
        },
        passwordErrors() {
            const errors = []
            if (!this.$v.password.$dirty) return errors
            !this.$v.password.minLength &&
                errors.push('Password must be at 6 characters long')
            !this.$v.password.required && errors.push('Password is required')
            return errors
        },
        token() {
            return this.$store.state.token
        },
        user() {
            return this.$store.state.user
        }
    },

    methods: {
        signIn() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                this.$axios
                    .$post(
                        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_KEY}`,
                        {
                            email: this.email,
                            password: this.password,
                            returnSecureToken: true,
                        }
                    )
                    .then((res) => this.handleToken(res.idToken))
                    .catch((err) => console.log(err))
            }
        },
        handleToken(token) {
            this.$cookies.set('token', token)
            this.$store.commit('token/setToken', token)
            this.$store.commit('auth/setLoggedIn', true)
            this.$router.push('/')
            this.getUserInfo()
        },
        getUserInfo() {
            this.$axios
                .$post(
                    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.FIREBASE_KEY}`,
                    {
                        idToken: this.token.token,
                    }
                )
                .then((res) => this.$store.commit('userInfo/setUser', res))
        },
        registration() {
            console.log('Hi')
        },
    },
}
</script>

<style>
h1 {
    font-size: 45px;
    font-weight: 500;
}
a {
    text-decoration: none;
}
</style>