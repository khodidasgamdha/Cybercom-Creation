  
<template>
    <div>
        <Carousal />
        <ImageSlider />
        <Features />
        <ProductSlider />
        <ProductSet />
        <div v-for="(products, i) in saleProduct" :key="i">
            <ProductSale :products="products" />
            <v-divider v-if="saleProduct.length != i+1"></v-divider>
        </div>
    </div>
</template>

<script>
import Carousal from '~/components/Home/Carousal'
import ImageSlider from '~/components/Home/ImageSlider'
import Features from '~/components/Home/Features'
import ProductSale from '~/components/Home/ProductSale'
import ProductSet from '~/components/Home/ProductSet'
import ProductSlider from '~/components/Home/ProductSlider'
import gql from 'graphql-tag'

const GET_SALE_PRODUCTS = gql `
    query GET_SALE_PRODUCTS {
        saleProduct {
            title
            key
	        products {
                src
                title
                subtitle
                price
                originalPrice
            }
        }
    }
`

export default {
    head() {
        return {
            title: '1StopBedrooms | Buy Bedroom Furniture Sets | Free Delivery'
        }
    },
    components: { 
        Carousal, 
        ImageSlider, 
        Features, 
        ProductSlider, 
        ProductSet, 
        ProductSale, 
    },
    apollo: {
        saleProduct: {
            query: GET_SALE_PRODUCTS,
            prefetch: true,
        },
    },
}
</script>

<style>
* {
    font-family: 'Open Sans',sans-serif;
}
</style>