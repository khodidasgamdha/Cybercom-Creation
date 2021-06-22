<template>
    <div class="container">
        <p class="headline font-weight-light mb-0">Secure Checkout</p>
        <v-card class="grey lighten-4 pa-5" flat>
            
            <!-- already have an account -->
            <v-row>
                <v-col md="3">
                    <v-text-field 
                        label="Email" 
                        outlined 
                        dense
                        :rules="[rules.email]"
                    ></v-text-field>
                </v-col>
                <v-col cols="auto" class="mt-2">
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
            <div>
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
                            <v-col cols="1" class="pl-6">
                                <img
                                    :src="item.product.imageUrl"
                                    :alt="item.product.title"
                                    width="150%"
                                />
                            </v-col>
                            <v-col cols="5" class="pl-10">
                                <p class="title font-weight-light mb-0">
                                    {{ item.product.description }}
                                </p>
                                <p class="grey--text body-2 font-weight-light mb-1">
                                    by {{ item.product.brand }} |
                                    <span class="font-italic"
                                        >Web Id : {{ item.product.sku }}</span
                                    >
                                </p>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="2">
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
                                <p class="mb-0 body-2">Qty: {{ item.quantity }}</p>
                            </v-col>
                            <v-col cols="2">
                                <p class="headline mb-0">
                                    {{ item.product.price }}
                                </p>
                                <p class="my-0 red--text caption">Total Savings</p>
                                <p class="my-0 red--text caption">
                                    $
                                    {{
                                        item.product.originalPrice.split('$')[1] -
                                        item.product.price.split('$')[1]
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
            <v-card class="rounded-0 my-5" flat>
                <v-row class="mx-0">
                    <!-- terms & conditions -->
                    <v-col md="6" cols="12">
                        <p class="mb-0 headline font-weight-light">
                            Terms & Conditions
                        </p>
                        <p class="mb-0 caption">{{ terms }}</p>
                        <v-checkbox
                            v-model="newssletter"
                            label="Sign Up For Newssletter"
                            dense
                            class="caption"
                        ></v-checkbox>
                    </v-col>

                    <!-- total bill -->
                    <v-col md="6" cols="12">
                        <v-card class="grey lighten-4 rounded-0 pa-4" flat>
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
                passwordMatch: (v) => this.register.password === v || `Confirm Password doesn't match with Password`,
            },
            terms: 'This site is provided as a service to our clients. Please review the following basic rules that govern the use of this 1stopbedrooms inc site. Note that your use of the 1stopbedrooms inc site, (the Site) constitutes your unconditional agreement to follow and be bound by these Terms of Use. Although you may bookmark a portion of this Site and thereby bypass these Terms of Use, your use of this Site still binds you to the Terms of Use. 1stopbedrooms inc reserves the right to update or modify these Terms of Use at any time without prior notice to you. For this reason, we recommend you review these Terms of Use whenever you use this Site.this Site and thereby bypass these Terms of Use, your use of this Site still binds you to the Terms of Use. 1stopbedrooms inc reserves the right to update or modify these Terms of Use at any time without prior notice to you. For this reason, we recommend you review these Terms of Use whenever you use this Site',
        }
    },
    computed: mapGetters('cart', ['cartItems', 'cartTotal']),
}
</script>

<style>
.v-label {
    font-size: 13px;
}
</style>