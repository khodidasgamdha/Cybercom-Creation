<template>
    <div class="pt-10" id="footer">
        <v-row class="px-16 py-5 justify-space-betwen">
            <!-- image -->
            <v-col>
                <v-img
                    width="200"
                    src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/1sb_logo_ftr.png"
                ></v-img>
            </v-col>

            <!-- links -->
            <v-col>
                <p class="headline">Get to Know Us</p>
                <div
                    v-for="(item, i) in footerLinks.knowUs"
                    :key="i"
                    class="my-1"
                >
                    <nuxt-link
                        :to="item.link"
                        class="
                            text-decoration-none
                            font-weight-light
                            secondary--text
                        "
                        >{{ item.title }}</nuxt-link
                    >
                </div>
            </v-col>

            <!-- links -->
            <v-col>
                <p class="headline">Customer Service</p>
                <div
                    v-for="(item, i) in footerLinks.customerService"
                    :key="i"
                    class="my-1"
                >
                    <nuxt-link
                        :to="item.link"
                        class="
                            text-decoration-none
                            font-weight-light
                            secondary--text
                        "
                        >{{ item.title }}</nuxt-link
                    >
                </div>
            </v-col>

            <!-- buttons -->
            <v-col>
                <p class="headline">Contact Us</p>
                <v-btn color="primary" class="mt-5 px-16" large
                    ><v-icon class="mr-2">mdi-message-processing</v-icon> Message
                </v-btn>
                <v-btn
                    large
                    href="tel:877-958-9203"
                    color="primary"
                    class="mt-5 px-16"
                    outlined
                    ><v-icon class="mr-2">mdi-phone-in-talk</v-icon> Call Us
                </v-btn>
            </v-col>
        </v-row>

        <!-- 2nd footer -->
        <v-card flat tile class="white lighten-1 text-center">
            <v-btn v-for="icon in icons" :key="icon" class="mx-3 mt-3" icon>
                <v-icon size="24px">
                    {{ icon }}
                </v-icon>
            </v-btn>

            <v-card-text class="font-weight-bold">
                <a href="" class="text-decoration-none">Privacy Policy</a> |
                <a href="" class="text-decoration-none">Terms of Use </a>
                <span class="black--text ml-10"
                    ><v-icon color="black" size="17">mdi-copyright</v-icon>2021
                    1StopBedrooms Inc.</span
                >
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            footerLinks: {
                knowUs: [
                    { title: 'About Us', link: 'about-us' },
                    { title: 'The 1Stop Advantage', link: 'advantages' },
                    {
                        title: 'Sell on 1StopBedrooms',
                        link: 'sell-on-1stepbedrooms',
                    },
                    { title: 'Careers', link: 'careers' },
                    {
                        title: 'Social Responsibility',
                        link: 'social-responsibility',
                    },
                    { title: 'Reviews', link: 'reviews' },
                    { title: 'A Note on COVID-19', link: 'covid-19' },
                ],
                customerService: [
                    { title: 'My Account', link: 'my-account' },
                    { title: 'My Orders', link: 'my-orders' },
                    { title: 'Track My Order', link: 'track-my-orders' },
                    { title: 'Help Center', link: 'help-center' },
                    { title: 'Return Policy', link: 'return-policy' },
                    {
                        title: 'Shipping & Delivery',
                        link: 'shipping-n-delivery',
                    },
                    { title: 'Coupons', link: 'coupons' },
                    { title: 'Price Match', link: 'price-match' },
                    { title: 'Financing', link: 'financing' },
                ],
            },
            icons: [
                'mdi-facebook',
                'mdi-instagram',
                'mdi-pinterest',
                'mdi-twitter',
                'mdi-youtube',
            ],
        }
    },
}
</script>

<style>
#footer {
    background: #f2f2f2;
}
</style>