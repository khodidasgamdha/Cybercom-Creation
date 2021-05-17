<template>
    <div>
        <div>
            <h1 class="text-center mt-10 display-2">{{ type }}</h1>
        </div>
        <div>
            <AddUpdateProduct :product="product" :type="type" />
        </div>
    </div>
</template>

<script>
import AddUpdateProduct from '../../../components/admin/AddUpdateProduct'

export default {
    layout: 'admin',
    components: {
        AddUpdateProduct,
    },
    data: () => ({
        product: {
            name: '',
            img: '',
            brandName: '',
            category: '',
            subCategory: '',
            price: '',
            rating: '',
            description: '',
        },
        type: 'Add Product'
    }),
}
</script>

<style>
</style>