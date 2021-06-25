<template>
    <div>
        <v-divider class="orange darken-1 pt-5"></v-divider>
        <div class="blue darken-4">
            <v-row class="py-12 justify-center">

                <v-col md="5">
                    <v-card tile flat width="530" class="mx-auto">
                        <v-card-text class="px-12">

                            <!-- title -->
                            <p class="text-center title py-3 black--text font-weight-light">
                                Create an Account
                            </p>

                            <v-form>
                                
                                <!-- first name -->
                                <v-text-field
                                    v-model="register.firstName"
                                    label="First Name"
                                    placeholder="First Name"
                                    outlined
                                    dense
                                    :rules="[rules.required]"
                                ></v-text-field>

                                <!-- last name -->
                                <v-text-field
                                    v-model="register.lastName"
                                    label="Last Name"
                                    placeholder="Last Name"
                                    outlined
                                    dense
                                    :rules="[rules.required]"
                                ></v-text-field>

                                <!-- email -->
                                <v-text-field
                                    v-model="register.email"
                                    label="Email"
                                    placeholder="Email"
                                    outlined
                                    dense
                                    :rules="[rules.required, rules.email]"
                                ></v-text-field>

                                <!-- password -->
                                <v-text-field
                                    v-model="register.password"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show1 ? 'text' : 'password'"
                                    label="Password"
                                    hint="At least 6 characters"
                                    outlined
                                    dense
                                    :rules="[rules.required, rules.minLenght]"
                                    @click:append="show1 = !show1"
                                ></v-text-field>

                                <!-- confirm password -->
                                <v-text-field
                                    v-model="rpassword"
                                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[
                                        rules.required,
                                        rules.minLenght,
                                        rules.passwordMatch,
                                    ]"
                                    :type="show2 ? 'text' : 'password'"
                                    label="Confirmed Password"
                                    hint="At least 6 characters"
                                    outlined
                                    dense
                                    @click:append="show2 = !show2"
                                ></v-text-field>

                                <!-- submit -->
                                <v-btn
                                    class="primary text-capitalize"
                                    height="45"
                                    dark
                                    block
                                    @click="signUp()"
                                    >Create Account</v-btn
                                >
                            </v-form>

                            <p class="mt-2 black--text">
                                <span>By continuing you agree to our</span>
                                <n-link class="text-decoration-none" to="/policy/terms-and-conditions">Terms and Conditions</n-link>
                                <span>and our</span>
                                <n-link class="text-decoration-none" to="/policy/privacy-policy">Privacy Policy.</n-link>
                            </p>

                            <v-divider class="mb-4"></v-divider>
                            
                            <p class="title font-weight-light text-center black--text mb-2">
                                Sign in with your facebook account
                            </p>
                            <p class="black--text text-center">
                                We'll never post anything without your permission.
                            </p>

                            <div class="my-5">
                                <v-btn
                                    color="indigo lighten-1"
                                    class="mx-auto text-capitalize"
                                    dark
                                    block
                                >
                                    <v-icon class="mr-2">mdi-facebook</v-icon>
                                    Sign in with Facebook</v-btn
                                >
                            </div>

                        </v-card-text>

                        <p class="grey lighten-2 py-8 text-center">
                            Already have an account ?
                            <nuxt-link class="text-decoration-none" to="/customer/account/login">
                                Sign In
                            </nuxt-link>
                        </p>

                    </v-card>
                </v-col>
                <v-col md="4">
                    <v-img
                        class="mt-10 mx-auto"
                        width="350"
                        src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/account-logo.png"
                    ></v-img>

                    <v-divider color="orange" class="my-5"></v-divider>

                    <p class="title white--text">Create a 1StopBedrooms.com account to get these benefits and more:</p>

                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'login',
    head() {
        return {
            title: 'Create New Customer Account'
        }
    },
    data() {
        return {
            show1: false,
            show2: false,
            register: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            },
            rpassword: '',
            rules: {
                required: (v) => !!v || 'This field required.',
                minLenght: (v) => v.length >= 6 || 'Min 6 characters required',
                email: (v) => /\S+@\S+\.\S+/.test(v) || 'E-mail must be valid',
                passwordMatch: (v) =>
                    this.register.password === v || `Confirm Password doesn't match with Password`,
            },
        }
    },
    methods: {
        signUp() {
            if(this.register.firstName != '' && this.register.email != '' && this.register.password != '') {
                this.$axios
                    .$post(
                        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.FIREBASE_KEY}`,
                        {
                            displayName: this.register.firstName,
                            email: this.register.email,
                            password: this.register.password,
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
<style scoped>
</style>