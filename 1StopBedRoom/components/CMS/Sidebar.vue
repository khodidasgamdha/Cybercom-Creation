<template>
    <v-navigation-drawer class="grey lighten-4 px-5 py-10" width="100%">
        <div v-for="(item, index) in links" :key="index" class="my-6">
            <nuxt-link :to="item.link" class="text-decoration-none black--text">
                {{ item.title }}
            </nuxt-link>
        </div>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { title: 'About Us', link: '/about-us' },
                { title: 'Our Story', link: '/our-story' },
                {
                    title: 'The 1Stop Advantage',
                    link: '/the-onestop-advantage',
                },
                { title: '1Stop Cares', link: 'onestop-cares' },
                { title: 'Careers', link: '/careers' },
                { title: 'Partner With Us', link: '/partner-with-us' },
                { title: 'Contact Us', link: '/about-contact-us' },
            ],
        }
    },
}
</script>

<style scoped>
a.nuxt-link-exact-active {
    font-weight: 700;
    display: block;
    background-color: white;
    padding: 10px 20px;
    margin: 0;
    border-radius: 5px;
}
a {
    font-size: 18px;
    margin-left: 20px;
}
a:hover {
    font-weight: 700;
}
</style>