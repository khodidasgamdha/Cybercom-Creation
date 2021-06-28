<template>
    <div class="container">
        <v-col md="7" cols="12">
            <p class="headline font-weight-light">Forgot Your Password?</p>
            <h4 class="mt-5">Retrieve your password here.</h4>
            <p class="subtitle-1 font-weight-light mt-3 mb-0">Please enter your email address below. You will receive a link to reset your password.</p>
            
            <v-divider class="mt-2 mb-5"></v-divider>
            
            <!-- email -->
            <v-col sm="7" cols="12">
                <v-text-field
                    v-model="email"
                    label="Email Address"
                    outlined
                    dense
                    :rules="[rules.required, rules.email]"
                ></v-text-field>
            </v-col>

            <!-- back link & submit button -->
            <v-col sm="7" cols="12">
                <v-row class="justify-space-between">
                    <v-col cols="auto" class="align-self-center">
                        <n-link to="/customer/account/login" class="body-2 text-decoration-none">
                            <v-icon color="primary">mdi-chevron-left</v-icon>
                            Back to Login
                        </n-link>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn 
                            class="orange darken-3 text-capitalize rounded-sm px-10" 
                            dark
                            @click="submit()"
                        >
                            Submit
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>

        </v-col>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Forgot Your Password'
        }
    },
    data() {
        return {
            email: '',
            rules: {
                required: (v) => !!v || 'This field required.',
                email: (v) => /\S+@\S+\.\S+/.test(v) || 'E-mail must be valid',
            },
        }
    },
    methods: {
        submit() {
            (this.email != '') && console.log(this.email);
            alert("Please, Enter E-mail");
        }
    }
}
</script>

<style>
</style>