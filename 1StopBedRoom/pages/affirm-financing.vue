<template>
    <div>

        <!-- banner -->
        <v-img 
            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/affirm-financing/bg_affirm2.png?v5cb42573"
            alt="affirm-financing"
            height="350"
            align="center"
            class="affirm-financing-img"
        >
            <p class="display-3 mb-0 mt-5 font-weight-regular secondary--text">BUY NOW, PAY LATER</p>
            <img 
                class="affirm-logo" 
                src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/affirm-financing/1sb_affirm_logo_black.png" 
                alt="affirm-logo"
            >
            <p class="my-2 secondary--text headline">
                Easy Monthly Payment Plans with Flexible Payment Options<br />
                Clear Terms, Fair Rates, No Prepayment Penalties
            </p>
            <p class="my-3 secondary--text font-weight-medium headline">Pay over 12, 24 or 36 Months*</p>
            <v-card 
                width="400" 
                color="rgb(0, 0, 0, 0)" 
                class="pa-3 rounded-0" 
                align="center" 
                flat
            >
                <v-btn class="text-capitalize blue lighten-1 rounded-0 px-16" x-large dark>
                    See If You Qualify
                </v-btn>
                <p class="body-2 mt-2 mb-0">Checking your eligibility won't affect your credit score.</p>
            </v-card>
        </v-img>

        <!-- card -->
        <v-card class="rounded-0 mb-2">
            <v-row class="justify-center">
                <v-col cols="auto">
                    <p class="mb-0 secondary--text font-weight-bold">No Late Fees</p>
                </v-col>
                <span class="dot"></span>
                <v-col cols="auto">
                    <p class="mb-0 secondary--text font-weight-bold">No Deferred Interest</p>
                </v-col>
                <span class="dot"></span>
                <v-col cols="auto">
                    <p class="mb-0 secondary--text font-weight-bold">No Hidden Fees</p>
                </v-col>
                <span class="dot"></span>
                <v-col cols="auto">
                    <p class="mb-0 secondary--text font-weight-bold">No Catch</p>
                </v-col>
            </v-row>
        </v-card>

        <h1 class="text-center my-16">How It Works</h1>

    </div>
</template>

<script>
export default {
    head: {
        title: 'Affirm Financing',
    },
}
</script>

<style scoped>
.affirm-financing-img .v-card {
    border: 1px solid #555 !important;
}
.affirm-financing-img .dot {
    width: 7px;
    height: 7px;
    background: #0fa0ea;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    margin: auto 10px;
    position: relative;
}
.affirm-financing-img .affirm-logo {
    position: absolute;
    top: 30px;
    right: 40px;
}
</style>