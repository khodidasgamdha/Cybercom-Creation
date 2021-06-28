<template>
    <v-row>

        <v-col cols="3">
            <Sidebar />
        </v-col>
        <v-col class="my-10 mr-10">
        <p class="display-2 font-weight-bold indigo--text text-uppercase">
            Contact Us
        </p>

        <v-row class="mt-5">
            <!-- sales & support -->
            <v-col md="4">
                <p class="headline font-weight-bold">Sales & Support</p>
                <v-divider class="mb-5"></v-divider>
                <n-link to="/contact-us" class="text-decoration-none"
                    >Use Our Contact Form</n-link
                >
                <p class="title font-weight-light">or call 866-456-8823</p>
            </v-col>

            <!-- media -->
            <v-col md="4">
                <p class="headline font-weight-bold">Media</p>
                <v-divider class="mb-5"></v-divider>
                <a
                    href="mailto: press@1stopbedrooms.com"
                    class="text-decoration-none"
                    >press@1stopbedrooms.com</a
                >
            </v-col>

            <!-- careers -->
            <v-col md="4">
                <p class="headline font-weight-bold">Careers</p>
                <v-divider class="mb-5"></v-divider>
                <a
                    href="mailto: jobs@1stopbedrooms.com"
                    class="text-decoration-none"
                    >jobs@1stopbedrooms.com</a
                >
            </v-col>
        </v-row>

        <v-row>
            <!-- google map -->
            <v-col md="8">
                <GoogleMap />
            </v-col>

            <!-- address -->
            <v-col>
                <p class="headline font-weight-bold">Corporate Headquarters</p>
                <v-divider class="mb-5"></v-divider>
                <p class="title font-weight-light">
                    1716 Coney Island Avenue <br /> 
                    Brooklyn, NY 11230
                </p>
            </v-col>
        </v-row>
        </v-col>
    </v-row>
</template>

<script>
import GoogleMap from '../components/GoogleMap'
import Sidebar from '../components/CMS/Sidebar'

export default {
    layout: 'cms',
    head() {
        return {
            title: 'Contact Us',
        }
    },
    components: {
        GoogleMap,
        Sidebar
    },
}
</script>

<style scoped>
p {
    font-size: 16px;
}
</style>