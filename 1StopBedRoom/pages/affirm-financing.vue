<template>
    <div class="mb-10">
        <!-- banner -->
        <v-img
            src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/affirm-financing/bg_affirm2.png?v5cb42573"
            alt="affirm-financing"
            height="350"
            align="center"
            class="affirm-financing-img"
        >
            <p class="display-3 mb-0 mt-5 font-weight-regular secondary--text">
                BUY NOW, PAY LATER
            </p>
            <img
                class="affirm-logo"
                src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/affirm-financing/1sb_affirm_logo_black.png"
                alt="affirm-logo"
            />
            <p class="my-2 secondary--text headline">
                Easy Monthly Payment Plans with Flexible Payment Options<br />
                Clear Terms, Fair Rates, No Prepayment Penalties
            </p>
            <p class="my-3 secondary--text font-weight-medium headline">
                Pay over 12, 24 or 36 Months*
            </p>
            <v-card
                width="450"
                color="rgb(0, 0, 0, 0)"
                class="pa-3 rounded-0"
                align="center"
                flat
            >
                <v-btn
                    class="text-capitalize title blue lighten-1 rounded-0"
                    x-large
                    dark
                    block
                >
                    See If You Qualify
                </v-btn>
                <p class="body-2 mt-2 mb-0">
                    Checking your eligibility won't affect your credit score.
                </p>
            </v-card>
        </v-img>

        <!-- cards -->
        <v-card class="rounded-0 mb-2">
            <v-row class="justify-center">
                <v-col cols="auto">
                    <p class="mb-0 secondary--text font-weight-bold">
                        No Late Fees
                    </p>
                </v-col>
                <span class="dot"></span>
                <v-col cols="auto">
                    <p class="mb-0 secondary--text font-weight-bold">
                        No Deferred Interest
                    </p>
                </v-col>
                <span class="dot"></span>
                <v-col cols="auto">
                    <p class="mb-0 secondary--text font-weight-bold">
                        No Hidden Fees
                    </p>
                </v-col>
                <span class="dot"></span>
                <v-col cols="auto">
                    <p class="mb-0 secondary--text font-weight-bold">
                        No Catch
                    </p>
                </v-col>
            </v-row>
        </v-card>

        <!-- how it works -->
        <v-container>
            <h1 class="text-center mb-16 mt-10">How It Works</h1>
            <v-row class="justify-center">
                <v-col cols="auto" v-for="(card, i) in cards" :key="i">
                    <v-card
                        width="370"
                        height="280"
                        align="center"
                        class="grey lighten-4 rounded-0 pa-7"
                        flat
                        elevation="2"
                    >
                        <img
                            :src="card.logo"
                            :alt="card.title"
                            class="mt-n16 mb-8"
                        />
                        <h2 class="font-weight-regular indigo--text">
                            {{ card.title }}
                        </h2>
                        <p class="body-2 font-weight-light my-7">
                            {{ card.info }}
                        </p>
                    </v-card>
                </v-col>
            </v-row>
            <p class="mt-10 mb-16 py-3 body-2 text-center black--text apr">
                For a $3,000 purchase you could pay $97/mo for 36 months at 10%
                APR. A down payment may be required.
            </p>
        </v-container>

        <!-- frequntly asked question -->
        <div class="grey lighten-4 py-10" align="center">
            <h3>Frequently Asked Questions</h3>
            <v-icon color="primary" large>mdi-color-helper</v-icon>
            <div 
                v-for="(question, i) in questions" 
                :key="i"
                class="mt-10"
            >
                <h4 class="question-title">{{ question.title }}</h4>
                <v-container>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, i) in question.expantionData" :key="i">
                        
                        <v-divider v-if="i === 0"></v-divider>
                        
                        <!-- title -->
                        <v-expansion-panel-header 
                            expand-icon="mdi-plus" 
                            color="grey lighten-4"
                            class="subtitle-1 font-weight-bold"
                        >{{ item.title }}</v-expansion-panel-header>
                        
                        <!-- info -->
                        <v-expansion-panel-content class="body-2" color="grey lighten-4">
                            {{ item.info }}
                        </v-expansion-panel-content>

                        <v-divider v-if="question.expantionData.length === i+1"></v-divider>

                    </v-expansion-panel>
                </v-expansion-panels>
                </v-container>
            </div>
        </div>

        <!-- questions -->
        <v-row class="justify-center my-10">
            <v-col cols="auto">
                <img
                    src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/affirm-financing/website.jpg"
                    alt="affirm-financing"
                    width="450"
                />
            </v-col>
            <v-col cols="auto" class="align-self-center">
                <p class="headline secondary--text">Questions</p>
                <p class="mb-0 secondary--text">
                    Still have Questions about Affirm?
                </p>
                <p class="mb-0 secondary--text">
                    Check out Affirm website or Affirm FAQs above.
                </p>
                <p class="mb-0 secondary--text">
                    You can submit your Questions at Affirm help or
                </p>
                <p class="mb-0 secondary--text">call 855-423-3729.</p>
            </v-col>
        </v-row>

        <!-- quota -->
        <v-container>
            <div class="grey lighten-4 secondary-text body-2 pa-7">
                <p class="mb-2">
                    Subject to credit check and approval. Down payment may be
                    required. For purchases under $250, limited payment options
                    are available.
                </p>
                <p class="mb-0">
                    Affirm loans are made by Cross River Bank, Member FDIC.
                </p>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    head: {
        title: 'Affirm Financing',
    },
    data() {
        return {
            cards: [
                {
                    logo: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/affirm-financing/af-shop_v1.png',
                    title: '1. Choose Your Product',
                    info: "Once you've selected the products you would like to order, simply add them to your shopping cart.",
                },
                {
                    logo: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/affirm-financing/af-buy_v1.png',
                    title: '2. Select Affirm',
                    info: 'Proceed through checkout as usual and select  as your payment method.',
                },
                {
                    logo: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/affirm-financing/af-pay-over-time_v1.png',
                    title: '3. Choose your Monthly Payment Plan',
                    info: 'Pay over 12, 24, or 36 months Select a monthly payment plan that works best for you.',
                },
            ],
            questions: [
                {
                    title: 'APPLICATION AND SIGN UP',
                    expantionData: [
                        {
                            title: 'How do I sign up for Affirm?',
                            info: 'There are two ways to sign up for Affirm: Create an Affirm account at www.affirm.com/account in just a few easy steps; or Select Affirm as your payment method while checking out with any Affirm online merchant partner.',
                        },
                        {
                            title: 'What is required to have an Affirm account?',
                            info: 'To sign up for Affirm, you must: Be 18 years or older (19 years or older in Alabama or if you’re a ward of the state in Nebraska).Provide a valid U.S. or APO/FPO/DPO home address. Buy with Affirm is not currently available to Iowa or West Virginia residents. Provide a valid U.S. mobile or VoIP number and agree to receive SMS texts.Provide your full name, email address, date of birth, and the last 4 digits of your social security number to help us verify your identity.',
                        },
                        {
                            title: 'Does Affirm perform a credit check?',
                            info: 'Yes, when you first create an Affirm account, we perform a ‘soft’ credit check to help verify your identity and determine your eligibility for financing. This ‘soft’ credit check will not affect your credit score. If you apply for more loans with Affirm, we may perform additional ‘soft’ credit checks to ensure that we offer you the best financing options possible. Does Affirm report to credit bureaus? Yes, when you first create an Affirm account, we perform a ‘soft’ credit check to help verify your identity and determine your eligibility for financing. This ‘soft’ credit check will not affect your credit score. If you apply for more loans with Affirm, we may perform additional ‘soft’ credit checks to ensure that we offer you the best financing options possible.',
                        },
                    ],
                },
                {
                    title: 'HOW TO USE AFFIRM',
                    expantionData: [
                        {
                            title: 'How do I use / Buy With Affirm?',
                            info: "Affirm offers clear, simple financing for your online purchases in just a few clicks: Fill your cart and select the Affirm payment option on the merchant's checkout page. Enter a few basic pieces of information to identify yourself. We'll let you know if you are approved for a loan in real time. Review your payment plan details and click confirm to finalize the loan. Once you’re done, your purchase will be on its way. That's it! Just remember to pay your bills on or before their due dates or sign up for autopayment at www.affirm.com/pay.",
                        },
                        {
                            title: 'Why was I prompted for a down payment?',
                            info: 'To sign up for Affirm, you must: Be 18 years or older (19 years or older in Alabama or if you’re a ward of the state in Nebraska).Provide a valid U.S. or APO/FPO/DPO home address. Buy with Affirm is not currently available to Iowa or West Virginia residents. Provide a valid U.S. mobile or VoIP number and agree to receive SMS texts.Provide your full name, email address, date of birth, and the last 4 digits of your social security number to help us verify your identity.',
                        },
                    ],
                },
                {
                    title: 'MAKING PAYMENTS',
                    expantionData: [
                        {
                            title: 'Are there any penalties for paying off my loan early?',
                            info: 'No, there are no prepayment penalties or fees for paying off your loan early. Also, if you pay off your entire loan before the final due date, you will pay interest only for the period that you borrowed the money. Affirm rebates any unearned portion of the finance charge for the remaining loan period. To see the total pay-off amount, go to your Affirm account and click on ‘Make Payment’.',
                        },
                        {
                            title: 'What are my payment options?',
                            info: 'When you make a purchase of $250 or more with Affirm, you can pay over 12, 24 or 36 months.',
                        },
                        {
                            title: 'Are there any interest or fees associated with Affirm loans?',
                            info: 'Affirm loans vary between 10% and 30% APR simple interest (0% APR is offered at select merchants). The corresponding finance charge is the only fee associated with an Affirm loan - we don’t charge late fees, service fees, prepayment fees, or any other hidden fees. We strive always to be more transparent and fair than any other form of financing.',
                        },
                        {
                            title: 'Do I have a credit limit with Affirm?',
                            info: 'Unlike a credit card, Affirm is not a revolving line of credit. While customers can take out multiple Affirm loans at once, each Affirm loan application is evaluated separately as a closed-end transaction. An application from a returning customer may be denied, however, if that customer has failed to repay other Affirm loans on time or if the customer shows excessive borrowing behavior.',
                        },
                        {
                            title: 'When are my bills due?',
                            info: 'Your first monthly payment will be due one calendar month from the date your loan is processed. We will send you an email and SMS text message to confirm all of your billing due dates.Each monthly payment will be due on the same day of the month throughout the loan period. For example, if you obtain a loan with three monthly payments on January 1st, your first, second, and third payments will be due February 1st, March 1st, and April 1st respectively. Will you send me billing reminders? Affirm will send you email and SMS text messages to remind you of upcoming payments.Where can I review my Affirm account and purchases?You can review current and past loans, make payments, and enable automatic payments at www.affirm.com/account. What can I do with the Affirm mobile app? The Affirm app lets you manage your account and payments on the go. The app also lets you buy now and pay over time for new purchases—almost anywhere online and in select stores. Just request an Affirm virtual card and use it to make your purchase.',
                        },
                    ],
                },
            ],
        }
    },
}
</script>

<style scoped>
.affirm-financing-img .v-card {
    border: 1px solid #555 !important;
}
.dot {
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
.apr {
    border: 1px solid black;
    font-weight: 500;
}
.v-expansion-panel::before {
  box-shadow: none;
}
.question-title {
    color: #6F8CA8;
    font-size: 15px;
    font-weight: 500;
}
</style>