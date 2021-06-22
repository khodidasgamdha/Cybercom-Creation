<template>
    <v-row>
        <!-- first name -->
        <v-col sm="6" cols="12" class="py-0">
            <v-text-field
                v-model="address.firstName"
                label="First Name"
                outlined
                dense
                :rules="[rules.required, rules.minLenght]"
            ></v-text-field>
        </v-col>

        <!-- last name -->
        <v-col sm="6" cols="12" class="py-0">
            <v-text-field
                v-model="address.lastName"
                label="Last Name"
                outlined
                dense
                :rules="[rules.required, rules.minLenght]"
            ></v-text-field>
        </v-col>

        <!-- company -->
        <v-col cols="12" class="py-0">
            <v-text-field
                v-model="address.company"
                label="Company (Optional)"
                outlined
                dense
            ></v-text-field>
        </v-col>

        <!-- phone number -->
        <v-col sm="6" cols="12" class="py-0">
            <v-text-field
                v-model.number="address.phoneNumber"
                label="Phone Number"
                type="number"
                outlined
                dense
                :rules="[rules.required, rules.phoneNumber]"
            ></v-text-field>
        </v-col>

        <!-- alternative number -->
        <v-col sm="6" cols="12" class="py-0">
            <v-text-field
                v-model.number="address.alternateNumber"
                label="Alternate Number (Optional)"
                type="number"
                outlined
                dense
            ></v-text-field>
        </v-col>

        <!-- street address -->
        <v-col cols="12" class="py-0">
            <v-text-field
                v-model="address.streetAddress"
                label="Street Address"
                outlined
                dense
                :rules="[rules.required, rules.minLenght]"
            ></v-text-field>
        </v-col>

        <!-- apartment -->
        <v-col cols="12" class="py-0">
            <v-text-field
                v-model="address.apartment"
                label="Apartment, suite, etc (Optional)"
                outlined
                dense
            ></v-text-field>
        </v-col>

        <!-- city -->
        <v-col sm="4" cols="12" class="py-0">
            <v-text-field
                v-model="address.city"
                label="City"
                outlined
                dense
                :rules="[rules.required, rules.minLenght]"
            ></v-text-field>
        </v-col>

        <!-- state -->
        <v-col sm="4" cols="12" class="py-0">
            <v-select
                v-model="address.state"
                :items="states"
                label="State"
                outlined
                dense
                :rules="[rules.required]"
            ></v-select>
        </v-col>

        <!-- zipcode -->
        <v-col sm="4" cols="12" class="py-0">
            <v-text-field
                v-model.number="address.zipcode"
                label="Zip/Postal Code"
                type="number"
                outlined
                dense
                :rules="[rules.required, rules.zipcode]"
            ></v-text-field>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            address: {
                firstName: '',
                lastName: '',
                company: '',
                phoneNumber: '',
                alternateNumber: '',
                streetAddress: '',
                apartment: '',
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
                phoneNumber: (v) => /^[6789]\d{9}$/.test(v) || 'Phone Number must be valid',
                zipcode: (v) => /^\d{6}$/.test(v) || 'Zipcode must be valid',
            },
        }
    },
}
</script>

<style>
</style>