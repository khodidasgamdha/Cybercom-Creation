<template>
    <div class="container mb-10">
        <p class="headline font-weight-light mb-2 mt-5">Secure Checkout</p>
        <v-card class="grey lighten-4 pa-5" flat>
            
            <!-- already have an account -->
            <v-row v-if="$store.state.auth.loggedIn != true">
                <v-col sm="4" cols="12">
                    <v-text-field
                        label="Email"
                        outlined
                        dense
                        :rules="[rules.email]"
                    ></v-text-field>
                </v-col>
                <v-col cols="auto" class="align-self-center">
                    <p>
                        Already have an account?
                        <n-link
                            class="text-decoration-none"
                            to="/customer/account/login"
                            >Sign In here</n-link
                        >
                    </p>
                </v-col>
            </v-row>

            <!-- address -->
            <v-row>
                <v-col md="6" cols="12">
                    <p class="headline mb-0">Billing Address</p>
                    <v-divider class="my-2"></v-divider>
                    <OnepageAddress class="mt-11" />
                </v-col>
                <v-col md="6" cols="12">
                    <p class="headline mb-0">Shipping Address</p>
                    <v-divider class="my-2"></v-divider>
                    <v-checkbox
                        v-model="shippingAddress"
                        label="My Billing and Shipping address are the same"
                        dense
                    ></v-checkbox>
                    <OnepageAddress v-if="!shippingAddress" />
                </v-col>
            </v-row>

            <!-- create password -->
            <div v-if="$store.state.auth.loggedIn != true">
                <p class="mt-10 mb-0">
                    <span class="title">Create a password</span>
                    <span class="secondary--text">(optional)</span>
                </p>
                <v-divider class="my-2"></v-divider>
                <p class="body-2 font-weight-light">
                    You can log in to view your order status anytime
                </p>

                <v-row>
                    <!-- password -->
                    <v-col md="3" sm="6" cols="12">
                        <v-text-field
                            v-model="register.password"
                            label="Password"
                            hint="At least 6 characters"
                            outlined
                            dense
                            :rules="[rules.required, rules.minLenght]"
                        ></v-text-field>
                    </v-col>
                    <!-- confirm password -->
                    <v-col md="3" sm="6" cols="12">
                        <v-text-field
                            v-model="register.confirmPassword"
                            :rules="[
                                rules.required,
                                rules.minLenght,
                                rules.passwordMatch,
                            ]"
                            label="Confirme Password"
                            hint="At least 6 characters"
                            outlined
                            dense
                        ></v-text-field>
                    </v-col>
                </v-row>
            </div>

            <!-- review order -->
            <div>
                <v-row class="mt-5 justify-space-between">
                    <v-col cols="auto">
                        <p class="mb-0 headline">Review your order</p>
                    </v-col>
                    <v-col cols="auto">
                        <n-link
                            class="text-decoration-none body-2"
                            to="/checkout/cart"
                            >Edit Your Cart</n-link
                        >
                    </v-col>
                </v-row>
                <v-divider class="my-2"></v-divider>

                <!-- products -->
                <div v-for="(item, i) in cartItems" :key="i" class="mb-10">
                    <p class="my-5">
                        Shipment {{ i + 1 }} of {{ cartItems.length }} -
                        {{ item.product.brand }}
                    </p>
                    <v-card class="rounded-0" flat>
                        <v-row>
                            <v-col md="1" cols="2" class="pl-6">
                                <img
                                    :src="item.product.imageUrl"
                                    :alt="item.product.title"
                                    width="100"
                                />
                            </v-col>
                            <v-col md="5" cols="7" class="pl-10">
                                <p class="title font-weight-light mb-0">
                                    {{ item.product.description }}
                                </p>
                                <p
                                    class="
                                        grey--text
                                        body-2
                                        font-weight-light
                                        mb-1
                                    "
                                >
                                    by {{ item.product.brand }} |
                                    <span class="font-italic"
                                        >Web Id : {{ item.product.sku }}</span
                                    >
                                </p>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="2" class="d-none d-xl-flex d-lg-flex d-md-flex">
                                <p class="mb-0 body-2">
                                    <span class="font-weight-bold"
                                        >Home Delivery - Free</span
                                    ><br />
                                    <span
                                        >(Scheduled delivery to your immediate
                                        entryway)</span
                                    >
                                </p>
                            </v-col>
                            <v-col cols="1">
                                <p class="mb-0 body-2">
                                    Qty: {{ item.quantity }}
                                </p>
                            </v-col>
                            <v-col cols="2">
                                <p class="headline mb-0">
                                    {{ item.product.price }}
                                </p>
                                <p class="my-0 red--text caption">
                                    Total Savings
                                </p>
                                <p class="my-0 red--text caption">
                                    $
                                    {{
                                        Math.round(
                                            (item.product.originalPrice.split(
                                                '$'
                                            )[1] -
                                                item.product.price.split(
                                                    '$'
                                                )[1]) *
                                                100
                                        ) / 100
                                    }}
                                </p>
                            </v-col>
                        </v-row>
                    </v-card>
                </div>
            </div>

            <!-- payment -->
            <div>
                <p class="mb-0 headline">How would you like to pay?</p>
                <v-divider class="my-2"></v-divider>

                <div class="mx-4">
                    <!-- payment methods -->
                    <v-radio-group v-model="paymentMethod" dense row>
                        <v-radio
                            v-for="(type, index) in paymentChoice"
                            :key="index"
                            :value="type.value"
                        >
                            <template #label>
                                <v-img :src="type.src"></v-img>
                            </template>
                        </v-radio>
                    </v-radio-group>

                    <!-- credit card & number -->
                    <v-row>
                        <v-col md="3" cols="6">
                            <v-select
                                v-model="creditCardType"
                                :items="creditCardTypes"
                                label="Credit Card Type"
                                outlined
                                dense
                                :rules="[rules.required]"
                            ></v-select>
                        </v-col>
                        <v-col md="3" cols="6">
                            <v-text-field
                                v-model.number="creditCardNumber"
                                label="Credit Card Number"
                                type="number"
                                outlined
                                dense
                                :rules="[rules.required, rules.cardNumber]"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <!-- expiry date & CVV -->
                    <v-row class="mt-0">
                        <v-col md="3" cols="4">
                            <v-select
                                v-model="expirationDate.month"
                                :items="expirationDateMonths"
                                label="Expiry Date Month"
                                outlined
                                dense
                                :rules="[rules.required]"
                            ></v-select>
                        </v-col>
                        <v-col md="3" cols="4">
                            <v-select
                                v-model="expirationDate.year"
                                :items="expirationDateYears"
                                label="Expiry Date Year"
                                outlined
                                dense
                                :rules="[rules.required]"
                            ></v-select>
                        </v-col>
                        <v-col md="2" cols="4">
                            <v-text-field
                                v-model.number="cvv"
                                label="CVV"
                                type="number"
                                outlined
                                dense
                                append-outer-icon="mdi-credit-card-outline"
                                :rules="[rules.required, rules.cvv]"
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>
                </div>

                <v-divider class="my-2"></v-divider>
            </div>

            <!-- order summary -->
            <v-card class="grey lighten-4 rounded-0 my-5" flat>
                <v-row class="mx-0">
                    
                    <!-- terms & conditions -->
                    <v-col md="6" cols="12" class="pb-0">
                        <v-row class="mb-5 guardian">
                            <v-col
                                cols="2"
                                align="center"
                                class="green darken-2"
                            >
                                <img
                                    src="https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/cc0ec2d91bc4dd8becc1b9167d5c2be1/g/u/guardian.png"
                                    alt="guardian"
                                    class="mt-3"
                                />
                            </v-col>
                            <v-col
                                cols="auto"
                                align="center"
                                class="align-self-center"
                            >
                                <p class="mb-0 title">
                                    Guardian 5 Year Warranty
                                </p>
                                <p
                                    class="
                                        mb-0
                                        body-2
                                        font-weight-light
                                        grey--text
                                    "
                                >
                                    Covers entire purchase
                                </p>
                                <a
                                    to="https://www.1stopbedrooms.com/guardian-5-year-protection-plan"
                                    class="mb-0 caption text-decoration-underline"
                                    >Learn More</a
                                >
                            </v-col>
                            <v-col cols="auto" class="align-self-center">
                                <p
                                    class="
                                        mb-0
                                        grey-text
                                        text-decoration-line-through
                                        body-2
                                    "
                                >
                                    $199
                                </p>
                                <p class="mb-0 black--text title">$99</p>
                            </v-col>
                            <v-col cols="auto" class="align-self-center">
                                <v-btn
                                    class="text-capitalize"
                                    outlined
                                    color="primary"
                                >
                                    Add Plan
                                </v-btn>
                            </v-col>
                        </v-row>

                        <p class="mb-2 headline font-weight-light">
                            Terms & Conditions
                        </p>
                        
                        <!-- open t&c box -->
                        <v-dialog width="1000px">
                            <template v-slot:activator="{ on, attrs }">
                                <div 
                                    class="mb-0 caption terms"
                                    v-bind="attrs"
                                    v-on="on"
                                >{{ terms }}</div>
                            </template>
                            <v-card>
                                <v-card-title class="indigo darken-2">
                                    <span class="headline white--text">Terms & Conditions</span>
                                </v-card-title>
                                <v-card-text>
                                    {{ terms }}
                                </v-card-text>
                            </v-card>
                        </v-dialog>
                        
                        <!-- <div class="mb-0 caption terms">{{ terms }}</div> -->
                        <v-checkbox
                            v-model="newssletter"
                            label="Sign Up For Newssletter"
                            dense
                        ></v-checkbox>
                    </v-col>

                    <!-- total bill -->
                    <v-col md="6" cols="12">
                        <v-card class="rounded-0 pa-4" flat>
                            <p class="headline mb-0">Order Summery</p>
                            <v-divider class="mt-2"></v-divider>

                            <!-- sub total -->
                            <v-row class="mb-n7 mt-3 font-weight-bold">
                                <v-col md="auto"> Subtotal </v-col>
                                <v-spacer></v-spacer>
                                <v-col md="auto"
                                    >${{
                                        Math.round(cartTotal * 100) / 100
                                    }}</v-col
                                >
                            </v-row>

                            <!-- shipping -->
                            <v-row class="font-weight-bold">
                                <v-col md="auto"> Shipping </v-col>
                                <v-spacer></v-spacer>
                                <v-col md="auto">FREE!</v-col>
                            </v-row>
                            <v-divider class="mt-2"></v-divider>

                            <!-- total -->
                            <v-row class="headline mt-1">
                                <v-col md="auto"> Total </v-col>
                                <v-spacer></v-spacer>
                                <v-col md="auto">
                                    <p class="red--text">
                                        ${{ Math.round(cartTotal * 100) / 100 }}
                                    </p>
                                </v-col>
                            </v-row>
                            <v-divider class="mb-3"></v-divider>

                            <!-- place order -->
                            <v-row class="justify-space-between">
                                <v-col cols="auto">
                                    <v-checkbox
                                        v-model="termsAndConditions"
                                        label="I read and agree to the Terms & Conditions"
                                        dense
                                        class="caption"
                                    ></v-checkbox>
                                </v-col>
                                <v-col cols="5">
                                    <v-btn
                                        class="
                                            text-capitalize
                                            orange
                                            darken-4
                                            rounded-0
                                        "
                                        block
                                        large
                                        dark
                                        to="/"
                                    >
                                        Place Order
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>

                </v-row>
            </v-card>

        </v-card>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import OnepageAddress from '../components/OnepageAddress'

