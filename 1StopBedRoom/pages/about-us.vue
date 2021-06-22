<template>
    <div>
        <!-- image -->
        <img
            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/1SB_about_us.jpg"
            alt=""
            width="100%"
            class="mb-n2"
        />

        <v-layout>
            <v-flex md3 class="grey lighten-2 d-none d-lg-flex d-xl-flex">
                <Sidebar />
            </v-flex>
            <v-flex md9 class="ma-10">
                
                <!-- intro -->
                <v-card width="600" class="mx-auto" flat align="center">
                    <p id="title">
                        You learn a thing or two after 20 years in the furniture
                        industry.
                    </p>
                    <p>
                        We've built our business around understanding and
                        delivering what customers truly want from a furniture
                        retailer. Our focus is on furniture — and providing
                        superior customer service. That’s it.
                    </p>
                    <n-link
                        to="/our-story"
                        class="indigo--text text-decoration-none font-weight-bold"
                        >Learn more about our story</n-link
                    >
                    <v-icon color="orange">mdi-arrow-right</v-icon>
                </v-card>
                <v-divider class="my-10"></v-divider>

                <!-- 1stop advantage -->
                <v-row>
                    <v-col md="6">
                        <p class="mb-n1" id="title">White Glove Delivery.</p>
                        <p class="mb-n1" id="title">Assembly.</p>
                        <p class="mb-n1" id="title">Setup.</p>
                        <p class="mb-n1" id="title">Haul Away.</p>
                        <p id="title">1Stop.</p>
                        <p>
                            Buying furniture is different from other online
                            shopping experiences. It’s big, bulky, heavy, and
                            breakable. When it comes to packing, moving and
                            assembly, it requires extra care and service. That’s
                            why we offer a warehouse to home delivery & assembly
                            service.
                        </p>
                        <n-link
                            to="/the-onestop-advantage"
                            class="indigo--text text-decoration-none font-weight-bold"
                            >The 1Stop Advantage</n-link
                        >
                        <v-icon color="orange">mdi-arrow-right</v-icon>
                    </v-col>
                    <v-col md="6">
                        <img
                            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/bitmap.png"
                            alt="1Stop Advantage"
                        />
                    </v-col>
                </v-row>

                <!-- introduction -->
                <v-card
                    flat
                    class="grey lighten-4 py-5 my-14 rounded-0"
                    align="center"
                >
                    <p id="title">Introducing Shop More Save More</p>
                    <p>How we use technology to save you money.</p>
                    <v-row class="mx-3">
                        <v-col
                            md="4"
                            class="px-4"
                            v-for="(item, i) in introduction"
                            :key="i"
                        >
                            <img
                                :src="item.img"
                                :alt="item.title"
                                width="120"
                            />
                            <p class="title mt-5">{{ item.title }}</p>
                            <p>{{ item.info }}</p>
                        </v-col>
                    </v-row>
                </v-card>

                <!-- 1Stop cares -->
                <v-row>
                    <v-col md="6">
                        <p id="title">Giving back the 1Stop way.</p>
                        <p>
                            Celebrating and enriching the community is an
                            important part of who we are. Because home furniture
                            and beautification is our specialty, we are
                            effective in bringing hope, happiness, and comfort
                            with our furniture - from fulfilling the bedroom
                            wishes of the brave children at Make-A-Wish
                            Foundation to providing shelter to those in need.
                            It's a commitment to giving back, sharing joy and
                            being there in times of need.
                        </p>
                        <n-link
                            to="/onestop-cares"
                            class="indigo--text text-decoration-none font-weight-bold"
                            >See how 1Stop cares</n-link
                        >
                        <v-icon color="orange">mdi-arrow-right</v-icon>
                    </v-col>
                    <v-col md="6">
                        <img
                            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/giving-back.png"
                            alt="1Stop Cares"
                        />
                    </v-col>
                </v-row>

                <v-divider class="my-10"></v-divider>

                <!-- careers -->
                <v-row>
                    <v-col md="6">
                        <img
                            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/join-team.png"
                            alt="careers"
                        />
                    </v-col>
                    <v-col md="6">
                        <p id="title">Join the team</p>
                        <p>
                            As one of the largest and fastest growing online
                            retailers of quality furniture, we’re hiring smart,
                            passionate people who want to help us revolutionize
                            the way people buy furniture and make their house a
                            home.
                        </p>
                        <n-link
                            to="/careers"
                            class="indigo--text text-decoration-none font-weight-bold"
                            >Find a career that's right for you</n-link
                        >
                        <v-icon color="orange">mdi-arrow-right</v-icon>
                    </v-col>
                </v-row>

                <v-divider class="my-10"></v-divider>

                <!-- partner -->
                <v-row>
                    <v-col md="6">
                        <p id="title">Showcase your brand with 1Stop.</p>
                        <p>
                            We’ve partnered with some of the biggest names in
                            the industry. Our website uses proprietary software
                            and systems to help connect our customers with your
                            products. We can help you grow and reach a broader
                            audience. See why partnering with 1StopBedrooms is a
                            great move for your furniture business.
                        </p>
                        <n-link
                            to="/partner-with-us"
                            class="indigo--text text-decoration-none font-weight-bold"
                            >Partner with us</n-link
                        >
                        <v-icon color="orange">mdi-arrow-right</v-icon>
                    </v-col>
                    <v-col md="6">
                        <img
                            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/brand-img.png"
                            alt="partner with us"
                        />
                    </v-col>
                </v-row>

                <!-- buttons -->
                <v-row class="justify-space-around">
                    <v-col md="5">
                        <v-btn
                            class="
                                indigo
                                darken-4
                                py-12
                                rounded-xl
                                text-capitalize
                            "
                            dark
                            x-large
                            block
                            to="/about-contact-us"
                        >
                            Contact Us
                            <v-icon color="orange">mdi-arrow-right</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col md="5">
                        <v-btn
                            class="
                                indigo
                                darken-4
                                py-12
                                rounded-xl
                                text-capitalize
                            "
                            dark
                            x-large
                            block
                            to="/partner-with-us"
                        >
                            Partner With Us
                            <v-icon color="orange">mdi-arrow-right</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
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
            title: 'About Us'
        }
    },
    components: {
        Sidebar,
    },
    data() {
        return {
            introduction: [
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/discount.png',
                    title: 'It starts with discounts',
                    info: 'At 1StopBedrooms we offer special discounted pricing specifically for living and dining room sets.',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/add-pieces.png',
                    title: 'Add pieces and save',
                    info: 'The more pieces you order from any particular set, the greater the discount you receive.',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/calc.png',
                    title: 'We ship smarter to save you more',
                    info: 'Our technology systems calculate the savings from shipping multiple items all at once, then we pass that savings on to you!',
                },
            ],
        }
    },
}
</script>

<style scoped>
#title {
    font-size: 28px;
    font-weight: 600;
    line-height: 35px;
}
p {
    font-size: 16px;
}
</style>