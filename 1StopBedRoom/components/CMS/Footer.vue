<template>
    <div class="pt-10 pb-16" id="footer">
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
                <div v-for="(item, i) in first" :key="i" class="my-1">
                    <nuxt-link
                        :to="item.link"
                        class="text-decoration-none black--text"
                        >{{ item.title }}</nuxt-link
                    >
                </div>
            </v-col>
            <v-col>
                <div v-for="(item, i) in second" :key="i" class="my-1">
                    <nuxt-link
                        :to="item.link"
                        class="text-decoration-none black--text"
                        >{{ item.title }}</nuxt-link
                    >
                </div>
            </v-col>

            <v-col md="auto">
                <p class="pt-10">
                    <n-link class="black--text text-decoration-none" to="/">
                        Shop 1StopBedrrom.com
                    </n-link>
                    <v-icon color="orange">mdi-arrow-right</v-icon>
                </p>
            </v-col>
        </v-row>

        <p class="body-2 text-center">
            <n-link to="/" class="text-decoration-none grey--text"
                >Privacy Policy</n-link
            >
            <n-link to="/" class="ml-5 text-decoration-none grey--text"
                >Terms of Use</n-link
            >
            <span class="ml-10 grey--text"
                ><v-icon color="grey" size="17">mdi-copyright</v-icon>2021
                1StopBedrooms Inc.</span
            >
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            first: [
                { title: 'About Us', link: '/about-us' },
                { title: 'Our Story', link: '/our-story' },
                { title: '1Stop Advantage', link: '/the-onestop-advantage' },
                { title: '1Stop Cares', link: '/onesstop-cares' },
            ],
            second: [
                { title: 'Careers', link: '/careers' },
                { title: 'Partner With Us', link: '/partner-with-us' },
                { title: 'Contact Us', link: '/about-contact-us' },
            ],
        }
    },
}
</script>

<style>
#footer {
    background: #f2f2f2;
    width: 100%;
}
</style>