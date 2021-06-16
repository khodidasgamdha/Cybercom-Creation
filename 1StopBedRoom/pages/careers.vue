<template>
    <div>
        <!-- image -->
        <img
            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/1SB_careers.jpg"
            alt=""
            width="100%"
            class="mb-n2"
        />

        <v-layout>
            <v-flex md3 class="grey lighten-2 d-none d-lg-flex d-xl-flex">
                <Sidebar />
            </v-flex>
            <v-flex md9 class="ma-10">
                <p id="title">Working with us</p>
                <p>
                    Looking to join a dynamic team that’s always striving to
                    improve their craft? Then you might be a great fit for
                    1StopBedrooms. As we expand our business and craft the
                    systems and standards that are revolutionizing the furniture
                    industry, we need your help in realizing our vision.
                </p>
                <p>
                    As a values-driven company, we’ve worked hard to make
                    1StopBedrooms an inviting and fulfilling place to work. When
                    you join our team, we’ll work with you to grow
                    professionally and personally.
                </p>
                <v-btn
                    class="rounded-xl orange darken-3 text-capitalize px-10"
                    large
                    dark
                    to="/open-positions"
                >
                    View Open Positions
                </v-btn>

                <p id="title" class="mt-10">Why work at 1Stop</p>
                <v-row>
                    <v-col md="6" sm="12" v-for="(item, i) in careers" :key="i">
                        <img :src="item.img" :alt="item.title">
                        <p class="headline font-weight-bold my-2">{{ item.title }}</p>
                        <p>{{ item.info }}</p>
                    </v-col>
                </v-row>

                <p id="title" class="mt-10">Opportunities to grow</p>
                <p>We look to hire talented and enthusiastic individuals who want to help us reinvent the furniture shopping experience.</p>
                <v-row v-for="(item, i) in opportunities" :key="i" class="mt-5">
                    <v-col md="2">
                        <img :src="item.img" :alt="item.title" width="150">
                    </v-col>
                    <v-col>
                        <p class="headline font-weight-bold">{{ item.title }}</p>
                        <p>{{ item.info }}</p>
                    </v-col>
                </v-row>

                <v-divider class="my-10"></v-divider>
                <p id="title">Join the team</p>
                <p>
                    We continuously look for like-minded people to add to our growing business. Check out the current opportunities at 1StopBedrooms. We look forward to hearing from you.
                </p>
                <v-btn
                    class="rounded-xl orange darken-3 text-capitalize px-10"
                    large
                    dark
                    to="/open-positions"
                >
                    View Open Positions
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
            title: 'Careers'
        }
    },
    components: {
        Sidebar,
    },
    data() {
        return {
            careers: [
                {
                    img:'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/equlity-icon.png',
                    title: 'A culture of equality',
                    info: "You'll be treated with the same respect and equality you deserve, regardless of title or role. We operate under a “people first” philosophy, meaning we want to meet you where you are and offer you the tools and feedback you need to develop."
                },
                {
                    img:'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/feedback-icon.png',
                    title: 'Real-time feedback',
                    info: "Our system provides metrics that rewards you for what you already excel in, and helps you to recognize areas for growth. This system encourages you to collaborate with your teammates and find new ways to approach challenges."
                },
                {
                    img:'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/collaborative-team-icon.png',
                    title: 'Collaborative team',
                    info: "There’s no denying the excitement and energy of working with a tight-knit team. While we’re always growing, we’ve found innovative ways to maintain that small-team atmosphere. You’ll have the chance to work alongside the very people that founded 1StopBedroom."
                },
                {
                    img:'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/work-img.png',
                    title: 'A fun place to work',
                    info: "We’ve recently renovated our main office with our employees in mind. With collaborative workspaces, as well as break out areas to help you refresh, we want you to want to come to work. More than just aesthetics, we designed a workplace that reflects our values like communication, exploration, and development."
                },
                {
                    img:'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/edge-icon.png',
                    title: 'Stay on the cutting edge',
                    info: "It’s our mission to constantly innovate and create new products and systems that empower our people, our partners, and, of course, our customers. When you have a career with 1StopBedrooms, you can take pride in knowing that you’re working with the leader in the online furniture industry."
                },
                {
                    img:'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/pay-icon.png',
                    title: 'Great pay and benefits',
                    info: "Great offices and culture are just part of the rewards of working at 1StopBedrooms. We’re proud to offer all our employees great benefits packages and salaries. Only by sharing our success can we help the company and each other grow. We readily offer incentives that celebrate you, not only for your hard work, but for the innovative and collaborative thinking you bring."
                },
            ],
            opportunities: [
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/software-icon.png?vb0cc57c5',
                    title: 'Software & Tech',
                    info: '1Stop was founded on cutting edge technology and we’re still building out new and existing products and services.'
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/business-icon.png?v863329d4',
                    title: 'Business & Management',
                    info: 'On the operations side of things, we need your talent to make us the best online furniture retailer we can be.'
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/customer-icon.png?va9f34bb6',
                    title: 'Business & Management',
                    info: 'On the operations side of things, we need your talent to make us the best online furniture retailer we can be.'
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/warehouse-icon.png?v4df5ac42',
                    title: 'Warehouse & Delivery',
                    info: 'Your attention to detail and care are invaluable here. Be a part of what makes 1Stop the best furniture marketplace.'
                },
            ]
        }
    }
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