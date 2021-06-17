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
            <v-col v-for="(item, i) in footerLinks" :key="i">
                <p class="headline">{{ item.title }}</p>
                <div
                    v-for="(item, i) in item.links"
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
                        >{{ item.linkTitle }}</nuxt-link
                    >
                </div>
            </v-col>

            <!-- buttons -->
            <v-col>
                <p class="headline">Contact Us</p>
                <v-btn 
                    color="primary" 
                    class="mt-5 px-16" 
                    large
                    to="/contact-us"
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
import gql from 'graphql-tag'

const GET_FOOTER_LINKS = gql `
    query GET_FOOTER_LINKS {
        footerLinks {
            title
            links {
                linkTitle
                link
            }
        }
    }
`

export default {
    apollo: {
        footerLinks: {
            query: GET_FOOTER_LINKS,
            prefetch: true,
        },
    },
    data() {
        return {
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