export default {
    middleware: 'onepage',
    components: {
        OnepageAddress,
    },
    head() {
        return {
            title: 'Onepage Checkout',
        }
    },
    data() {
        return {
            shippingAddress: true,
            newssletter: true,
            termsAndConditions: true,
            register: {
                password: '',
                confirmPassword: '',
            },
            paymentMethod: 'Credit Card',
            paymentChoice: [
                {
                    value: 'Credit Card',
                    src: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/credit_card.png',
                },
                {
                    value: 'Paypal',
                    src: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/icon_paypal_express.png',
                },
                {
                    value: 'Paypal Credit',
                    src: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/ppcredit-logo-medium.png',
                },
                {
                    value: 'Affirm',
                    src: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/blue_logo-transparent_bg-v2.png',
                },
            ],
            creditCardNumber: '',
            expirationDate: {
                month: '',
                year: '',
            },
            cvv: '',
            creditCardType: '',
            creditCardTypes: [
                'American Express',
                'Visa',
                'MasterCard',
                'Discover',
            ],
            expirationDateMonths: [
                '01 - January',
                '02 - February',
                '03 - March',
                '04 - April',
                '05 - May',
                '06 - June',
                '07 - July',
                '08 - August',
                '09 - Saptember',
                '10 - October',
                '11 - November',
                '12 - December',
            ],
            expirationDateYears: [
                2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
            ],
            rules: {
                required: (v) => !!v || 'This field required.',
                minLenght: (v) => v.length >= 6 || 'Min 6 characters required',
                cvv: (v) => v.length == 3 || '3 characters required',
                cardNumber: (v) => v.length == 12 || '12 characters required',
                email: (v) => /\S+@\S+\.\S+/.test(v) || 'E-mail must be valid',
                passwordMatch: (v) =>
                    this.register.password === v ||
                    `Confirm Password doesn't match with Password`,
            },
            terms: 'This site is provided as a service to our clients. Please review the following basic rules that govern the use of this 1stopbedrooms inc site. Note that your use of the 1stopbedrooms inc site, (the "Site") constitutes your unconditional agreement to follow and be bound by these Terms of Use. Although you may "bookmark" a portion of this Site and thereby bypass these Terms of Use, your use of this Site still binds you to the Terms of Use. 1stopbedrooms inc reserves the right to update or modify these Terms of Use at any time without prior notice to you. For this reason, we recommend you review these Terms of Use whenever you use this Site.Use of this Site By accepting the Terms of Use through your use of the Site, you attest that you are 18 years of age or older. If you are under 18 years of age but at least 13 years of age you may use this Site only with the supervision of a parent or legal guardian who agrees to be bound by these Terms of Use. 1stopbedrooms inc does not knowingly collect personal information about children under age 13 without prior parental consent. Children under 13 years of age may not use this Site other than for browsing, and parents or legal guardians may not agree to these Terms of Use on their behalf. If you are a parent or legal guardian agreeing to these Terms of Use for the benefit of a child between the ages of 13 and 18, be advised that you are fully responsible for his or her use of this Site, including all financial charges and legal liability that he or she may incur. If you do not agree to (or cannot comply with) any of these terms and conditions, do not use this Site. All billing and registration information provided must be truthful and accurate. Providing any untruthful or inaccurate information constitutes a breach of these Terms of Use. By confirming your purchase at the end of the checkout process, you agree to pay for and accept the item(s) requested. All materials, including images, text, illustrations, designs, icons, photographs, programs, music clips or downloads, video clips and written and other materials that are part of this Site (collectively, the "Contents") are intended solely for personal, non-commercial use. You may download or copy the Contents and other downloadable materials displayed on the Site for personal use only. No right, title or interest in any downloaded materials or software is transferred to you as a result of any such downloading or copying. You may not reproduce (except as noted above), publish, transmit, distribute, display, modify, create derivative works from, sell or participate in any sale of or exploit in any way, in whole or in part, any of the Contents, the Site or any related software. All software used on this Site is the property of 1stopbedrooms inc or its suppliers and protected by U.S. and international copyright laws. The Contents and software on this Site may be used only as a shopping resource. Any other use, including the reproduction, modification, distribution, transmission, republication, display, or performance, of the Contents on this Site is strictly prohibited. Third Party Sites References on this Site to any names, marks, products or services of third parties, or hypertext links to third party sites or information are provided solely as a convenience to you and do not in any way constitute or imply 1stopbedrooms inc \'s endorsement, sponsorship or recommendation of the third party, its information, products or services. 1stopbedrooms inc is not responsible for the practices or policies of such third parties, nor the content of any third party sites, and does not make any representations regarding third party products or services, or the content or accuracy of any material on such third party sites. If you decide to link to any such third party sites, you do so entirely at your own risk.Site Security You are prohibited from violating or attempting to violate the security of the Site, including, without limitation, (a) accessing data not intended for such user or logging onto a server or an account which the user is not authorized to access; (b) attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorization; (c) attempting to interfere with service to any user, host or network, including, without limitation, via means of submitting a virus to the Site, overloading, "flooding," "spamming," "mailbombing" or "crashing;" (d) sending unsolicited email, including promotions and/or advertising of products or services; or (e) forging any TCP/IP packet header or any part of the header information in any email or newsgroup posting. Violations of system or network security may result in civil or criminal liability. 1stopbedrooms inc will investigate occurrences that may involve such violations and may involve, and cooperate with, law enforcement authorities in prosecuting users who are involved in such violations. You agree not to use any device, software or routine to interfere or attempt to interfere with the proper working of this Site or any activity being conducted on this Site. You agree, further, not to use or attempt to use any engine, software, tool, agent or other device or mechanism (including without limitation browsers, spiders, robots, avatars or intelligent agents) to navigate or search this Site other than the search engine and search agents available from 1stopbedrooms inc on this Site and other than generally available third party web browsers. Order Acceptance Please note that there may be certain orders that we are unable to accept and must cancel. We reserve the right, at our sole discretion, to refuse or cancel any order for any reason. Some situations that may result in your order being canceled include limitations on quantities available for purchase, inaccuracies or errors in product or pricing information, or problems identified by our credit and fraud avoidance department. We may also require additional verifications or information before accepting any order. We will contact you if all or any portion of your order is canceled or if additional information is required to accept your order. If your order is canceled after your credit card has been charged, we will issue a credit to your credit card in the amount of the charge. Pricing Information While 1stopbedrooms inc strives to provide accurate pricing information, pricing or typographical errors may occur. 1stopbedrooms inc cannot confirm the price of an item until after you order. In the event that an item is listed at an incorrect price due to an error in pricing, 1stopbedrooms inc shall have the right, at 1stopbedrooms inc \'s sole discretion, to refuse or cancel any orders placed for that item. In the event that an item is mispriced, 1stopbedrooms inc may, at 1stopbedrooms inc \'s discretion, either contact you for instructions or cancel your order and notify you of such cancellation. We do our best to provide you with great values on the Site as well as in our stores. However, sometimes a price online does not match the price in a store. In our effort to be the lowest price provider in your particular geographic region, store pricing will sometimes differ from online prices. Our stores do not honor Internet pricing. Content Information 1stopbedrooms inc attempts to be accurate in its product descriptions. However, 1stopbedrooms inc does not warrant that product descriptions or other Content of this Site is accurate, complete, reliable, current, or error-free. If you find a product is not as described, your sole remedy is to return it in unused condition.Return PolicyWe are pleased to offer a 30 Day Hassle-Free Return Policy that starts on the day you receive your order. If you are dissatisfied with your purchase for any reason, you can return it to our warehouse for a refund within 30 days of delivery in the original condition and packaging.Requirements for a Full Refund Items must be in new and unused condition. Items must be returned with all of their original packaging and accessories.Items must be shipped back to us fully insured using a trackable shipping method at your expense. Items must not be assembled or modified in any way. Items must include a return authorization number provided by 1StopBedrooms. Fees and Deductions All returns and exchanges are subject to a 15% restocking fee plus applicable return shipping fees listed below. A return shipping cost estimated at $1.75 per pound will be deducted off your refund if: You choose to have 1StopBedrooms pick up your return from your residence or delivered address. You refuse delivery for any reason without consent from 1StopBedrooms. You refuse an entire shipment because only a part of an item is damaged. The delivery address you provided was invalid and the order could not be delivered. You choose to cancel your order and it is past the cancellation timeframe. If an item does not fit in your home and/or through your door. If you only return part of an order that included a package discount, the package discount will be void and you will be credited less the amount of the discount. If parts or accessories are missing from the original packaging, a fee will be deducted from your refund. *Remote delivery locations may be subject to additional charges.Items That Can Not Be ReturnedItems marked "Final Sale" or "Special Order" Items that have already been assembled (unless written exception is provided by 1StopBedrooms) Mattresses, Bedding and linens are also non-refundable and cannot be exchanged. YOU MAY INITIATE A RETURN OR EXCHANGE ONLINE, BY PHONE OR LIVE CHAT. Tips to Avoid a Return Prior to placing your order please make sure that the item you are ordering will fit through your door and in the space where it will go. If it doesn\'t the delivery company may have to leave the product right outside your door, on a porch or in a garage. If your item arrives with minor or cosmetic damages due to shipping, don\'t worry. We can attempt to replace the damaged parts on the product so you can avoid returning it. Cancellation Policy To make sure you receive your order as quick as possible we process all orders the moment they come in, for this reason orders may only be canceled within 24 hours of placement without incurring any fees. Orders cancelled after 24 hours may be subject to a 15% restocking fee plus a return shipping fee at an estimated $1.75 per pound. If you cancel, return, or exchange only part of an order that included a package discount, you will forfeit your package discount and be credited less the amount of the discount. If there are backordered products on your order and you choose to wait for the backordered products to become available, we will make payment to the manufacturer to ensure that the products are reserved for you when they become available and not sold to anyone else. Your order will be considered a "special order" and therefore can not be cancelled. To cancel an order please contact us . Once cancelled your order status will change to cancelled and a cancellation confirmation email will be sent. Please keep this email as confirmation that you have cancelled your order. If you do not have a cancellation confirmation email or your order status in your customer portal does not say cancelled, your order was not cancelled. Delivery Policy Normal delivery hours are 8am-6pm Monday-Friday. Any special requests outside our normal delivery hours may be subject to additional fees. An adult must be present to accept and sign for delivery of your new furniture. All deliveries are fully insured from the time it leaves our warehouse until arrival at your home. All items must be inspected for damage at the time of delivery. All damage must be notated on the delivery reciept / bill of lading.',
        }
    },
    computed: mapGetters('cart', ['cartItems', 'cartTotal']),
}
</script>

<style>
.guardian {
    border: 1px solid #c2c2c2;
    background-color: #fff;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.19);
    height: 120px;
}
.terms {
    height: 60px;
    overflow-y: auto;
    border-bottom: 2px solid #c2c2c2;
}
</style>