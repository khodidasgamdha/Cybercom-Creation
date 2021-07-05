<template>
    <div>

        <!-- links -->
        <v-breadcrumbs :items="links" class="px-16 py-1"></v-breadcrumbs>

        <div class="grey lighten-4 px-16 py-10">

            <!-- cards -->
            <v-row>
                <v-col md="4" v-for="(card, i) in cards" :key="i">
                    <v-card height="150" class="rounded-0" flat>
                        <v-img
                            :src="card.img"
                            :alt="card.title"
                            width="120"
                            class="float-left ma-10"
                        ></v-img>
                        <div class="pt-10">
                            <p
                                class="
                                    subtitle-1
                                    font-weight-bold
                                    mb-0
                                    text-center
                                "
                            >
                                {{ card.title }}
                            </p>
                            <p class="text-center body-2 black--text">
                                {{ card.info }}
                            </p>
                        </div>
                    </v-card>
                </v-col>
            </v-row>

            <h1 class="text-center black--text">Coupon Codes</h1>
            <p class="text-center black--text my-3">
                *In addition to the 1StopBedrooms sale price, receive an
                additional discount by entering one of the applicable coupon
                codes below at checkout.
            </p>
            <p class="font-weight-regular text-center black--text title mb-0">
                Questions? Call Us
                <span class="font-weight-bold"> 866-456-8823 </span>
            </p>
        </div>

        <!-- coupons -->
        <v-row class="my-10 mx-16">
            
            <!-- total based discount -->
            <v-col md="6" cols="12" class="black--text text-center">
                <p class="headline">
                    Coupon codes for discounts based on order totals
                </p>
                <v-row>
                    <v-col
                        v-for="(coupon, i) in totalOrderDiscount"
                        :key="i"
                        cols="4"
                    >
                        <v-card
                            height="200"
                            class="grey lighten-4 pa-5"
                            flat
                            tile
                        >
                            <v-card-text class="black--text">
                                <p class="caption mb-0">SAVE</p>
                                <p class="headline font-weight-bold mb-0">
                                    ${{ coupon.save }}
                                </p>
                                <p
                                    class="
                                        red--text
                                        py-1
                                        caption
                                        font-weight-bold
                                        mb-0
                                    "
                                >
                                    "SAVE ${{ coupon.save }}"
                                </p>
                                <p class="caption mb-0 font-weight-regular">
                                    use coupon code for orders over ${{ coupon.total }}
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

            <v-divider vertical></v-divider>

            <!-- brand based discount -->
            <v-col md="6" cols="12" class="black--text text-center">
                <p class="headline">Coupon codes for manufacturer discounts</p>
                <v-row>
                    <v-col
                        v-for="(coupon, i) in brandDiscount"
                        :key="i"
                        cols="4"
                    >
                        <v-card
                            height="200"
                            class="blue lighten-5 px-5"
                            flat
                            tile
                        >
                            <v-card-text align="center" class="black--text">
                                <v-img
                                    :src="coupon.img"
                                    :alt="coupon.brand"
                                    width="70%"
                                ></v-img>
                                <p class="caption mb-0">SAVE</p>
                                <p class="headline font-weight-bold mb-0">
                                    {{ coupon.discount }}%
                                </p>
                                <p
                                    class="
                                        indigo--text
                                        body-2
                                        font-weight-bold
                                        py-1
                                        mb-0
                                    "
                                >
                                    "{{ coupon.code }}"
                                </p>
                                <p
                                    v-if="coupon.total"
                                    class="caption font-weight-regular mb-0"
                                >
                                    off all {{ coupon.brand }} orders over ${{ coupon.total }}
                                </p>
                                <p
                                    v-else
                                    class="caption font-weight-regular mb-0"
                                >
                                    off all {{ coupon.brand }} orders
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

        </v-row>

        <!-- question -->
        <v-card
            class="grey lighten-3 mx-16 mb-5 pa-8 text-center black--text"
            flat
        >
            <p class="mb-0 body-2">
                *Coupon codes do not apply for Bestar, AICO, Kincaid, Hammary and
                Hooker products. Additionally they do not apply on discontinued
                items and items marked "Special Price".<br />
                *Some brands may be excluded from sale, see product page to view
                available discount. Only 1 coupon per household, promotions can not
                be combined.
            </p>
            <p class="title mt-5 mb-0 font-weight-regular">
                Question? Call us
                <span class="font-weight-bold"> 866-456-8823 </span>
            </p>
        </v-card>

    </div>
