<template>
    <div class="mx-16">
        <!-- links -->
        <v-breadcrumbs :items="links" class="mt-n10"></v-breadcrumbs>

        <v-row>
            <v-col md="3">
                <v-card width="260" flat>
                    <v-expansion-panels flat>
                        <v-expansion-panel
                            class="grey lighten-2"
                            v-for="(item, i) in 5"
                            :key="i"
                        >
                            <v-expansion-panel-header
                                class="body-1 font-weight-bold"
                            >
                                Shipping & Delivery
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <n-link
                                    class="text-decoration-none grey--text"
                                    to="/return-policy"
                                    >Return Policy</n-link
                                >
                            </v-expansion-panel-content>
                            <v-expansion-panel-content>
                                <n-link
                                    class="text-decoration-none grey--text"
                                    to="/return-policy"
                                    >Return Policy</n-link
                                >
                            </v-expansion-panel-content>
                            <v-expansion-panel-content>
                                <n-link
                                    class="text-decoration-none grey--text"
                                    to="/return-policy"
                                    >Return Policy</n-link
                                >
                            </v-expansion-panel-content>
                            <v-expansion-panel-content>
                                <n-link
                                    class="text-decoration-none grey--text"
                                    to="/return-policy"
                                    >Return Policy</n-link
                                >
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card>
            </v-col>

            <v-col md="9">

                <!-- contact box -->
                <v-card class="grey lighten-2 pa-5 mb-10" flat>
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