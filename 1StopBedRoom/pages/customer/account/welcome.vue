<template>
    <div>
        <!-- header -->
        <Header />

        <!-- cards -->
        <div class="grey lighten-4">
            <h1 class="text-center text-uppercase py-12 indigo--text">
                Welcome, Ravi!
            </h1>

            <v-row class="justify-center">
                <v-col md="3" sm="6" v-for="(card, i) in firstCards" :key="i">
                    <v-card align="center" flat>
                        <n-link
                            class="text-decoration-none"
                            to="/sales/order/history"
                        >
                            <img :src="card.img" :alt="card.title" />
                            <p class="title indigo--text mb-0">
                                {{ card.title }}
                            </p>
                            <p class="body-2 pb-5 black--text">
                                {{ card.info }}
                            </p>
                        </n-link>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="justify-center">
                <v-col md="3" sm="6" v-for="(card, i) in secondCards" :key="i">
                    <v-card align="center" flat>
                        <n-link
                            class="text-decoration-none"
                            to="/sales/order/history"
                        >
                            <img :src="card.img" :alt="card.title" />
                            <p class="title indigo--text mb-0">
                                {{ card.title }}
                            </p>
                            <p class="body-2 pb-5 black--text">
                                {{ card.info }}
                            </p>
                        </n-link>
                    </v-card>
                </v-col>
            </v-row>
        </div>

        <!-- buttons -->
        <v-row class="justify-center my-10">
            <v-col md="3" cols="6">
                <v-btn
                    class="text-capitalize indigo darken-4 py-12 rounded-xl"
                    dark
                    block
                    to="/policy/white-glove-delivery"
                >
                    <span class="title">White Glove Delivery</span>
                    <v-icon color="orange darken-2" class="ml-3"
                        >mdi-arrow-right</v-icon
                    >
                </v-btn>
            </v-col>
            <v-col md="3" cols="6">
                <v-btn
                    class="text-capitalize indigo darken-4 py-12 rounded-xl"
                    dark
                    block
                    to="/affirm-financing"
                >
                    <span class="title">Buy Now, Pay Later</span>
                    <v-icon color="orange darken-2" class="ml-3"
                        >mdi-arrow-right</v-icon
                    >
                </v-btn>
            </v-col>
        </v-row>

        <!-- customer service -->
        <div class="grey lighten-4 py-10">
            <v-card class="mx-16 py-10 px-16" flat>
                <v-card-text class="black--text">

                    <!-- title -->
                    <h1 class="text-center">Customer Service</h1>
                    
                    <v-divider class="my-5"></v-divider>
                    
                    <p class="title">How can we help you?</p>
                    
                    <!-- links -->
                    <v-row class="justify-space-between mr-10">
                        <v-col md="auto">
                            <n-link
                                class="text-decoration-none indigo--text"
                                to="/policy/shipping-and-delivery"
                                >Shipping Information</n-link
                            ><br />
                            <n-link
                                class="text-decoration-none indigo--text"
                                to="/policy/white-glove-delivery"
                                >Delivery Options</n-link
                            ><br />
                            <n-link
                                class="text-decoration-none indigo--text"
                                to="/sales/guest/form"
                                >Track My Order</n-link
                            >
                        </v-col>
                        <v-col md="auto">
                            <n-link
                                class="text-decoration-none indigo--text"
                                to="/policy/international-shipping"
                                >International Shipping</n-link
                            ><br />
                            <n-link
                                class="text-decoration-none indigo--text"
                                to="/policy/free-shipping"
                                >Free Shipping</n-link
                            ><br />
                            <n-link
                                class="text-decoration-none indigo--text"
                                to="/newsletter/manage"
                                >Unsubscribe From Emails</n-link
                            >
                        </v-col>
                        <v-col md="auto">
                            <n-link
                                class="text-decoration-none indigo--text"
                                to="/policy/billing-and-payment#payment-methods"
                                >Payment Methods</n-link
                            ><br />
                            <n-link
                                class="text-decoration-none indigo--text"
                                to="//billing-and-payment#ordering-options"
                                >Ordering Options</n-link
                            >
                        </v-col>
                        <v-col md="auto">
                            <n-link
                                class="text-decoration-none indigo--text"
                                to="/policy/sales-tax"
                                >Sales Tax</n-link
                            ><br />
                            <n-link
                                class="
                                    text-decoration-none
                                    indigo--text
                                    font-weight-bold
                                "
                                to="/policy/shipping-and-delivery"
                                >See all Help Topics</n-link
                            >
                            <v-icon color="orange darken-2"
                                >mdi-arrow-right</v-icon
                            >
                        </v-col>
                        <v-col md="auto">
                            <p class="mb-0 font-weight-bold">
                                Need further assistance?
                            </p>
                            <p class="mb-0 font-weight-bold">
                                We’re here to help.
                            </p>
                            <n-link
                                class="
                                    text-decoration-none
                                    indigo--text
                                    font-weight-bold
                                "
                                to="/contact-us"
                                >Contact Us</n-link
                            >
                            <v-icon color="orange darken-2"
                                >mdi-arrow-right</v-icon
                            >
                        </v-col>
                    </v-row>

                </v-card-text>
            </v-card>
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
            firstCards: [
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/account/my_orders_icon.png',
                    title: 'My Orders',
                    info: 'Track your orders or check your order history.',
                    link: '/sales/order/history',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/account/my_details_icon.png',
                    title: 'My Details',
                    info: 'Manage your personal & account information.',
                    link: '/customer/account/edit',
                },
            ],
            secondCards: [
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/account/address_book_icon.png',
                    title: 'Address Book',
                    info: 'Add, change or remove addresses.',
                    link: '/customer/address',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/account/preferences_icon.png',
                    title: 'Preferences',
                    info: 'Update contact preferences and notifications.',
                    link: '/newsletter/manage',
                },
            ],
        }
    },
}
</script>

<style>
</style>