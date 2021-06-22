<template>
    <div class="mx-16">
        <!-- links -->
        <v-breadcrumbs :items="links" class="mt-n4 px-0"></v-breadcrumbs>

        <v-row>
            <v-col md="auto">
                <v-card width="260" flat>
                    <v-expansion-panels flat>
                        <v-expansion-panel
                            class="grey lighten-4"
                            v-for="(item, i) in sidebarLinks"
                            :key="i"
                        >
                            <v-expansion-panel-header
                                class="body-1 font-weight-bold text-uppercase"
                            >
                                {{ item.heading }}
                            </v-expansion-panel-header>
                            <v-expansion-panel-content v-for="(ln, i) in item.links" :key="i">
                                <n-link
                                    class="text-decoration-none grey--text body-2"
                                    :to="ln.link"
                                    >{{ ln.title }}</n-link
                                >
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
            </v-col>

            <v-col md="9">

                <!-- contact box -->
                <v-card class="grey lighten-4 pa-5 mb-10" flat>
                    <v-row>

                        <!-- contact box -->
                        <v-col md="8">
                            <p
                                class="
                                    display-1
                                    font-weight-bold
                                    primary--text
                                    pb-5
                                "
                            >
                                Contact Us
                            </p>

                                <!-- call us -->
                                <v-card class="mb-10 px-5" flat>
                                    <v-row>
                                        <v-col>
                                            <v-btn
                                                class="mx-2"
                                                fab
                                                dark
                                                small
                                                color="primary"
                                            >
                                                <v-icon dark>
                                                    mdi-phone
                                                </v-icon>
                                            </v-btn>
                                            <span class="title primary--text"
                                                >Call Us</span
                                            >
                                        </v-col>
                                        <v-spacer></v-spacer>
                                        <v-col md="auto">
                                            <p class="grey--text mb-0">
                                                Toll Free
                                            </p>
                                            <a
                                                class="
                                                    text-decoration-none
                                                    headline
                                                    font-weight-bold
                                                "
                                                href="tel: 877-958-9203"
                                                >877-958-9203</a
                                            >
                                            <v-divider class="my-2"></v-divider>
                                            <p class="body-2 mb-0">
                                                <span class="black--text"
                                                    >Press 1</span
                                                >
                                                <span class="grey--text"
                                                    >for Sales or Product
                                                    Questions</span
                                                >
                                            </p>
                                            <p class="body-2">
                                                <span class="black--text"
                                                    >Press 2</span
                                                >
                                                <span class="grey--text"
                                                    >for After Order
                                                    Inquiries</span
                                                >
                                            </p>
                                        </v-col>
                                    </v-row>
                                </v-card>

                                <!-- form -->
                                <v-card class="pa-5" flat>
                                    <v-btn
                                        class="mx-2"
                                        fab
                                        dark
                                        small
                                        color="primary"
                                    >
                                        <v-icon dark> mdi-mail </v-icon>
                                    </v-btn>
                                    <span class="title primary--text"
                                        >Send us a Message</span
                                    >

                                    <v-row class="mt-5 justify-space-around">
                                        <!-- first name -->
                                        <v-col md="6">
                                            <v-text-field
                                                v-model="contact.firstName"
                                                label="First Name"
                                                outlined
                                                dense
                                                :rules="[
                                                    rules.required,
                                                    rules.minLenght,
                                                ]"
                                            ></v-text-field>
                                        </v-col>

                                        <!-- last name -->
                                        <v-col md="6">
                                            <v-text-field
                                                v-model="contact.lastName"
                                                label="Last Name"
                                                outlined
                                                dense
                                                :rules="[
                                                    rules.required,
                                                    rules.minLenght,
                                                ]"
                                            ></v-text-field>
                                        </v-col>

                                        <!-- email -->
                                        <v-col md="6" class="mt-n5">
                                            <v-text-field
                                                v-model="contact.email"
                                                label="Email"
                                                outlined
                                                dense
                                                :rules="[rules.required]"
                                            ></v-text-field>
                                        </v-col>

                                        <!-- phone number -->
                                        <v-col md="6" class="mt-n5">
                                            <v-text-field
                                                v-model="contact.phoneNumber"
                                                label="Phone Number"
                                                outlined
                                                dense
                                                :rules="[rules.required]"
                                            ></v-text-field>
                                        </v-col>

                                        <!-- topic -->
                                        <v-col md="12" class="mt-n5">
                                            <v-select
                                                v-model="contact.topic"
                                                :items="topics"
                                                label="Topics"
                                                outlined
                                                dense
                                                :rules="[rules.required]"
                                            ></v-select>
                                        </v-col>

                                        <!-- message -->
                                        <v-col md="12" class="mt-n5">
                                            <v-textarea
                                                v-model="contact.message"
                                                label="Message"
                                                outlined
                                                dense
                                                :rules="[rules.required]"
                                            />
                                        </v-col>

                                        <!-- file -->
                                        <v-col md="12" class="mt-n5">
                                            <v-file-input
                                                v-model="contact.file"
                                                label="File input"
                                                outlined
                                                dense
                                                :rules="[rules.required]"
                                            ></v-file-input>
                                        </v-col>

                                        <!-- submit -->
                                        <v-col md="12" class="mt-n5">
                                            <v-btn
                                                block
                                                class="primary"
                                                @click="submit()"
                                                >Submit</v-btn
                                            >
                                        </v-col>
                                    </v-row>
                                </v-card>
                        </v-col>

                        <!-- image -->
                        <v-col md="4" class="align-self-end">
                            <img 
                                src="@/assets/images/contact-form.png" 
                                alt=""
                                width="300"
                            >     
                        </v-col>
                    </v-row>

                    <!-- google map -->
                    <div class="mt-5">
                        <GoogleMap />
                    </div>

                </v-card>
            </v-col>
        </v-row>

    </div>
