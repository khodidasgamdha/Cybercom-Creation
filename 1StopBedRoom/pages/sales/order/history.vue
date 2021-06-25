<template>
    <div>
        <!-- header -->
        <Header />

        <div class="mx-16">
            <h2 class="font-weight-regular mt-5 mb-1">My Orders</h2>
            <v-card class="grey lighten-4 py-10 mb-10" align="center" flat>
                <img 
                    src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/unbox_in_house.png?vd1e8a7d4" 
                    alt="orders"
                >
                <p class="font-weight-bold mt-3">You don't have any orders yet!</p>
                <p class="body-2">
                    After you place your first order, you can find all the details and track the <br /> 
                    delivery status here. Ready to start shopping?
                </p>
                <v-btn class="text-capitalize orange darken-4 px-10" dark>
                    Shop Now
                </v-btn>
            </v-card>
        </div>

    </div>
</template>

<script>
import Header from '~/components/Account/Header'

export default {
    middleware: 'auth',
    components: {
        Header,
    },
    head() {
        return {
            title: 'My Orders',
        }
    },
}
</script>

<style>

</style>