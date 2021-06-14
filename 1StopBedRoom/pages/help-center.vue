<template>
    <div>

        <!-- banner -->
        <v-img
            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/1sb-general/help-center-bg.png?vca6c2565"
            alt="banner"
            width="100%"
            class="mt-n6"
            height="250"
        >
            <p class="mt-14 title font-weight-light white--text text-center mb-0">1STOPBEDROOMS HELP CENTER</p>
            <p class="display-2 font-weight-bold white--text text-center">HOW CAN WE HELP?</p>
        </v-img>

        <v-container>
            <v-row>
                <v-col v-for="(item, i) in helpCenter" :key="i" class="mt-7" md="4" sm="12">
                    <div class="grey lighten-3 pa-7">
                        <p class="subtitle-1 font-weight-bold">{{ item.title }}</p>
                        <div v-for="(item, i) in item.links" :key="i" class="my-2">
                            <n-link :to="item.link" class="text-decoration-none subtitle-1 indigo--text">{{ item.linkName }}</n-link>
                        </div>
                    </div>
                </v-col>
            </v-row>

            <div class="grey lighten-3 text-center py-5 my-7">
                <span class="title">Need further Assistance? We’re here to help.</span>
                <v-btn class="text-capitalize indigo lighten-1 ml-2" x-large dark>Contact Us</v-btn>
            </div>
        </v-container>

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Help Center'
        }
    },
    data() {
        return {
            helpCenter: [
                {
                    title: 'SHIPPING & DELIVERY',
                    links: [
                        { linkName: 'Track My Order', link: '/sales/guest/form' },
                        { linkName: 'Shipping Information', link: '/shipping-and-delivery' },
                        { linkName: 'Free Shipping', link: '/free-shipping' },
                        { linkName: 'Delivery Options', link: '/white-glove-delivery' },
                        { linkName: 'International Shipping', link: '/international-shipping' },
                    ]
                },
                {
                    title: 'POLICIES',
                    links: [
                        { linkName: 'COVID-19 Policy', link: '/covid19' },
                        { linkName: 'Return Policy', link: '/return-policy' },
                        { linkName: 'Cancellation Policy', link: '/return-policy#cancellation-policy' },
                        { linkName: 'Privacy Policy', link: '/privacy-policy' },
                        { linkName: 'Terms & Conditions', link: '/terms-and-conditions' },
                    ]
                },
                {
                    title: 'HELP WITH AN ORDER',
                    links: [
                        { linkName: 'Track My Order', link: '/sales/guest/form' },
                        { linkName: 'I Recevied an Incomplete Order', link: '/order-help#i-received-order' },
                        { linkName: 'My Item Arrived Damaged', link: '/order-help#i-received-damaged' },
                        { linkName: 'My Item is Missing Parts', link: '/order-help#missing-parts' },
                        { linkName: 'I Received The Wrong Item', link: '/order-help#i-received-item' },
                    ]
                },
                {
                    title: 'PAYMENT',
                    links: [
                        { linkName: 'Payment Methods', link: '/billing-and-payment' },
                        { linkName: 'Financing', link: '/affirm-financing' },
                        { linkName: 'Sales Tax', link: '/sales-tax#sales-tax' },
                    ]
                },
                {
                    title: 'SHIPPING & DELIVERY',
                    links: [
                        { linkName: 'My Account', link: '/customer/account/login' },
                        { linkName: 'My Orders', link: '/sales/order/history' },
                        { linkName: 'Unsubscribe From Emails', link: '/newsletter/manage' },
                    ]
                },
            ]
        }
    }
}
</script>

<style>
</style>