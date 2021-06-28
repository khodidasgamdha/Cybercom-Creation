<template>
    <div>
        <v-divider class="orange darken-1 pt-5"></v-divider>
        <div class="blue darken-4">
            <v-row class="py-12 mb-3 justify-center">

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

                            <!-- trems & conditions -->
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

                            <!-- facebook -->
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

                        <!-- sign in -->
                        <p class="grey lighten-2 py-8 text-center">
                            Already have an account ?
                            <nuxt-link class="text-decoration-none" to="/customer/account/login">
                                Sign In
                            </nuxt-link>
                        </p>

                    </v-card>
                </v-col>

                <!-- logo -->
                <v-col md="4">
                    <v-img
                        class="mt-10 mx-auto"
                        width="350"
                        src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/account-logo.png"
                    ></v-img>

                    <v-divider color="orange" class="my-5"></v-divider>

                    <p class="title white--text">Create a 1StopBedrooms.com account to get these benefits and more:</p>

                    <!-- benifits -->
                    <v-row v-for="(item, i) in benifits" :key="i">
                        <v-col cols="auto">
                            <img :src="item.icon" :alt="item.info">
                        </v-col>
                        <v-col cols="auto">
                            <p class="white--text title mb-0 font-weight-light">
                                <span>{{ item.info1 }}</span><br>
                                <span>{{ item.info2 }}</span>
                            </p>
                        </v-col>
                    </v-row>

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
            benifits: [
                {
                    icon: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/online-store-icon.png?vef656678',
                    info1: 'Enhanced online and store',
                    info2: 'purchase information',
                },
                {
                    icon: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/tracking-icon.png?v3819f6f0',
                    info1: 'Faster checkout & ',
                    info2: 'easy order tracking',
                },
                {
                    icon: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/protection-plans-icon.png?ved34c8ea',
                    info1: 'Access to your protection',
                    info2: 'plans and services',
                },
                {
                    icon: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/exclusive-offer.png?v3857f736',
                    info1: 'Exclusive member-only',
                    info2: 'offers',
                },
            ],
            rules: {
                required: (v) => !!v || 'This field required.',
                minLenght: (v) => v.length >= 6 || 'Min 6 characters required',
                email: (v) => /\S+@\S+\.\S+/.test(v) || 'E-mail must be valid',
                passwordMatch: (v) =>
                    this.register.password === v || `Confirm Password doesn't match with Password`,
            },
        }
    },
    mounted() {
        (!!this.$store.state.auth.loggedIn) && this.$router.push('/customer/account/welcome');
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
                    .then((res) => this.handleToken(res))
                    .catch((err) => console.log(err))
            }
        },
        handleToken(user) {
            this.$cookies.set('user', user)
            this.$store.commit('auth/setLoggedIn', true)
            this.$store.commit('auth/setUserInfo', user)
            this.$router.push('/customer/account/welcome')
        },
    },
}
</script>
<style scoped>
</style>