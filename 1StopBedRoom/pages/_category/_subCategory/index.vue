<template>
    <div class="mx-16">

        <!-- links -->
        <v-breadcrumbs :items="links" class="mt-n10"></v-breadcrumbs>
        
        <v-layout class="mt-3" no-gutters>
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
import ProductCards from '~/components/SubCategory/ProductCards.vue'
export default {
    components: { Filters, ProductCards },
    data() {
        return {
            product: this.$route.params.categoty,
            subCategory: this.$route.params.subCategory,
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