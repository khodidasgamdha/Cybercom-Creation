<template>
    <v-card width="300" tile flat class="py-2 px-10 mb-10 grey lighten-4 policySidebar">
        <div v-for="(item, i) of sidebarLinks" :key="i" class="my-4">
            <h4 class="text-uppercase heading">{{ item.heading }}</h4>
            <div v-for="(link, j) of item.links" :key="j">
                <nuxt-link
                    :to="link.link"
                    class="text-decoration-none grey--text body-2 sidebarLinks"
                >
                    {{ link.title }}
                </nuxt-link>
            </div>
        </div>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            sidebarLinks: [
                {
                    heading: 'Customer Service',
                    links: [
                        { title: 'Help Center', link: '/policy/help-center' },
                        {
                            title: 'My Account',
                            link: '/customer/account/login',
                        },
                        {
                            title: 'Privacy Policy',
                            link: '/policy/privacy-policy',
                        },
                        {
                            title: 'Return Policy',
                            link: '/policy/return-policy',
                        },
                        {
                            title: 'Cancellation Policy',
                            link: '/policy/return-policy#cancellation-policy',
                        },
                        {
                            title: 'Delivery Policy',
                            link: '/policy/return-policy#delivery-policy',
                        },
                        {
                            title: 'Terms & Condition',
                            link: '/policy/terms-and-conditions',
                        },
                        { title: 'Contact Us', link: '/contact-us' },
                    ],
                },
                {
                    heading: 'Shipping And Delivery',
                    links: [
                        { title: 'COVID-19', link: '/policy/covid19' },
                        {
                            title: 'Shipping Information',
                            link: '/policy/shipping-and-delivery',
                        },
                        {
                            title: 'Delivery Option',
                            link: '/policy/white-glove-delivery',
                        },
                        { title: 'Track My Order', link: '/sales/guest/form' },
                        {
                            title: 'International Shipping',
                            link: '/policy/international-shipping',
                        },
                        {
                            title: 'Free Shipping',
                            link: '/policy/free-shipping',
                        },
                        {
                            title: 'I Receive An Incomplete Order',
                            link: '/policy/order-help#i-received-order',
                        },
                        {
                            title: 'My Item Arrived Damaged',
                            link: '/policy/order-help#i-received-damaged',
                        },
                        {
                            title: 'I Received Wrong Item',
                            link: '/policy/order-help#i-received-item',
                        },
                        {
                            title: 'Missing Parts',
                            link: '/policy/order-help#missing-parts',
                        },
                    ],
                },
                {
                    heading: 'Billing And Payment',
                    links: [
                        {
                            title: 'Payment Methods',
                            link: '/policy/billing-and-payment',
                        },
                        {
                            title: 'Ordering Option',
                            link: '/policy/billing-and-payment#ordering-options',
                        },
                        {
                            title: 'Price Match Guarantee',
                            link: '/policy/price-match-guarantee',
                        },
                        { title: 'Sales Tax', link: '/policy/sales-tax' },
                    ],
                },
                {
                    heading: 'Account Help',
                    links: [
                        {
                            title: 'Unsubscribe From Emails',
                            link: '/customer/account/login',
                        },
                    ],
                },
                {
                    heading: 'Furniture Terms',
                },
            ],
        }
    },
}
</script>

<style>
.sidebarLinks:hover {
    color: #005CCC !important;
}
.sidebarLinks {
    font-weight: 400 !important;
    line-height: 22px;
}
.heading {
    color: #000;
    font-size: 15px;
    font-weight: 700;
}
.policySidebar .nuxt-link-exact-active {
    color: black ;
    border-bottom: 2px solid #005CCC;
}
</style>