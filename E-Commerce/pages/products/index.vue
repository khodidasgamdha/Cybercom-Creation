<template>
    <div class="container mt-10">
        <div class="row">
            <ProductItem
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </div>
    </div>
</template>

<script>
import ProductItem from '../../components/ProductItem'

export default {
    components: {
        ProductItem,
    },
    data() {
        return {
            products: [],
        }
    },
    async mounted() {
        try {
            const res = await this.$axios
                .get(
                    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
                )
            this.products = res.data;
        } catch (error) {
            console.log(error);
        }
    },
    
}
</script>

<style>
</style>