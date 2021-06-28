<template>

    <v-row class="mx-16 justify-space-between">

        <!-- back button -->
        <v-col 
            cols="auto" 
            class="align-self-center d-none d-lg-flex d-xl-flex"
        >
            <n-link
                class="body-2 font-weight-bold text-decoration-none"
                :to="backLink"
            >
                <v-icon color="primary">mdi-chevron-left</v-icon>
                {{ backName }}
            </n-link>
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
                },
                {
                    name: 'My Orders',
                    link: '/sales/order/history',
                },
                {
                    name: 'My Details',
                    link: '/customer/account/edit',
                },
                {
                    name: 'Address Book',
                    link: '/customer/address',
                },
                {
                    name: 'Preferances',
                    link: '/newsletter/manage',
                },
            ],
            backName: 'Back',
            backLink: '/',
        }
    },
    mounted() {
        if(this.$nuxt.context.from != undefined) {
            this.backLink = this.$nuxt.context.from.fullPath
            this.pages.forEach((page, i) => {
                if(page.link === this.$nuxt.context.from.fullPath){
                    this.backName = this.pages[i].name;
                }
            })
        }
    }
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