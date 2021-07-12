<template>
    <div class="px-16 mb-3 grey lighten-5">
        <!-- links -->
        <v-breadcrumbs :items="links"></v-breadcrumbs>

        <!-- banner -->
        <img
            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/review/review_img.png"
            alt="banner"
            class="d-flex mx-auto"
            width="1110"
        />

        <!-- write a review -->
        <v-card width="1110" class="d-flex mx-auto rounded-0 pa-8" flat>
            <v-row class="justify-space-between">
                <v-col cols="auto">
                    <h2>1STOPBEDROOMS</h2>
                    <div class="row mt-0 mx-0">
                        <v-rating
                            :value="5"
                            color="orange"
                            dense
                            half-increments
                            readonly
                            size="26"
                        ></v-rating>
                        <a href="#" class="caption mt-1 mx-2">38,497 reviews</a>
                        <span class="caption secondary--text mt-1"
                            >| 1716 Coney Island Ave Brooklyn, NY 11230</span
                        >
                    </div>
                </v-col>
                <v-col cols="auto" class="align-self-center">
                    <v-dialog width="600px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                class="primary rounded-0 px-16"
                                large
                                v-bind="attrs"
                                v-on="on"
                                >Write a Review</v-btn
                            >
                        </template>
                        <div class="white">
                            <h2
                                class="
                                    indigo
                                    d-flex
                                    pa-3
                                    white--text
                                    text-uppercase
                                "
                            >
                                Write A Review
                            </h2>
                            <div class="pa-3">
                                <span class="body-2"
                                    >Rate your overall satisfication with
                                    <strong>1StopBedroom.</strong></span
                                >
                                <v-rating
                                    :value="5"
                                    color="orange"
                                    dense
                                    half-increments
                                    readonly
                                    size="36"
                                ></v-rating>

                                <!-- form -->
                                <v-form v-model="formValid" ref="myForm">
                                    <!-- title -->
                                    <v-row class="mt-2">
                                        <v-col cols="12">
                                            <v-text-field
                                                v-model="review.title"
                                                label="Give your review a title"
                                                outlined
                                                dense
                                                :rules="[
                                                    rules.required,
                                                    rules.minLenght,
                                                ]"
                                            ></v-text-field>
                                        </v-col>

                                        <!-- description -->
                                        <v-col cols="12" class="mt-n5">
                                            <v-textarea
                                                v-model="review.description"
                                                label="Please describe your experience"
                                                outlined
                                                rows="4"
                                                :rules="[
                                                    rules.required,
                                                    rules.minLenght,
                                                ]"
                                            ></v-textarea>
                                        </v-col>

                                        <!-- first name -->
                                        <v-col md="6" cols="12" class="mt-n5">
                                            <v-text-field
                                                v-model="review.firstName"
                                                label="First Name"
                                                outlined
                                                dense
                                                :rules="[
                                                    rules.required,
                                                    rules.minLenght,
                                                ]"
                                            ></v-text-field>
                                        </v-col>

                                        <!-- last name -->
                                        <v-col md="6" cols="12" class="mt-n5">
                                            <v-text-field
                                                v-model="review.lastName"
                                                label="Last Name (private)"
                                                outlined
                                                dense
                                                :rules="[
                                                    rules.required,
                                                    rules.minLenght,
                                                ]"
                                            ></v-text-field>
                                        </v-col>

                                        <!-- order id -->
                                        <v-col md="6" cols="12" class="mt-n5">
                                            <v-text-field
                                                v-model="review.orderId"
                                                label="Order ID"
                                                outlined
                                                dense
                                                :rules="[
                                                    rules.required,
                                                    rules.minLenght,
                                                ]"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <!-- email -->
                                    <v-row class="mt-n5">
                                        <v-col md="6" cols="12">
                                            <v-text-field
                                                v-model="review.email"
                                                label="Email address (private)"
                                                outlined
                                                dense
                                                :rules="[
                                                    rules.required,
                                                    rules.email,
                                                ]"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <!-- terms -->
                                    <v-checkbox
                                        v-model="review.terms"
                                        label="I certify that this review is based on my own experience and that I am in no way affiliated with this business, and have not been offered any incentive or payment from the business to write this review. I agree to not write false reviews, which is in many cases against the law."
                                        class="mt-n5"
                                        :rules="[rules.required]"
                                    ></v-checkbox>

                                    <!-- cancle & save address button -->
                                    <v-row class="mt-0">
                                        <v-col cols="12">
                                            <v-btn
                                                class="
                                                    orange
                                                    darken-3
                                                    text-capitalize
                                                "
                                                block
                                                large
                                                dark
                                                @click="saveReview(review)"
                                            >
                                                Submit
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </div>
                        </div>
                    </v-dialog>
                </v-col>
            </v-row>
        </v-card>

        <v-row class="reviwes">
            <!-- reviewes -->
            <v-col cols="8">
                <div v-if="reviews.length > 0" class="white pa-5">
                    <v-row class="justify-space-between">
                        <!-- tabs -->
                        <v-col cols="auto">
                            <v-tabs v-model="tab" align-with-title>
                                <v-tabs-slider color="primary"></v-tabs-slider>
                                <v-tab class="body-2 text-capitalize"
                                    >Reviewes ({{ reviews.length }})</v-tab
                                >
                                <v-tab class="body-2 text-capitalize"
                                    >Google Reviewes ({{
                                        reviews.length
                                    }})</v-tab
                                >
                            </v-tabs>
                        </v-col>

                        <!-- sort -->
                        <v-col cols="5">
                            <v-row>
                                <v-col cols="auto" class="pt-6">
                                    <h5>Sort By:</h5>
                                </v-col>
                                <v-col>
                                    <v-select
                                        v-model="selectedSortedType"
                                        :items="sorts"
                                        label="Recommended"
                                        dense
                                        outlined
                                        flat
                                        @change="sort(selectedSortedType)"
                                    ></v-select>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>

                    <!-- user reviews -->
                    <v-tabs-items v-model="tab">
                        <!-- recommended -->
                        <v-tab-item>
                            <div v-for="(review, i) in reviews" :key="i">
                                <v-row>
                                    <v-col cols="auto">
                                        <v-avatar
                                            color="primary lighten-2"
                                            class="avatarVerifiedIcon"
                                        >
                                            <span
                                                class="
                                                    white--text
                                                    text-h5 text-uppercase
                                                "
                                                >{{
                                                    review.firstName.charAt(0)
                                                }}</span
                                            >
                                        </v-avatar>
                                    </v-col>
                                    <v-col cols="10">
                                        <span
                                            class="
                                                body-2
                                                font-weight-bold
                                                text-capitalize
                                            "
                                            >{{ review.firstName }}
                                            {{ review.lastName }}</span
                                        >
                                        <span
                                            class="
                                                caption
                                                font-weight-bold
                                                primary--text
                                            "
                                            >on</span
                                        >
                                        <label class="googleIcon"></label>
                                        <span class="caption grey--text"
                                            >Verified Buyer</span
                                        >
                                        <v-rating
                                            :value="5"
                                            color="orange"
                                            dense
                                            half-increments
                                            readonly
                                            size="13"
                                            class="my-n1"
                                        ></v-rating>
                                        <span class="reviewContent">{{
                                            review.description
                                        }}</span>
                                    </v-col>
                                </v-row>

                                <v-divider class="my-3"></v-divider>
                            </div>
                        </v-tab-item>

                        <!-- google reviews -->
                        <v-tab-item>
                            <div v-for="(review, i) in reviews" :key="i">
                                <v-row>
                                    <v-col cols="auto">
                                        <v-avatar
                                            color="primary lighten-2"
                                            class="avatarVerifiedIcon"
                                        >
                                            <span
                                                class="
                                                    white--text
                                                    text-h5 text-uppercase
                                                "
                                                >{{
                                                    review.firstName.charAt(0)
                                                }}</span
                                            >
                                        </v-avatar>
                                    </v-col>
                                    <v-col cols="10">
                                        <span
                                            class="
                                                body-2
                                                font-weight-bold
                                                text-capitalize
                                            "
                                            >{{ review.firstName }}
                                            {{ review.lastName }}</span
                                        >
                                        <span
                                            class="
                                                caption
                                                font-weight-bold
                                                primary--text
                                            "
                                            >on</span
                                        >
                                        <label class="googleIcon"></label>
                                        <span class="caption grey--text"
                                            >Verified Buyer</span
                                        >
                                        <v-rating
                                            :value="5"
                                            color="orange"
                                            dense
                                            half-increments
                                            readonly
                                            size="13"
                                            class="my-n1"
                                        ></v-rating>
                                        <span class="reviewContent">{{
                                            review.description
                                        }}</span>
                                    </v-col>
                                </v-row>

                                <v-divider class="my-3"></v-divider>
                            </div>
                        </v-tab-item>
                    </v-tabs-items>
                </div>
            </v-col>

            <!-- contact info -->
            <v-col cols="4">
                <div class="white pa-3">
                    <!-- google map -->
                    <GoogleMap height="200" />

                    <!-- conttact info -->
                    <div class="contactInfo mt-5">
                        <!-- google map info -->
                        <div class="my-2">
                            <v-icon size="20" class="mx-2"
                                >mdi-map-marker</v-icon
                            >
                            <a
                                href="https://www.google.com/maps/place/1StopBedrooms.com/@40.6150144,-73.9583817,14.75z/data=!4m13!1m7!3m6!1s0x89c244c1bd0893c5:0xcd1a28533b13553b!2s1716+Coney+Island+Ave,+Brooklyn,+NY+11230,+USA!3b1!8m2!3d40.6155949!4d-73.9636955!3m4!1s0x89c252bf58b8c1b9:0x16211ff39e1005b6!8m2!3d40.6155949!4d-73.9636955"
                                class="text-decoration-none"
                                >1716 Coney Island Ave Brooklyn, NY 11230</a
                            >
                        </div>

                        <!-- phone number -->
                        <div class="my-2">
                            <v-icon size="20" class="mx-2">mdi-phone</v-icon>
                            <a
                                href="tel:877-456-8823"
                                class="text-decoration-none"
                                >(877) 456-8823</a
                            >
                        </div>

                        <!-- website -->
                        <div class="my-2">
                            <v-icon size="20" class="mx-2">mdi-web</v-icon>
                            <a
                                href="https://www.1stopbedrooms.com"
                                class="text-decoration-none secondary--text"
                                >https://www.1stopbedrooms.com</a
                            >
                        </div>

                        <!-- type of website -->
                        <div class="my-2">
                            <v-icon size="20" class="mx-2">mdi-tag</v-icon>
                            <span>Furniture | Decor</span>
                        </div>

                        <!-- timing -->
                        <div class="my-2">
                            <v-icon size="20" class="mx-2">mdi-clock</v-icon>
                            <span>Open Now</span>
                            <v-icon
                                size="30"
                                v-if="showTime"
                                @click="showTime = false"
                                >mdi-menu-up</v-icon
                            >
                            <v-icon size="30" v-else @click="showTime = true"
                                >mdi-menu-down</v-icon
                            >
                            <div v-if="showTime">
                                <p
                                    class="mb-0 body-2 row my-0 text-center"
                                    v-for="(time, i) in opening"
                                    :key="i"
                                >
                                    <span class="col-md-6">{{ time }}</span>
                                    <span class="col-md-6">Open 24 hours</span>
                                </p>
                            </div>
                        </div>

                        <v-divider class="my-2"></v-divider>

                        <!-- facebook -->
                        <div class="my-2">
                            <v-icon size="20" class="mx-2">mdi-facebook</v-icon>
                            <a
                                href="https://www.facebook.com/1StopBedrooms/"
                                class="text-decoration-none"
                                >Facebook</a
                            >
                        </div>

                        <!-- twitter -->
                        <div class="my-2">
                            <v-icon size="20" class="mx-2">mdi-twitter</v-icon>
                            <a
                                href="https://twitter.com/1stopbedrooms"
                                class="text-decoration-none"
                                >Twitter</a
                            >
                        </div>

                        <!-- youtube -->
                        <div class="my-2">
                            <v-icon size="20" class="mx-2">mdi-youtube</v-icon>
                            <a
                                href="https://www.youtube.com/channel/UCpM_Vp2lXmLf6Vm8O1_KYvA"
                                class="text-decoration-none"
                                >Youtube</a
                            >
                        </div>

                        <!-- instagram -->
                        <div class="my-2">
                            <v-icon size="20" class="mx-2"
                                >mdi-instagram</v-icon
                            >
                            <a
                                href="https://www.instagram.com/1stopbedrooms/"
                                class="text-decoration-none"
                                >Instagram</a
                            >
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>

        <v-divider class="container"></v-divider>

        <!-- info -->
        <div class="container body-2">
            <p>
                Welcome to our 1StopBedrooms testimonials page! On this page
                you’ll find feedback from our customers about our service and
                the products we sell. Testimonials reflect our customers’
                opinion about their experiences with our company. These opinions
                will help others make the right choice when considering where to
                buy from.
            </p>
            <p>
                We gather 1StopBedrooms testimonials for several reasons. First,
                as you consider buying from us, we want to give you a chance to
                read first-hand stories from customers who have been where you
                are now. We know that buying from an online store can seem like
                a leap of faith. The input you find on this page will show you
                what others are saying about the experience they had with
                1stopbedrooms.
            </p>
            <p>
                Second, we want you to learn about the details of our furniture
                and services that stand out most to customers who choose us.
                While we are concerned with every aspect of your
                furniture-buying experience, these customers can relate the
                highlights that matter most to them. The information on this
                page is a deep dive into what it is like to navigate the
                website, order furniture, accept delivery, and contact our
                customer service department.
            </p>
            <p>
                What you discover when you read 1StopBedrooms testimonials is
                the thoughts and feelings of customers who know precisely what
                makes our company stand out. Their authentic stories tend to be
                very descriptive and highly personalized. By the time you finish
                reading them, you’ll have a clearer picture of what
                1StopBedrooms is all about. Whether you are a new or returning
                customer, we are here for you! Please share your thoughts with
                us! Furniture is what we sell but customers are who we serve.
            </p>
        </div>
    </div>
