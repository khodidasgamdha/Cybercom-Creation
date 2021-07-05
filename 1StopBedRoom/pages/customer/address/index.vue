<template>
    <div v-if="addresses.length != 0" class="mb-10">
        <!-- header -->
        <Header />

        <div class="mx-16">
            <h2 class="font-weight-medium mt-5 mb-1">Address Book</h2>

            <v-divider></v-divider>

            <!-- billing address & shipping address -->
            <v-row class="mt-5 mx-0">
                <v-col
                    v-if="defaultBilling"
                    cols="4"
                    class="grey lighten-4 mr-5"
                >
                    <div class="row ma-auto">
                        <p class="subtitle-1 font-weight-bold">
                            Default Billing Address
                        </p>
                        <n-link
                            :to="`/customer/address/edit/id/${defaultBilling.id}`"
                            class="body-1 text-decoration-none ml-auto"
                            >Edit</n-link
                        >
                    </div>
                    <p class="mb-0 body-2">
                        {{ defaultBilling.firstName }}
                        {{ defaultBilling.lastName }}
                    </p>
                    <p class="mb-0 body-2">{{ defaultBilling.company }}</p>
                    <p class="mb-0 body-2">{{ defaultBilling.address1 }}</p>
                    <p class="mb-0 body-2">{{ defaultBilling.address2 }}</p>
                    <p class="mb-0 body-2">
                        {{ defaultBilling.city }}, {{ defaultBilling.state }},
                        {{ defaultBilling.zipcode }}
                    </p>
                    <p class="mb-0 body-2">
                        T: {{ defaultBilling.phoneNumber }}
                    </p>
                    <p
                        v-if="defaultBilling.alternatePhoneNumber"
                        class="mb-0 body-2"
                    >
                        Alternative No:
                        {{ defaultBilling.alternatePhoneNumber }}
                    </p>
                </v-col>
                <v-col v-if="defaultShipping" cols="4" class="grey lighten-4">
                    <div class="row ma-auto">
                        <p class="subtitle-1 font-weight-bold">
                            Default Shipping Address
                        </p>
                        <n-link
                            :to="`/customer/address/edit/id/${defaultShipping.id}`"
                            class="body-1 text-decoration-none ml-auto"
                            >Edit</n-link
                        >
                    </div>
                    <p class="mb-0 body-2">
                        {{ defaultShipping.firstName }}
                        {{ defaultShipping.lastName }}
                    </p>
                    <p class="mb-0 body-2">{{ defaultShipping.company }}</p>
                    <p class="mb-0 body-2">{{ defaultShipping.address1 }}</p>
                    <p class="mb-0 body-2">{{ defaultShipping.address2 }}</p>
                    <p class="mb-0 body-2">
                        {{ defaultShipping.city }}, {{ defaultShipping.state }},
                        {{ defaultShipping.zipcode }}
                    </p>
                    <p class="mb-0 body-2">
                        T: {{ defaultShipping.phoneNumber }}
                    </p>
                    <p
                        v-if="defaultShipping.alternatePhoneNumber"
                        class="mb-0 body-2"
                    >
                        Alternative No:
                        {{ defaultShipping.alternatePhoneNumber }}
                    </p>
                </v-col>
            </v-row>

            <!-- other addresses -->
            <div v-for="(address, i) in addresses" :key="i">
                <v-card
                    v-if="!address.billingDefault && !address.shippingDefault"
                    class="grey lighten-4 rounded-0 mt-7 pa-5"
                    flat
                    width="460"
                >
                    <div class="row ma-auto">
                        <p class="subtitle-1 font-weight-bold">
                            Additional Address
                        </p>
                        <p class="ml-auto body-2">
                            <n-link
                                :to="`/customer/address/edit/id/${address.id}`"
                                class="text-decoration-none"
                                >Edit</n-link
                            >
                            |
                            <v-btn
                                class="text-capitalize pa-0 primary--text"
                                text
                                @click="deleteAddress(address.id)"
                                >Delete</v-btn
                            >
                        </p>
                    </div>
                    <p class="mb-0 body-2">
                        {{ address.firstName }} {{ address.lastName }}
                    </p>
                    <p class="mb-0 body-2">{{ address.company }}</p>
                    <p class="mb-0 body-2">{{ address.address1 }}</p>
                    <p class="mb-0 body-2">{{ address.address2 }}</p>
                    <p class="mb-0 body-2">
                        {{ address.city }}, {{ address.state }},
                        {{ address.zipcode }}
                    </p>
                    <p class="mb-0 body-2">T: {{ address.phoneNumber }}</p>
                    <p v-if="address.alternatePhoneNumber" class="mb-0 body-2">
                        Alternative No: {{ address.alternatePhoneNumber }}
                    </p>
                </v-card>
            </div>

            <!-- add new address -->
            <v-card
                v-if="!additionalAddresses || addresses.length == 1"
                align="center"
                class="grey lighten-4 rounded-0 mt-7 pa-5"
                flat
                width="460"
            >
                <p class="body-2 m-4 text-center">
                    You have no additional address entries in your address book.
                </p>
                <v-btn
                    class="grey darken-3 text-capitalize mb-5 px-12"
                    large
                    dark
                    to="/customer/address/new"
                >
                    Add New Address
                </v-btn>
            </v-card>
            <v-btn
                v-else
                class="grey darken-3 text-capitalize mt-5 px-12"
                large
                dark
                to="/customer/address/new"
            >
                Add New Address
            </v-btn>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '~/components/Account/Header'

export default {
    middleware: 'auth',
    components: {
        Header,
    },
    head() {
        return {
            title: 'Address Book',
        }
    },
    computed: {
        ...mapGetters('address', [
            'addresses',
            'defaultBilling',
            'defaultShipping',
            'additionalAddresses'
        ]),
    },
    mounted() {
        this.addresses.length == 0 && this.$router.push('/customer/address/new')
        this.$store.commit('address/getBillingAddress')
        this.$store.commit('address/getShippingAddress')
        this.$store.commit('address/isAdditionalAddresses')
    },
    methods: {
        deleteAddress(id) {
            if(confirm('Are you sure you want to delete this address?')) {
                this.$store.commit('address/removeAddress', id)
            }
        },
    },
}
</script>

<style>
</style>