</template>

<script>
export default {
    head: {
        title: 'Coupon Codes',
    },
    data() {
        return {
            links: [
                {
                    text: 'Home',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Coupon Code',
                    disabled: false,
                    href: '/coupon-code',
                },
            ],
            cards: [
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/coupon-code-cms/free-shipping.svg',
                    title: 'FREE Shipping',
                    info: 'On all Orders',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/coupon-code-cms/1sb-affirm.svg',
                    title: 'Buy Now, Pay Later!',
                    info: 'Up to 36 months* financing',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/coupon-code-cms/price-match.svg',
                    title: 'Price Match Guarantee',
                    info: 'Found a lower price? Just let us know and we’ll beat it!',
                },
            ],
            totalOrderDiscount: [
                { save: 25, total: 999 },
                { save: 50, total: 1499 },
                { save: 100, total: 2299 },
                { save: 150, total: 2999 },
                { save: 200, total: 3699 },
                { save: 250, total: 4199 },
                { save: 300, total: 4999 },
                { save: 350, total: 5699 },
                { save: 400, total: 6199 },
                { save: 450, total: 6999 },
            ],
            brandDiscount: [
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/coupon-code-cms/a-america.png',
                    brand: 'A-America',
                    code: 'AA15',
                    discount: 15,
                    total: 999,
                    link: 'https://www.1stopbedrooms.com/brand/a-america',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/coupon-code-cms/american_drew_logo.png',
                    brand: 'American Drew',
                    code: 'AD10',
                    discount: 10,
                    total: 999,
                    link: 'https://www.1stopbedrooms.com/brand/american-drew',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/coupon-code-cms/catnapper_logo_v1.png',
                    brand: 'CATNAPPER',
                    code: 'CAT10',
                    discount: 10,
                    total: 1299,
                    link: 'https://www.1stopbedrooms.com/brand/catnapper',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/coupon-code-cms/jackson-logo_v1.png',
                    brand: 'JACKSON',
                    code: 'JACKSON10',
                    discount: 10,
                    total: 1299,
                    link: 'https://www.1stopbedrooms.com/brand/jackson',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/coupon-code-cms/leather-italia-usa.png',
                    brand: 'Leather Italia USA',
                    code: 'LIU20',
                    discount: 20,
                    link: 'https://www.1stopbedrooms.com/brand/leather-italia-usa',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/coupon-code-cms/ART_v2.png',
                    brand: 'ART',
                    code: 'ART10',
                    discount: 10,
                    total: 699.99,
                    link: 'https://www.1stopbedrooms.com/brand/a-r-t',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/coupon-code-cms/essentials-for-living_logo_1_coupon.png',
                    brand: 'Essentials For Living',
                    code: 'EFL10',
                    discount: 10,
                    total: 499,
                    link: 'https://www.1stopbedrooms.com/brand/essentials-for-living',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/coupon-code-cms/Modloft_logo_coupon.png',
                    brand: 'MODLOFT',
                    code: 'MODLOFT5',
                    discount: 5,
                    total: 999,
                    link: 'https://www.1stopbedrooms.com/brand/modloft',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/coupon-code-cms/dimplex-2020.png',
                    brand: 'dimplex',
                    code: 'DIM10',
                    discount: 10,
                    link: 'https://www.1stopbedrooms.com/brand/dimplex',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/coupon-code-cms/hammary-2020.png',
                    brand: 'Hammary',
                    code: 'HAM10',
                    discount: 10,
                    link: 'https://www.1stopbedrooms.com/brand/hammary',
                },
                {
                    img: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/coupon-code-cms/parker-house-2020.png',
                    brand: 'Parker House',
                    code: 'PAH10',
                    discount: 10,
                    link: 'https://www.1stopbedrooms.com/brand/parker-house',
                },
            ],
        }
    },
}
</script>