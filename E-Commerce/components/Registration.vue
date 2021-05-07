<template>
    <v-container>
        <v-layout>
            <v-flex xs5 offset-xs3>
                <v-card>

                    <!-- title -->
                    <v-card-title>
                        <h1 class="mt-0 display-1">Registration</h1>
                    </v-card-title>

                    <!-- from -->
                    <v-card-text>
                        <v-flex xs12>

                            <!-- name -->
                            <v-text-field
                                v-model="name"
                                :error-messages="nameErrors"
                                label="Name"
                                type="text"
                                required
                                solo
                                single-line
                                @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"
                            ></v-text-field>

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
                                @click="signUp"
                                >Sign Up</v-btn
                            >

                            <!-- new user -->
                            <div class="text-center mt-5 mb-5">
                                Already Register ?
                                <n-link to="/login">Login</n-link>
                            </div>
                            <hr>

                            <div class="text-center subtitle-1 mt-5 mb-5">
                                Other
                            </div>

                            <!-- login with google -->
                            <v-btn
                                class="mt-5"
                                color="red accent-4"
                                block
                                dark
                                elevation="5"
                            >
                                Google +
                            </v-btn>

                            <!-- login with facebook -->
                            <v-btn
                                class="mt-5"
                                color="indigo accent-4"
                                block
                                dark
                                elevation="5"
                            >
                                Facebook
                            </v-btn>

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
        name: { required, minLength: minLength(3) },
        email: { required, email },
        password: { required, minLength: minLength(6) },
    },

    data: () => ({
        name: '',
        email: '',
        password: '',
    }),

    computed: {
        nameErrors() {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.minLength &&
                errors.push('Name must be at 3 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
        },
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
    },

    methods: {
        signUp() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                this.$axios
                    .$post(
                        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.FIREBASE_KEY}`,
                        {
                            displayName: this.name,
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
            this.$cookies.set('token', token);
            this.$store.commit('auth/setLoggedIn', true)
            this.$router.push('/');
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