</template>

<script>
import GoogleMap from '~/components/GoogleMap'

export default {
    components: {
        GoogleMap,
    },
    head() {
        return {
            title: 'Testimonials | 1StopBedrooms',
        }
    },
    data() {
        return {
            formValid: false,
            tab: null,
            links: [
                {
                    text: 'Home',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Testimonials / 1StopBedrooms',
                    disabled: false,
                    href: '/testimonials',
                },
            ],
            review: {
                title: '',
                description: '',
                firstName: '',
                lastName: '',
                orderId: '',
                email: '',
                terms: false,
            },
            reviews: [
                {
                    firstName: 'Jessy',
                    lastName: 'Loren',
                    description: 'Awesome Services.',
                    time: 1,
                },
                {
                    firstName: 'SHERLEYS',
                    lastName: '',
                    description:
                        "I bought 6 dining chairs from Ashley Homestore. When I decided to go with a larger dining room table, I went back to Ashley for 2 more chairs only to find my chairs had been discontinued! I was desperate to find these chairs. By chance, I stumbled upon 1stopbedroom while doing a google search. I called and immediately got someone to help me. He was very pleasant. He informed me there were only 2 sets of chairs left, and if I wanted them I'd need to act fast and waive my free cancellation within 24 hours. I jumped on it and ordered one of the remaining sets with the rep. After I ordered with the pleasant man (I wish I remembered his name), I started to read reviews for 1stopbedroom and I became very very nervous. I found some good reviews, but also some pretty terrible ones! My heart sank, and I just resolved to believing it was too good to be true and not only would I not get my chairs for several months if at all, but I was probably out of about $350. Well, to my surprise, my chairs arrived 8 days after I initially called 1stopbedroom!! They came in perfect condition! (The box was beat up but the chairs were perfect). They are the exact match to the 6 I already had! They were also extremely easy to assemble-just had to put the legs on. I was so stunned at how easy of a process it was, especially after reading some other peoole's experiences with lost packages, waiting for months for their orders, and not being able to get customer service on the phone. I don't know if it was a fluke, but I had an excellent experience!",
                    time: 2,
                },
                {
                    firstName: 'Mary Ann',
                    lastName: 'Lovaglio',
                    description: 'Eddie was so great and helpful',
                    time: 3,
                },
                {
                    firstName: 'Veronica',
                    lastName: 'Karas',
                    description:
                        "I cannot say enough good things about 1stopbedrooms. From the first minute of contact with their sales department, Vera was BEYOND amazing at providing service. She helped pick the furniture, confirmed that it would fit appropriately, confirmed the layout of the dining room and made mattress suggestions, and then sent an update for each step of the order. There were no surprises which is amazing. Then came the actual delivery: I have never been so impressed with delivery, set up, and speed. It was perfect.. I didn't have to touch or rearrange anything. It came as scheduled, with the guys even calling me 30 minutes prior to arrival like I asked. The whole thing took 20 minutes - for an entire dining room set and bedroom set to get delivered and set up. PHENOMENAL! Vera even followed up with me the day of the delivery to make sure that all my expectations were met. Can't beat the price or the service!",
                    time: 4,
                },
                {
                    firstName: 'dawnklinger',
                    lastName: '',
                    description:
                        'I ordered furniture with 1StopBedrooms and I was very happy with the price and the quality of the furniture I ordered. The delivery service was excellent. Overall I received an excellent value for quality furniture.',
                    time: 5,
                },
                {
                    firstName: 'Calvin',
                    lastName: 'Hall',
                    description:
                        'Super fast built well very sturdy and the techs were very respectful thumbs up',
                    time: 6,
                },
                {
                    firstName: 'Anthony',
                    lastName: 'Blanford',
                    description:
                        'Very reasonably priced. Rather than waiting on hold, Customer Service conveniently has the option of reserving your place in line and receiving a call whenever it’s your turn. Once contacted, they were very helpful. I just placed my order yesterday so I have not yet received the furniture but so far so good. (Customer Service Rep. was Elliot)',
                    time: 7,
                },
                {
                    firstName: 'NikaKay',
                    lastName: '',
                    description:
                        "I cannot say enough good things about 1stopbedrooms. From the first minute of contact with their sales department, Vera was BEYOND amazing at providing service. She helped pick the furniture, confirmed that it would fit appropriately, confirmed the layout of the dining room and made mattress suggestions, and then sent an update for each step of the order. There were no surprises which is amazing. Then came the actual delivery: I have never been so impressed with delivery, set up, and speed. It was perfect.. I didn't have to touch or rearrange anything. It came as scheduled, with the guys even calling me 30 minutes prior to arrival like I asked. The whole thing took 20 minutes - for an entire dining room set and bedroom set to get delivered and set up. PHENOMENAL! Vera even followed up with me the day of the delivery to make sure that all my expectations were met. Can't beat the price or the service!",
                    time: 8,
                },
                {
                    firstName: 'Brandy',
                    lastName: 'Bell',
                    description: 'Exactly what I expected.',
                    time: 9,
                },
                {
                    firstName: 'Julie',
                    lastName: 'Williams',
                    description:
                        "I just had furniture delivered last week by Wayfair. They wanted to charge me $130.00 to set it up. Assembly was easy; HUGE boxes were not. I struggled with them until my son in law came over. Walks in delivery today for 1 Stop bedrooms. They truly had white gloves on; they did everything for me. Didn't have to do anything. Personable, courteous, skilled. Knew what they were doing. Thanks guys, you did a great job & I didn't have to pay an arm & leg for it. And did I mention good quality furniture? Very satisfied with all. Thanks! Jaw",
                    time: 10,
                },
                {
                    firstName: 'Kgamble',
                    lastName: '',
                    description: 'I love everything about it!',
                    time: 11,
                },
                {
                    firstName: 'William',
                    lastName: 'A. E. Brown',
                    description:
                        'The recliner I ordered was exactly as described, in perfect condition and at a great price. It was delivered on time by friendly and courteous delivery people. Great customer service who even took the time to confirm everything to make sure it was correct. What more could you ask?',
                    time: 12,
                },
                {
                    firstName: 'Mitzi',
                    lastName: 'Osborn',
                    description:
                        'Most Beautiful affordable furniture I have ever seen . The folks here they TRULY care bout you & what you are in need of . Please font be scared to purchase because let me BE THE FIRST TO TELL YOU , YOU WILL NOT BE DISSATISFIED WITH ANYTHING YOU PURCHASE . Blessings of Peace to Each of You Who take a moment to read my Message . Peace BE WITH YOU ....Mitzi. Osborn',
                    time: 13,
                },
                {
                    firstName: 'brownsbbqllc',
                    lastName: '',
                    description: 'Can’t ask for better service.',
                    time: 14,
                },
                {
                    firstName: 'Paul Phong',
                    lastName: 'Vanh Pasert',
                    description:
                        "I'm very happy the product and the delivery they put exactly where I wanted to be I will do business with 1stopbedroom again.",
                    time: 15,
                },
                {
                    firstName: 'Kay',
                    lastName: 'Adams',
                    description:
                        'I was looking for a cart to use by my banquette that would be serviceable by holding food dishes, ice, etc. And since the space is limited I needed it to be somewhat invisible. This cart is lovely, moves easily, and holds everything I need by my breakfast table! Thanks!',
                    time: 16,
                },
                {
                    firstName: 'SusanMillerHowe',
                    lastName: '',
                    description:
                        'months), however customer service was helpful and my overall experience was good. stuff happens, i get it. The furniture and set up went well and i do love the bedroom set. i would recommend using 1StopBedrooms.',
                    time: 17,
                },
                {
                    firstName: 'scott',
                    lastName: 'ballah',
                    description:
                        'Easiest furniture purchase I’ve ever made! And I didn’t have to touch a piece of it to get it in the house!! ???????? Great customer service and excellent communication!',
                    time: 18,
                },
                {
                    firstName: 'Autumns',
                    lastName: 'Desire',
                    description:
                        'The delivery was quick. The team was efficient and assembled the furniture very quickly; also, they were both polite and friendly, ready to answer questions. I am very happy with my new furniture and the white glove service with which it was delivered.',
                    time: 19,
                },
                {
                    firstName: 'seadebra',
                    lastName: '',
                    description:
                        'The service was great. Thy hey placed the furniture where I wanted it and also gave me some good feedback as to where to place my 2 mirrors. The service was great. I LOVE MY FURNITURE. THANKS 1STOPBEDROOM. I WILL BE ORDERING MORE FURNITURE FROM YOU . THANKS AGAIN.The men did an outstanding job considering the furniture was very heavy and they head to bring it upstairs. I wish all customer service was like this. This started from the beginning of my order to the end. Everything was wrapped well. HATS OFF TO ALL OF THE TEAM',
                    time: 20,
                },
            ],
            selectedSortedType: null,
            sorts: ['Recommended', 'Newest', 'Oldest'],
            showTime: false,
            opening: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
            ],
            rules: {
                required: (v) => !!v || 'This field required.',
                minLenght: (v) => v.length >= 3 || 'Min 3 characters required',
                email: (v) => /\S+@\S+\.\S+/.test(v) || 'E-mail must be valid',
            },
        }
    },
    methods: {
        saveReview(review) {
            if (this.$refs.myForm.validate()) {
                review.time = this.reviews.length+1;
                this.reviews.unshift(review)
            } else {
                this.$refs.myForm.validate()
            }
        },
        sort(type) {
            if (type === 'Newest') {
                this.reviews.sort((a, b) => (a.time < b.time ? -1 : 1))
            }
            if (type === 'Oldest') {
                this.reviews.sort((a, b) => (a.time > b.time ? -1 : 1))
            }
        },
    },
}
</script>

<style>
.reviwes {
    width: 1130px;
    display: flex;
    margin: 10px auto;
}
.contactInfo a,
.contactInfo span {
    font-size: 14px;
}
.avatarVerifiedIcon::before {
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/review/checked_v2.png?vabdefcee)
        0 0 no-repeat;
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 0;
    right: -3px;
    content: '';
}
.googleIcon {
    background: url(https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/review/google.png?v27bb3356)
        0 0 no-repeat;
    width: 49px;
    height: 16px;
    margin-right: 4px;
    vertical-align: middle;
    display: inline-block;
}
.reviewContent {
    font-size: 13px;
    color: #585858;
    font-weight: 400;
}
</style>