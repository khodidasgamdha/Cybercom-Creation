<template>
    <div>
        <v-layout>
            <!-- sidebar -->
            <v-flex md3 class="grey lighten-3 pa-5 d-none d-lg-flex d-xl-flex">
                <p>
                    <v-icon color="indigo">mdi-chevron-left</v-icon>
                    <n-link
                        to="/open-positions"
                        class="body-2 text-decoration-none black--text"
                        >Back to Open Positions</n-link
                    >
                </p>
            </v-flex>
            <v-flex md9 class="ma-10">
                <nuxt-content :document="article" />
                <h2 id="title" class="mt-10 mb-5">Additional Information</h2>
                <p v-for="(info, i) in addInfo" :key="i">
                    {{ info }}
                </p>
                <v-btn
                    class="rounded-xl orange darken-3 text-capitalize px-10"
                    large
                    dark
                >
                    Apply Now
                </v-btn>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    layout: 'cms',
    head() {
        return {
            title: 'Job Descriptions'
        }
    },
    async asyncData({ $content, params }) {
        const article = await $content(`job-description`, params.id).fetch()
        return { article }
    },
    data() {
        return {
            addInfo: [
                'Whether for the home or for business, more and more people are finding the perfect furnishings are a few clicks away.1Stopbedrooms is looking for a team of ambitious and engaged professionals who are excited to be part of this rapidly evolving ecommerce space. We want bold, creative thinkers; people who thrive when faced with new challenges; people who are proud to deploy their unique insights to bring greater value to our customers. We recognize that in our competitive and rapidly expanding field, our ability to innovate isfoundational to our continued success.',
                'We also recognize that innovation thrives on a plurality or perspectives and a diverse team working toward a common goal. For that reason, 1Stopbedrooms is proudly and enthusiastically committed to a policy of Equal Employment Opportunity. We celebrate what makes us different, and will never discriminate against an applicant or employee on the basis of race, color, religion, creed, national origin, or ancestry, sex, age, physical or mental disability, including gender dysphoria and similar gender-related conditions, gender, including pregnancy, veteran or military status, actual or perceived sexual orientation, gender identity or expression, including status as a transgender individual, predisposing genetic characteristics, genetic information, marital status, familial status, domestic violence victim status, or any other legally recognized protected basis under federal, New York, or local laws. The information collected by this application is solely to determine suitability for employment, verify identity, and maintain employment statistics on applicants. All your information will be kept confidential according to EEO guidelines.',
                "Applicants with disabilities may be entitled to reasonable accommodation under the Americans with Disabilities Act and certain New York or local laws. A reasonable accommodation is a change in the way things are normally done which will ensure an equal employment opportunity without imposing undue hardship on 1Stopbedrooms. Please inform the company's personnel representative if you need assistance completing this application or to otherwise participate in the application process.",
                'Your application will be active for 60 days.',
                'Upon employment, employees of 1Stopbedrooms may be required to have their picture taken or to provide 1Stopbedrooms with a picture of themselves.',
                'Relatives of current employees of 1Stopbedrooms will not be hired if they would be working for, or directly supervising, a current employee, and cannot work together on the same team as a current employee. If you receive a conditional offer of employment, you may be asked to identify any relative who is a current employee of 1Stopbedrooms. For purposes of this policy, “relative” is defined as any person who is related by blood or marriage, or whose relationship with the employee is similar to that of people who are related by blood or marriage.',
            ],
        }
    },
}
</script>

<style>
.nuxt-content h2 {
    margin: 35px 0 10px 0;
}
</style>