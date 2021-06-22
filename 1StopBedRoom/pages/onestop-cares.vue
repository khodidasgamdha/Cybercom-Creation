<template>
    <div>
        <p id="title">Transforming homes & communities</p>
        <p>
            Our communities and the people within them make us who we are.
            Tight-knit communities support us when we struggle and celebrate
            with us when we succeed. We recognize that a community can only
            thrive if people invest and give back.
        </p>

        <p id="title" class="mt-10">Our causes and partnerships</p>
        <p>
            We are honored to partner with these incredible organizations whose
            missions are close to our heart and who play a vital role in our
            charitable initiatives. The wonderful volunteers and staff at these
            organizations share our mission and dedication to furthering
            progress in underserved communities, promoting public good, and
            serving the less fortunate among us.
        </p>

        <v-row v-for="(item, i) in partnerships" :key="i" class="mt-5">
            <v-col md="2" sm="12">
                <img :src="item.img" :alt="item.linkName" />
            </v-col>
            <v-col>
                <p>{{ item.info }}</p>
                <a
                    :href="item.link"
                    class="text-decoration-none font-weight-bold indigo--text"
                    >{{ item.linkName }}</a
                >
                <v-icon color="orange darken-2">mdi-arrow-right</v-icon>
            </v-col>
        </v-row>

        <p id="title" class="mt-10">Giving back by donating returns</p>
        <p>
            When a customer makes a return, we donate a portion of these
            returns. We locate families in need and provide them with beds,
            tables, chairs, and more. We’re able to help families make their
            house a home, and offer them a chance to make their living spaces
            more comfortable.
        </p>
        <img
            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/donating-img.png"
            alt="cares"
            width="100%"
        />
    </div>
</template>

<script>
export default {
    layout: 'cms',
    head() {
        return {
            title: '1Stop Cares',
        }
    },
    data() {
        return {
            partnerships: [
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/make-a-wish-blue-logo_v3.png',
                    info: '1StopBedrooms is a proud supporter of the Make-A-Wish Foundation of Metro New York and Western New York. Every day, Make-A-Wish creates life-changing wishes for children with critical illnesses in the five boroughs of New York City, Nassau County and 17 counties in the Buffalo and Rochester areas. A wish isn’t just a nice, heartwarming experience. It’s a necessity that gives kids the mental stamina to face their illness and fight it. We are honored to help support room makeover wishes for children in our local community, helping to provide a new space that can inspire hope and joy for a child.',
                    linkName: 'Make-A-Wish Foundation',
                    link: 'https://wish.org/newyork',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/salvation-army-shield-logo.png',
                    info: 'The Salvation Army annually helps more than 23 million Americans overcome poverty, addiction, and economic hardships through a range of social services. By providing food for the hungry, emergency relief for disaster survivors, rehabilitation for those suffering from drug and alcohol abuse, and clothing and shelter for people in need, The Salvation Army is doing the most good at 7,600 centers of operation around the country. In the first-ever listing of “America’s Favorite Charities” by The Chronicle of Philanthropy, The Salvation Army ranked as the country’s largest privately funded, direct-service nonprofit. For more information, visit SalvationArmyUSA.org. Follow us on Twitter @SalvationArmyUS and #DoingTheMostGood',
                    linkName: 'The Salvation Army',
                    link: 'https://easternusa.salvationarmy.org/greater-new-york/',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/ia-logo.png',
                    info: 'Innovation: Africa is a nonprofit organization that brings Israeli solar, water and agricultural technologies to rural African villages throughout Uganda, Malawi, Tanzania, Zambia, Democratic Republic of Congo, Cameroon, South Africa, eSwatini, Ethiopia, and Senegal. Since its inception in 2008, Innovation: Africa has completed over 300 solar and water installations, impacting over 2 million people. Innovation: Africa uses solar energy to pump clean water from the aquifers to provide villagers with access to fresh water, light, and electricity for students to study and doctors to treat patients at night, as well as the use of computers and medical equipment in schools and medical centers.',
                    linkName: 'Innovation: Africa',
                    link: 'https://www.innoafrica.org/',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/conservation-coalition-logo.png',
                    info: 'The Conservation Coalition is a youth movement to reform the culture around environmentalism. TCC is building a national base to challenge the status quo, advocate for market-driven solutions that work, and celebrate the power of individual action. TCC believes economic and environmental success go hand-in-hand, and that everyone should feel empowered to take a seat at the table in discussions concerning conservation, clean energy, sportsmen’s rights, agriculture, climate, and much more. TCC seeks to activate young people that are tired of partisan inaction on the grassroots, state, and federal levels -- bringing forth prosperous action on environmental issues that impact us all.',
                    linkName: 'The Conservation Coalition',
                    link: 'https://tcc.eco/',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/care-logo.png',
                    info: 'C.A.R.E. is a parent-based organization that provides the families of children with special needs the necessary advice, support, guidance, and resources they need to function and thrive as a family. When parents first learn of their child’s diagnosis, they often immediately feel shocked, horrified, confused, heart-broken, scared, and alone. C.A.R.E. steps up to ensure that parents are not alone when caring for a special child by providing parents with education about available resources, assistance navigating government programs, help with proper school placement, parent support networks, sibling workshops, and activity programs for their special child.',
                    linkName: 'C.A.R.E. For Special Children',
                    link: 'https://www.careforspecial.org/',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/aboutonestop/images/imagine-academy-logo.png',
                    info: 'Imagine Academy is a unique program that integrates the two foremost models, DIR®/ Floortime™ and ABA, to assess and develop individualized programming for children with Autism Spectrum Disorders (ASD) and other developmental challenges. Imagine Academy’s program is groundbreaking in its ability to treat the whole child and not place limits on students due to methodology constraints. The complete learning experience is a collaborative one, which combines all proven therapies. Imagine Academy has a 1:1 student/professional ratio ensuring optimal treatment. The entire staff is closely familiar with each child’s program and the one-on-one support at Imagine is without equal.',
                    linkName: 'Imagine Academy',
                    link: 'https://www.imagineacademyforautism.org/',
                },
            ],
        }
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