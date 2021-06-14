<template>
    <div>
        <div v-for="(link, i) in links" :key="i" class="mx-5 my-8">
            <n-link :to="link.link" class="text-decoration-none black--text">{{
                link.title
            }}</n-link>
        </div>
    </div>
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
    font-weight: 600;
}
a {
    font-size: 18px;
}
a:hover {
    font-size: 18px;
    font-weight: 600;
}
</style>