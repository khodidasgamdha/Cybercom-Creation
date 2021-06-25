<template>

    <v-row class="mx-16 justify-space-between">

        <!-- back button -->
        <v-col
            v-for="(page, i) in pages"
            :key="i" 
            cols="auto" 
            class="align-self-center d-none d-lg-flex d-xl-flex"
        >
            <div v-if="page.link === path">
                <n-link
                    class="body-2 font-weight-bold text-decoration-none"
                    :to="page.backLink"
                >
                    <v-icon color="primary">mdi-chevron-left</v-icon>
                    {{ page.backName }}
                </n-link>
            </div>
        </v-col>

        <!-- page links -->
        <v-col cols="auto">
            <v-row class="customerHeader my-0">
                <v-col
                    cols="auto"
                    class="px-0"
                    v-for="(page, i) in pages"
                    :key="i"
                >
                    <n-link
                        class="body-2 py-3 px-4 text-decoration-none"
                        :to="page.link"
                        >{{ page.name }}</n-link
                    >
                    <span class="border"></span>
                </v-col>
                <v-col cols="auto" class="px-0">
                    <n-link 
                        class="body-2 py-3 px-4 text-decoration-none" 
                        to="/customer/account/logout"
                    >Sign Out</n-link>
                </v-col>
            </v-row>
        </v-col>
        
    </v-row>

</template>

<script>
export default {
    data() {
        return {
            pages: [
                {
                    name: 'My Account',
                    link: '/customer/account/welcome',
                    backName: 'Back',
                    backLink: '/',
                },
                {
                    name: 'My Orders',
                    link: '/sales/order/history',
                    backName: 'My Account',
                    backLink: '/customer/account/welcome',
                },
                {
                    name: 'My Details',
                    link: '/customer/account/edit',
                    backName: 'My Orders',
                    backLink: '/sales/order/history',
                },
                {
                    name: 'Address Book',
                    link: '/customer/address',
                    backName: 'Back',
                    backLink: '/customer/account/edit',
                },
                {
                    name: 'Preferances',
                    link: '/newsletter/manage',
                    backName: 'Address Book',
                    backLink: '/customer/address',
                },
            ],
            path: null
        }
    },
    mounted() {
        this.path = location.pathname
    },
}
</script>

<style>
.customerHeader {
    border-bottom: 2px solid #999;
}
.customerHeader .border {
    border-right: 1px solid #888;
}
.customerHeader .nuxt-link-exact-active {
    color: black;
    border-bottom: 4px solid blue;
    padding-bottom: 14px;
    font-weight: 500;
}
</style>