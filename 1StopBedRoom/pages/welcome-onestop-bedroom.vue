<template>
    <div class="container">
        <p class="display-1">Welcome to 1StopBedrooms!</p>
        <p class="title font-weight-light">
            Thanks for your interest in partnering with us. We’re excited to
            learn more about you, your business, and your products.
        </p>

        <p class="headline font-weight-bold">Primary Contact</p>

        <!-- first name -->
        <v-col>
            <v-text-field
                v-model="contact.firstName"
                label="First Name"
                outlined
                dense
                :rules="[rules.required]"
            ></v-text-field>
        </v-col>

        <!-- last name -->
        <v-col>
            <v-text-field
                v-model="contact.lastName"
                label="Last Name"
                outlined
                dense
            ></v-text-field>
        </v-col>

        <!-- email -->
        <v-col>
            <v-text-field
                v-model="contact.email"
                label="Email"
                outlined
                dense
            ></v-text-field>
        </v-col>

        <!-- phone number -->
        <v-col>
            <v-text-field
                v-model="contact.phoneNumber"
                label="Phone Number"
                outlined
                dense
            ></v-text-field>
        </v-col>

        <!-- role -->
        <v-col>
            <v-select
                v-model="contact.role"
                :items="topics"
                label="Your Role"
                outlined
                dense
            ></v-select>
        </v-col>

        <v-divider class="mb-7 grey"></v-divider>

        <!-- Business -->
        <p class="headline font-weight-bold">Business</p>

        <!-- company name -->
        <v-col>
            <v-text-field
                v-model="contact.companyName"
                label="Company Name"
                outlined
                dense
            ></v-text-field>
        </v-col>

        <!-- website url -->
        <v-col>
            <v-text-field
                v-model="contact.webURL"
                label="Website URL"
                outlined
                dense
            ></v-text-field>
        </v-col>

        <!-- List all the brand names you sell under -->
        <v-col>
            <v-textarea
                v-model="contact.brands"
                label="List all the brand names you sell under"
                outlined
                dense
            />
        </v-col>

        <!-- products -->
        <v-col>
            <v-select
                v-model="contact.products"
                :items="productsNumber"
                label="How many Products are in your cateloge?"
                outlined
                dense
                :rules="[rules.required]"
            ></v-select>
        </v-col>

        <!-- categories -->
        <p class="mb-3">What product categories do you offer? </p>
        <v-row no-gutters>
            <v-col cols="4" class="mt-n5" v-for="(item, i) in productCategories" :key="i">
                <v-checkbox
                    v-model="contact.categories"
                    :label="item"
                    :value="item"
                    :rules="[rules.required]"
                ></v-checkbox>
            </v-col>
        </v-row>

        <!-- submit -->
        <v-btn
            class="orange darken-2 rounded-xl px-10"
            large
            dark
            @click="submit()"
            >Submit</v-btn
        >
    </div>
</template>

<script>
export default {
    data() {
        return {
            contact: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                role: '',
                companyName: '',
                webURL: '',
                brands: '',
                products: '',
                categories: []
            },
            topics: [1, 2, 3, 4, 5],
            productsNumber: ["0-100", '100.250', '250-500', '500-1000', '1000-2000', '>2000'],
            productCategories: ['Furniture', 'Decor', 'Outdoor', 'Game Room', 'Bed & Bath', 'Kitchen', 'Lighting', 'Baby& Kids', 'Other'],
            rules: {
                required: (v) => !!v || 'This field required.',
            },
        }
    },
    methods: {
        submit() {
            console.log(this.contact)
        },
    },
}
</script>

<style>
</style>