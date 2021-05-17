<template>
    <div class="container mt-10">
        <div class="row">
            <Dashboard
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </div>
    </div>
</template>

<script>
import Dashboard from '../../components/admin/Dashboard'
import { mapGetters } from 'vuex'

export default {
    layout: 'admin',
    components: {
        Dashboard
    },
    computed: mapGetters('products', ['products']),
    mounted() {
        this.$store.dispatch('products/getProducts', {
            category: 'fashion', 
            subCategory: 'clothing'
        })
    },
}
</script>

<style>
</style>