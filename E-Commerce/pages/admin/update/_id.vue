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
import { db } from '../../../firebase'

export default {
    layout: 'admin',
    components: {
        AddUpdateProduct,
    },
    data: () => ({
        product: [],
        type: 'Update Product',
    }),
    mounted() {
        db.collection('products')
            .doc(this.$route.params.id)
            .get()
            .then((doc) => {
                this.product = doc.data()
            })
            .catch((error) => {
                console.log('Error getting documents: ', error)
            })
    },
}
</script>

<style>
</style>