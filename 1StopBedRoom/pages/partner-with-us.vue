<template>
    <div>
        <!-- image -->
        <img
            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/1SB_partner_with_us.jpg"
            alt=""
            width="100%"
            class="mb-n2"
        />

        <v-layout>
            <v-flex md3 class="grey lighten-2 d-none d-lg-flex d-xl-flex">
                <Sidebar />
            </v-flex>
            <v-flex md9 class="ma-10">
                <p id="title">A partnership you can feel good about</p>
                <p>
                    1StopBedrooms will help you grow your business by building
                    brand awareness and selling more furniture, faster. With our
                    proprietary technology, we connect our customers with your
                    products and manage all of the customer service involved.
                </p>
                <v-btn
                    class="rounded-xl orange darken-3 text-capitalize px-10"
                    large
                    dark
                    to="/welcome-onestop-bedroom"
                >
                    Contact Our Partner Team
                </v-btn>

                <p id="title" class="mt-10">Let your brand stand out</p>
                <p>
                    Each brand partner on 1StopBedrooms has a custom brand page
                    featuring your logo and company story. We build out
                    collection pages for all of your products to highlight your
                    biggest sellers or new pieces — so your products are
                    prominently displayed & promoted.
                </p>
                <p>
                    Your custom 1StopBedrooms link allows for our customers to
                    bookmark you as a favorite. Our software keeps up-to-date
                    inventory information and reacts in near-real-time to price
                    changes. Anytime you roll out a new line or collection, we
                    get that up on our site too.
                </p>
                <p>
                    We enhance your brand awareness by promoting your furniture
                    to our 1 Million+ customers and social media followers.
                </p>
                <img
                    src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/about-brand.png"
                    alt="partner"
                    class="my-10"
                    width="100%"
                />

                <p id="title">Partnership built on trust</p>
                <p>
                    We’ve built our technology from the ground up so you and
                    your customers have the best experience possible. Our
                    detailed and thorough product descriptions help customers
                    make the right purchasing decisions. We follow up on every
                    purchase with a phone call with the customer to help
                    mitigate any issues. We also field questions about claims
                    and other services. Finally, we provide our White Glove
                    Delivery that ensures your products arrive at your
                    customer's home with quality service.
                </p>

                <p id="title" class="mt-10">
                    Start your partnership with 1StopBedrooms today
                </p>
                <p>
                    We look forward to partnering with your furniture brand to
                    help you grow and reach a broader audience.
                </p>
                <v-btn
                    class="rounded-xl orange darken-3 text-capitalize px-10"
                    large
                    dark
                    to="/welcome-onestop-bedroom"
                >
                    Contact Our Partner Team
                </v-btn>
                
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import Sidebar from '../components/CMS/Sidebar'
export default {
    layout: 'cms',
    head() {
        return {
            title: 'Partner With Us'
        }
    },
    components: {
        Sidebar,
    },
}
</script>

<style scoped>
#title {
    font-size: 28px;
    font-weight: 500;
}
p {
    font-size: 1.1rem;
}
</style>