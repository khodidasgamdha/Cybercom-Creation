<template>
    <div class="ml-5">

        <!-- sort -->
        <v-row>
            <v-spacer></v-spacer>
            <v-col>
                <p class="text-right pt-2 grey--text">Sort by:</p>
            </v-col>
            <v-col cols="2">
                <v-select
                    v-model="selectedSortedType"
                    :items="sorts"
                    label="Top Sellers"
                    dense
                    outlined
                    flat
                    @change="sortProducts(selectedSortedType)"
                ></v-select>
            </v-col>
        </v-row>

        <v-row class="mb-5">
            <v-col v-for="(product, i) in simillarProducts" :key="i">
                <v-hover v-slot="{ hover }">
                    <v-card max-width="321" height="435" :elevation="hover ? 10 : 2">
                        
                        <!-- image -->
                        <n-link :to="`/bedroom/bedroom-sets/${product.sku}`">
                            <v-img 
                                :src="product.imageUrl"
                                :alt="product.description"
                                height="209"
                            ></v-img>
                        </n-link>

                        <!-- button -->
                        <v-row class="ma-2">

                            <!-- more options -->
                            <v-btn
                                tile
                                text
                                class="
                                    grey lighten-2
                                    subtitle-2
                                    grey--text
                                    px-8
                                    text-capitalize
                                "
                            >
                                More Options
                            </v-btn>
                            <v-spacer></v-spacer>

                            <!-- similar products -->
                            <v-btn id="similar" text></v-btn>
                        </v-row>
                        
                        <!-- title -->
                        <v-card flat height="60">
                            <n-link :to="`/bedroom/bedroom-sets/${product.sku}`" class="text-decoration-none black--text">
                                <p :class="hover ? 'primary--text' : 'black-text'" class="mx-2 subtitle-1 mb-1">
                                    {{ product.description }}
                                </p>
                            </n-link>
                        </v-card>

                        <!-- brand -->
                        <p
                            v-if="!hover"
                            class="mx-3 subtitle-2 font-weight-light mb-1"
                        >
                            By {{ product.brand }}
                        </p>

                        <!-- web id -->
                        <p
                            v-else
                            class="mx-3 subtitle-2 font-weight-light grey--text mb-1"
                        >
                            Web Id: 
                            <span class="text-uppercase font-weight-bold">
                                {{ product.sku}}
                            </span>
                        </p>

                        <!-- special price -->
                        <p
                            v-if="!product.specialPrice"
                            class="red--text mx-3 title my-1"
                        >
                            {{ product.price }}
                            <span
                                class="
                                    grey--text
                                    subtitle-2
                                    ml-2
                                    text-decoration-line-through
                                "
                            >
                                {{ product.originalPrice }}
                            </span>
                        </p>

                        <!-- regular price -->
                        <div v-else class="ml-5">
                            <div class="special-price row my-2">
                                <span class=" black--text ml-2 mr-n3">
                                    {{ product.specialPrice }}
                                </span>
                                <div id="specialPriceLabel" class="mx-n3"></div>
                            </div>
                        </div>

                        <!-- review -->
                        <v-card height="30" flat>
                            <v-row v-if="product.reviewsCount" no-gutters class="mx-2 my-n1">
                                <v-col cols="4">
                                    <v-rating
                                        v-model="product.reviewsAverage"
                                        readonly
                                        background-color="grey"
                                        half-increments
                                        size="18"
                                        dense
                                    ></v-rating>
                                </v-col>
                                <v-col>
                                    <span class="ml-2 body-2 black--text"
                                        >({{ product.reviewsCount }})</span
                                    >
                                </v-col>
                            </v-row>
                        </v-card>

                        <!-- free delivery -->
                        <p class="mx-3 caption secondary--text">{{ product.original_data.Promotion }}</p>

                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import gql from 'graphql-tag'

const GET_SIMILLAR_PRODUCTS = gql `
    query GET_SIMILLAR_PRODUCTS($webId: String!) {
        simillarProducts(webId: $webId) {
            sku
            reviewsCount
            reviewsAverage
            price
            originalPrice
            imageUrl
            description
            brand
            original_data {
                Promotion
            }
        }
    },
`

export default {
    apollo: {
        simillarProducts: {
            query: GET_SIMILLAR_PRODUCTS,
            prefetch: true,
            variables() {
                return {
                    webId: "qb13271770"
                }
            }
        },
    },
    data() {
        return {
            selectedSortedType: null,
            sorts: ['Top Sellers', 'Price:Low-High', 'Price:High-Low']
        }
    },
    methods: {
        sortProducts(type) {
            if (type === 'Price:Low-High') {
                this.simillarProducts.sort((a, b) => a.price < b.price ? -1 : 1)
            }
            if (type === 'Price:High-Low') {
                this.simillarProducts.sort((a, b) => a.price > b.price ? -1 : 1)
            }
        },
    },
}
</script>

<style scoped>
.special-price {
    border: 1px solid red;
    width: 153px;
}
#specialPriceLabel {
    background: url("https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/sprite_v2.png?va8ef6d04") -515px -524px no-repeat;
    width: 100px;
    height: 31px;
}
#similar {
    background: url("https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/syte-discovery/shop_similar_icon_v1.svg?v67ba9b3a") no-repeat;
    background-size: 89px 32px;
    width: 90px;
    height: 32px;
}
</style>