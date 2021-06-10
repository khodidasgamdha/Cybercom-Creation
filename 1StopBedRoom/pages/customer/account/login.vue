<template>
    <div>
        <v-divider class="orange darken-1 pt-5"></v-divider>
        <div class="blue darken-4">

            <v-row class="justify-center py-12">
                
                <!-- form -->
                <v-col md="auto">
                    <v-card tile flat width="465" class="mx-auto">
                        <v-card-text class="px-10">

                            <!-- title -->
                            <p class="text-center title black--text py-4">
                                <span class="font-weight-light">Sign in to</span>
                                1StopBedrooms.com
                            </p>

                            <v-form>

                                <!-- email -->
                                <v-text-field
                                    v-model="email"
                                    label="Email"
                                    outlined
                                    dense
                                    :rules="[rules.required]"
                                ></v-text-field>

                                <!-- password -->
                                <v-text-field
                                    v-model="password"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show1 ? 'text' : 'password'"
                                    label="Password"
                                    outlined
                                    dense
                                    :rules="[rules.required, rules.minLenght]"
                                    @click:append="show1 = !show1"
                                ></v-text-field>

                                <v-btn
                                    height="45"
                                    class="primary text-capitalize"
                                    dark
                                    block
                                    @click="signIn(email, password)"
                                    >Sign In</v-btn
                                >

                            </v-form>

                            <p class="mt-2 black--text">
                                <span>By continuing you agree to our</span>
                                <n-link class="text-decoration-none" to="/terms-and-conditions">Terms and Conditions</n-link>
                                <span>and our</span>
                                <n-link class="text-decoration-none" to="/privacy-policy">Privacy Policy.</n-link>
                            </p>
                            <p class="black--text">
                                <span>Forgot your password?</span>
                                <n-link class="text-decoration-none" to="/customer/account/forgotpassword">Reset it</n-link>
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
                            Don't have an account ?
                            <nuxt-link class="text-decoration-none" to="/customer/account/create">
                                Create one
                            </nuxt-link>
                        </p>

                    </v-card>
                </v-col>

                <!-- image -->
                <v-col md="auto" class="ml-16">
                    <v-img
                        width="300"
                        class="mt-10"
                        src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/account-logo.png"
                    ></v-img>
                </v-col>
                
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'login',
    data() {
        return {
            show1: false,
            email: '',
            password: '',
            rules: {
                required: (v) => !!v || 'This field required.',
                minLenght: (v) => v.length >= 6 || 'Min 6 characters required',
            },
        }
    },
    methods: {
        signIn(email, password) {
            console.log(email, password);
        },
    },
}
</script>
<style scoped>
</style>