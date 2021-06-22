<template>
    <div class="mx-16">
        <!-- links -->
        <v-breadcrumbs :items="links" class="mt-n4 px-0"></v-breadcrumbs>

        <!-- heading -->
        <p class="headline font-weight-light">Track Your Order</p>

        <!-- form -->
        <form action="">
            <p class="subtitle-1 font-weight-light mb-0">
                Please enter your Order Number and Email address below.
            </p>
            <v-divider class="mb-8"></v-divider>
            
            <!-- email, order number -->
            <v-row>
                <v-col>
                    <v-text-field
                        v-model="email"
                        label="Email Address"
                        outlined
                        dense
                        :rules="[rules.required]"
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                        v-model="orderNumber"
                        label="Order Number"
                        outlined
                        dense
                        :rules="[rules.required]"
                    ></v-text-field>

                    <!-- find order number -->
                    <v-btn
                        text
                        small
                        class="mt-n10 body-2 text-capitalize indigo--text"
                        @click="orderNumberInfo = !orderNumberInfo"
                    >
                        <v-icon v-if="orderNumberInfo">mdi-menu-up</v-icon>
                        <v-icon v-else>mdi-menu-down</v-icon>
                        Where's my order confirmation number?
                    </v-btn>
                    <p v-if="orderNumberInfo" class="my-0 body-2">
                        You can find your order confirmation number just above the
                        <b>Billing Information</b> in the order confirmation email
                        you recieved after placing your order.
                    </p>
                </v-col>
            </v-row>

            <!-- submit -->
            <v-btn 
                class="text-capitalize orange darken-4 px-10" 
                dark
                @click="submit()"
            >
                Continue
            </v-btn>

            <!-- sign in -->
            <p class="subtitle-1 font-weight-light mt-5">
                Are you a member?
                <n-link class="text-decoration-none" to="/customer/account/login"
                    >Sign In</n-link
                >
                to view your order status!
            </p>
        </form>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Customer Login',
        }
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
                    text: 'Track My Order',
                    disabled: false,
                    href: '/sales/guest/form',
                },
            ],
            orderNumberInfo: false,
            email: '',
            orderNumber: '',
            rules: {
                required: (v) => !!v || 'This field required.',
            },
        }
    },
    methods: {
        submit() {
            console.log(this.email, this.orderNumber);
        }
    }
}
</script>

<style scoped>
form {
    width: 50%;
}
</style>