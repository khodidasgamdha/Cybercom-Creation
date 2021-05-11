<template>
    <div>
        <CartItem v-for="product in cartItems" :key="product.id" :product="product" />
    </div>
</template>

<script>
import CartItem from '../../components/CartItem'
import { mapGetters } from 'vuex'

export default {
    components : {
        CartItem
    },
    computed: mapGetters('cart', ['cartItems'])
}
</script>

<style>

</style>