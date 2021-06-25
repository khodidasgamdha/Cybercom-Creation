<template>
    <div>

        <!-- header -->
        <Header />

        <div class="email-preferances mx-16">
            <h2 class="font-weight-medium mt-5 mb-1">Email Preferences</h2>

            <v-divider></v-divider>

            <v-row>
                <v-col md="6" cols="12">
                    <v-checkbox v-model="offers">
                        <template v-slot:label>
                            <p class="mb-0 mt-7 font-weight-bold">Exclusive invitations and offers</p>
                            <p class="body-2">Hear about our exclusive sale previews and special promotions</p>
                        </template>
                    </v-checkbox>
                </v-col>
                <v-col md="6" cols="12">
                    <v-checkbox v-model="style">
                        <template v-slot:label>
                            <p class="mb-0 mt-7 font-weight-bold">Style Updates</p>
                            <p class="body-2">Stay up to date with our edit of the best new arrivals, Brands and trends</p>
                    </template>
                    </v-checkbox>
                </v-col>
                <v-col md="6" cols="12" class="pt-0">
                    <v-checkbox v-model="roundup">
                        <template v-slot:label>
                            <p class="mb-0 mt-7 font-weight-bold">Editorial Roundup</p>
                            <p class="body-2">Receive updates about products & services, special offers, news & events from 1StopBedrooms</p>
                        </template>
                    </v-checkbox>
                </v-col>
                <v-col md="6" cols="12" class="pt-0">
                    <v-checkbox v-model="all">
                        <template v-slot:label>
                            <p class="mb-0 mt-7 font-weight-bold">Unsubscribe from all</p>
                            <p class="body-2">You will still receive emails related to orders</p>
                        </template>
                    </v-checkbox>
                </v-col>
            </v-row>

            <v-divider></v-divider>

            <v-btn 
                class="d-flex ml-auto grey darken-3 text-capitalize px-16 my-7" 
                dark
            >
                Update
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
            title: 'Newsletter Subscription',
        }
    },
    data() {
        return {
            offers: false,
            style: false,
            roundup: false,
            all: true,
        }
    }
}
</script>

<style>
.email-preferances .v-label {
    font-size: 14px;
    color: black;
    font-weight: 500;
    display: block !important;
}
</style>