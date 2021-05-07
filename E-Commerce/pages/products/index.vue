<template>
    <div>
        <h1>Products</h1>
        <ProductItem />
    </div>
</template>

<script>
import ProductItem from '../../components/ProductItem'

export default {
    components: {
        ProductItem
    },
    data() {
        return {
            products: []
        }
    },
}
</script>

<style>

</style>