<template>
    <div>

        <!-- header -->
        <Header />

        <div class="mx-16">
            <h2 class="font-weight-regular mt-5 mb-1">Account Details</h2>
            
            <v-divider></v-divider>
            
            <!-- first name & last name -->
            <v-row class="mt-2">
                <v-col md="3" sm="6" cols="12">
                    <v-text-field
                        v-model="user.firstName"
                        label="First Name"
                        outlined
                        dense
                        :disabled="disable"
                    ></v-text-field>
                </v-col>
                <v-col md="3" sm="6" cols="12">
                    <v-text-field
                        v-model="user.lastName"
                        label="Last Name"
                        outlined
                        dense
                        :disabled="disable"
                    ></v-text-field>
                </v-col>
            </v-row>

            <!-- email -->
            <v-row class="mt-0">
                <v-col md="3" cols="12">
                    <v-text-field
                        v-model="user.email"
                        label="Email"
                        outlined
                        dense
                        :disabled="disable"
                    ></v-text-field>
                </v-col>
            </v-row>

            <!-- confirm email -->
            <v-row class="mt-0">
                <v-col md="3" cols="12">
                    <v-text-field
                        v-if="!disable"
                        v-model="confirmEmail"
                        label="Confirm Email"
                        outlined
                        dense
                        required
                        :rules="[
                            rules.required, 
                            rules.email, 
                            rules.emailMatch
                        ]"
                    ></v-text-field>
                </v-col>
            </v-row>

            <!-- phone number -->
            <v-row class="mt-0">
                <v-col md="3" cols="12">
                    <v-text-field
                        v-model.number="user.phoneNumber"
                        label="Phone Number"
                        type="number"
                        outlined
                        dense
                        :disabled="disable"
                    ></v-text-field>
                </v-col>
            </v-row>

            <!-- date -->
            <v-row class="mt-0">
                <v-col md="3" cols="12">
                    <v-text-field
                        v-model="user.date"
                        label="DOB"
                        type="date"
                        outlined
                        dense
                        :disabled="disable"
                    ></v-text-field>
                </v-col>
            </v-row>

            <!-- password -->
            <v-row class="mt-0">
                <v-col md="3" cols="12">
                    <v-text-field
                        v-if="disable"
                        v-model="user.password"
                        label="Password"
                        type="password"
                        outlined
                        dense
                        disabled
                    ></v-text-field>
                </v-col>
            </v-row>

            <!-- edit button -->
            <v-btn 
                v-if="disable"
                class="grey darken-3 text-capitalize px-16 mb-10" 
                dark
                @click="disable = false"
            >
                Edit
            </v-btn>

            <!-- update button -->
            <div v-else>
                <v-row>
                    <v-col cols="auto">
                        <v-btn 
                            class="text-capitalize px-16 mb-10" 
                            color="grey darken-3"
                            dark
                            outlined
                            @click="disable = true"
                        >
                            Cancel
                        </v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn 
                            class="grey darken-3 text-capitalize px-16 mb-10" 
                            dark
                        >
                            Update
                        </v-btn>
                    </v-col>
                </v-row>

                <h3 class="font-weight-regular">Password</h3>
                <v-btn class="text-capitalize indigo darken-1 mt-5 mb-10" dark>
                    Reset Password
                </v-btn>
            </div>

        </div>

    </div>
</template>

<script>
import Header from '~/components/Account/Header'

export default {
    middleware: 'auth',
    components: {
        Header,
    },
    head() {
        return {
            title: 'Account Information',
        }
    },
    data() {
        return {
            user: {
                firstName: 'Ravi',
                lastName: 'Gajera',
                email: 'ravi@gmail.com',
                phoneNumber: 9876543210,
                dob: '',
                password: 'abcdef',
            },
            disable: true,
            confirmEmail: '',
            rules: {
                required: (v) => !!v || 'This field required.',
                email: (v) => /\S+@\S+\.\S+/.test(v) || 'E-mail must be valid',
                emailMatch: (v) => this.user.email === v || `Confirm Email doesn't match with Email`,
            }
        }
    },
}
</script>

<style>
</style>