<template>
    <div class="mx-16">

        <!-- links -->
        <v-breadcrumbs :items="links" class="mt-n10"></v-breadcrumbs>
        
        <v-layout no-gutters>
            <v-flex md3>
                <Filters />
            </v-flex>
            <v-flex md9>
                <ProductCards />
            </v-flex>
        </v-layout>

    </div>
</template>

<script>
import Filters from '~/components/SubCategory/Filters'
import ProductCards from '~/components/SubCategory/ProductCards'

export default {
    head() {
        return {
            title: 'Ideal Bedroom Sets to Choose for 2021 at 1StopBedrooms'
        }
    },
    components: { Filters, ProductCards },
    data() {
        return {
            links: [
                {
                    text: 'Home',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Bedroom Furniture',
                    disabled: false,
                    href: '/bedroom',
                },
                {
                    text: 'Bedroom Sets',
                    disabled: false,
                    href: '/bedroom/bedroom-sets',
                },
            ],
        }
    },
}
</script>