</template>

<script>
import GoogleMap from '~/components/GoogleMap'

export default {
    head() {
        return {
            title: 'Submit a Request - Help Center'
        }
    },
    components: { GoogleMap },
    data() {
        return {
            contact: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                topic: '',
                message: '',
                file: {},
            },
            topics: [1, 2, 3, 4, 5],
            links: [
                {
                    text: 'Home',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Help Center',
                    disabled: false,
                    href: '/help-center',
                },
                {
                    text: 'Contact Us',
                    disabled: true,
                    href: '/contact-us',
                },
            ],
            sidebarLinks: [
                {
                    heading: 'Shipping & Delivery',
                    links: [
                        { title: 'Track My Order', link: '/sales/guest/form' },
                        {
                            title: 'Shipping Information',
                            link: '/policy/shipping-and-delivery',
                        },
                        {
                            title: 'Free Shipping',
                            link: '/policy/free-shipping',
                        },
                        {
                            title: 'Delivery Options',
                            link: '/policy/white-glove-delivery',
                        },
                        {
                            title: 'International Shipping',
                            link: '/policy/international-shipping',
                        },
                    ],
                },
                {
                    heading: 'Policies',
                    links: [
                        { title: 'COVID-19 Policy', link: '/policy/covid19' },
                        {
                            title: 'Return Policy',
                            link: '/policy/return-policy',
                        },
                        {
                            title: 'Cancellation Policy',
                            link: '/policy/return-policy#cancellation-policy',
                        },
                        { title: 'Privacy Policy', link: '/policy/privacy-policy' },
                        {
                            title: 'Terms & Conditions',
                            link: '/policy/terms-and-conditions',
                        },
                    ],
                },
                {
                    heading: 'Help With an Order',
                    links: [
                        {
                            title: 'Check My Order Status',
                            link: '/sales/guest/form',
                        },
                        {
                            title: 'I Received a Incomplete Order',
                            link: '/policy/order-help#i-received-order',
                        },
                        {
                            title: 'My Item Arrived Damaged',
                            link: '/policy/order-help#i-received-damaged',
                        },
                        { title: 'My Item is Missing Parts', link: '/policy/order-help#missing-parts' },
                        { title: 'I Received The Wrong Item', link: '/policy/order-help#i-received-item' },
                    ],
                },
                {
                    heading: 'Payment',
                    links: [
                        {
                            title: 'Payment Methods',
                            link: '/policy/billing-and-payment',
                        },
                        {
                            title: 'Financing',
                            link: '/affirm-financing',
                        },
                        {
                            title: 'Sales Tax',
                            link: '/policy/sales-tax#sales-tax',
                        },
                    ],
                },
                {
                    heading: 'Account',
                    links: [
                        {
                            title: 'My Account',
                            link: '/customer/account/login',
                        },
                        {
                            title: 'My Orders',
                            link: '/sales/order/history',
                        },
                        {
                            title: 'Unsubscribe From Emails',
                            link: '/newsletter/manage',
                        },
                    ],
                },
            ],
            rules: {
                required: (v) => !!v || 'This field required.',
                minLenght: (v) => v.length >= 6 || 'Min 6 characters required',
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