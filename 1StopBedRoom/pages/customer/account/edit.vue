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
                        disabled
                    ></v-text-field>
                </v-col>
                <v-col md="3" sm="6" cols="12">
                    <v-text-field
                        v-model="user.lastName"
                        label="Last Name"
                        outlined
                        dense
                        disabled
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
                        disabled
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
                        disabled
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
                        disabled
                    ></v-text-field>
                </v-col>
            </v-row>

            <!-- password -->
            <v-row class="mt-0">
                <v-col md="3" cols="12">
                    <v-text-field
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
                class="grey darken-3 text-capitalize px-16 mb-10" 
                dark
            >
                Edit
            </v-btn>

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
        }
    }
}
</script>

<style>

</style>