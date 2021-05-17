<template>
    <v-card class="col-md-3 mx-auto mb-10" max-width="280" elevation="5">

        <!-- image -->
        <n-link :to="`/products/${product.category}/${product.subCategory}/${product.id}`">
            <v-img height="250" :src="product.img"></v-img>
        </n-link>

        <!-- title & price -->
        <div class="mt-1">
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle class="subtitle-1"
                >&#x20B9; {{ product.price }}</v-card-subtitle
            >
        </div>

        <!-- review and actions -->
        <div class="row mb-1">
            <div>
                <v-card-text>
                    <v-row align="center" class="mx-0">
                        <v-rating
                            :value="product.rating"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="12"
                        ></v-rating>
                        <div class="grey--text ml-2">
                            {{ product.rating }}
                            <span>({{ 449 }})</span>
                        </div>
                    </v-row>
                </v-card-text>
            </div>

            <!-- cart & favorite -->
            <div class="ml-auto">
                <v-card-actions class="mr-3">
                    <v-icon class="mr-3" dense @click="updateProd(product)"
                        >mdi-pencil</v-icon
                    >
                    <v-icon dense @click="deleteProd(product)"
                        >mdi-delete</v-icon
                    >
                </v-card-actions>
            </div>

        </div>
    </v-card>
</template>

<script>
import { db } from '../../firebase'

export default {
    props: {
        product: {
            required: true,
        },
    },
    methods: {
        updateProd(product) {
            this.$router.push(`/admin/update/${product.id}`)
        },
        deleteProd(product) {
            db.collection(`products/${product.category}/${product.subCategory}`)
                .doc(product.id)
                .delete()
                .then(() => {
                    console.log("Product Successfully Deleted !!");
                })
                .catch((error) => {
                    console.error('Error removing document: ', error)
                })
        },
    },
}
</script>

<style>
</style>