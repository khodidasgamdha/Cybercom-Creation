<template>
    <div>

        <!-- header -->
        <Header />

        <div class="mx-16">
            <h2 class="font-weight-medium mt-5 mb-1">Add New Address</h2>
            
            <v-divider></v-divider>

            <form>
                <!-- first name & last name -->
                <v-row class="mt-2">
                    <v-col md="3" sm="6" cols="12">
                        <v-text-field
                            v-model="user.firstName"
                            label="First Name"
                            outlined
                            dense
                            :rules="[rules.required, rules.minLenght]"
                        ></v-text-field>
                    </v-col>
                    <v-col md="3" sm="6" cols="12">
                        <v-text-field
                            v-model="user.lastName"
                            label="Last Name"
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                </v-row>

                <!-- company -->
                <v-row class="mt-0">
                    <v-col md="6" cols="12">
                        <v-text-field
                            v-model="user.company"
                            label="Company"
                            outlined
                            dense
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
                            :rules="[rules.required, rules.phoneNumber]"
                        ></v-text-field>
                    </v-col>
                    <v-col md="3" cols="12">
                        <v-text-field
                            v-model.number="user.alternatePhoneNumber"
                            label="Alternate Phone Number"
                            type="number"
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                </v-row>

                <!-- street address 1 -->
                <v-row class="mt-0">
                    <v-col md="6" cols="12">
                        <v-text-field
                            v-model="user.address1"
                            label="Street Address 1"
                            outlined
                            dense
                            :rules="[rules.required, rules.minLenght]"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <!-- street address 2 -->
                <v-row class="mt-0">
                    <v-col md="6" cols="12">
                        <v-text-field
                            v-model="user.address2"
                            label="Street Address 2"
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                </v-row>

                <!-- city & state -->
                <v-row class="mt-0">
                    <v-col md="3" cols="12">
                        <v-text-field
                            v-model="user.city"
                            label="City"
                            outlined
                            dense
                            :rules="[rules.required, rules.minLenght]"
                        ></v-text-field>
                    </v-col>
                    <v-col md="3" cols="12">
                        <v-select
                            v-model="user.state"
                            :items="states"
                            label="State"
                            outlined
                            dense
                            :rules="[rules.required]"
                        ></v-select>
                    </v-col>
                </v-row>

                <!-- zipcode -->
                <v-row class="mt-0">
                    <v-col md="3" cols="12">
                        <v-text-field
                            v-model.number="user.zipcode"
                            label="Zip/Postal Code"
                            type="number"
                            outlined
                            dense
                            :rules="[rules.required, rules.zipcode]"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <!-- cancle & save address button -->
                <v-row class="mt-0">
                    <v-col cols="auto">
                        <v-btn 
                            class="text-capitalize px-16 mb-10" 
                            dark
                            outlined
                            type="reset"
                            color="grey darken-3"
                    >
                            Cancel
                        </v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn 
                            class="grey darken-3 text-capitalize px-16 mb-10" 
                            dark
                            @click="saveAddress()"
                        >
                            Save Address
                        </v-btn>
                    </v-col>
                </v-row>
            </form>
            

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
            title: 'Add New Address',
        }
    },
    data() {
        return {
            user: {
                firstName: 'Ravi',
                lastName: 'Gajera',
                company: '',
                phoneNumber: '',
                alternatePhoneNumber: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                zipcode: '',
            },
            states: [
                'Andhra Pradesh',
                'Assam', 
                'Arunachal Pradesh', 
                'Bihar', 
                'Chhattisgarh',
                'Goa', 
                'Gujarat', 
                'Jammu and Kashmir', 
                'Jharkhand', 
                'Haryana', 
                'Himachal Pradesh', 
                'Karnataka', 
                'Kerala', 
                'Madhya Pradesh', 
                'Maharashtra', 
                'Manipur', 
                'Meghalaya', 
                'Mizoram', 
                'Nagaland', 
                'Orissa', 
                'Punjab', 
                'Rajasthan', 
                'Sikkim', 
                'Tamil Nadu', 
                'Tripura', 
                'Uttaranchal', 
                'Uttar Pradesh', 
                'West Bengal', 
            ],
            rules: {
                required: (v) => !!v || 'This field required.',
                minLenght: (v) => v.length >= 3 || 'Min 3 characters required',
                zipcode: (v) => /^\d{6}$/.test(v) || 'Zipcode must be valid',
                phoneNumber: (v) => /^[6789]\d{9}$/.test(v) || 'Phone Number must be valid',
            },
        }
    },
    methods: {
        saveAddress() {
            console.log(this.user);
        },
    }
}
</script>

<style>

</style>