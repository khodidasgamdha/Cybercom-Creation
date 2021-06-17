<template>
    <div class="mx-16">
        <!-- links -->
        <v-breadcrumbs :items="links" class="mt-n10"></v-breadcrumbs>

        <v-row>
            <!-- sidebar -->
            <v-col v-if="layoutSet()" cols="3" :order="order">
                <v-card tile flat class="py-2 px-10 grey lighten-4">
                    <div
                        v-for="(item, i) of sidebarLinks"
                        :key="i"
                        class="my-4"
                    >
                        <h4 class="text-uppercase">{{ item.heading }}</h4>
                        <div v-for="(link, j) of item.links" :key="j">
                            <nuxt-link
                                :to="link.link"
                                class="
                                    text-decoration-none
                                    grey--text
                                    body-2
                                    sidebarLinks
                                "
                            >
                                {{ link.title }}
                            </nuxt-link>
                        </div>
                    </div>
                </v-card>
            </v-col>

            <!-- policy -->
            <v-col
                >{{ policy }}
                <Policy />
            </v-col>

        </v-row>
    </div>
</template>

<script>
// import { mapState } from 'vuex'
import Policy from '~/components/Policy'
import gql from 'graphql-tag'

const POLICY = gql`
    query POLICY($url: String!) {
        policy(url: $url) {
            pageInfo {
                pageTitle
                url
                status
            }
            content {
                contentHeading
                contentDetails
            }
            design {
                layout
                layout_update_xml {
                    reference {
                        action {
                            type
                            name
                        }
                        block {
                            action {
                                block_id
                            }
                        }
                    }
                }
            }
            metaData {
                keywords
                description
            }
        }
    }
`

export default {
    components: {
        Policy,
    },
    head() {
        return {
            title: this.policy.pageInfo.pageTitle,
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.policy ? this.policy.metaData.description : '',
                },
            ],
        }
    },
    scrollToTop: true,
    apollo: {
        policy: {
            query: POLICY,
            prefetch: true,
            variables() {
                return {
                    url: this.$route.params.policy || 'return-policy',
                }
            },
        },
    },
    data() {
        return {
            order: 0,
            links: [
                {
                    text: 'Home',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Return Policy | 1StopBedrooms',
                    disabled: false,
                    href: '/return-policy',
                },
            ],
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
                        { title: 'COVID-19', link: 'covid-19' },
                        {
                            title: 'Shipping Information',
                            link: '/policy/shipping-and-delivery',
                        },
                        {
                            title: 'Delivery Option',
                            link: '/policy/white-glove-delivery',
                        },
                        { title: 'Track My Order', link: 'track-my-order' },
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
    // computed: {
    //     ...mapState('policy', ['name', 'layout']),
    // },
    methods: {
        layoutSet() {
            if (this.layout === '1 column') {
                return false
            } else {
                this.order = this.layout === '2 columns with right bar' ? 1 : 0
                return true
            }
        },
    },
}
</script>

<style scoped>
.sidebarLinks:hover {
    color: rgb(4, 4, 211) !important;
}
.nuxt-link-exact-active {
    color: black !important;
    border-bottom: 2px solid rgb(4, 4, 211);
}
</style>