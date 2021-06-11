<template>
    <div class="mx-16">

        <!-- links -->
        <v-breadcrumbs :items="links" class="mt-n10"></v-breadcrumbs>

        <v-row>
            <!-- info -->
            <v-col md="8" sm="12">
                <!-- title -->
                <p class="mb-0">
                    <span class="title"
                        >Lettner Light Gray Youth Storage Sleigh Bedroom
                        Set</span
                    >
                    <span>by</span>
                    <n-link class="text-decoration-none font-italic" to="/"
                        >Ashley</n-link
                    >
                </p>

                <!-- review -->
                <v-row class="justify-space-between">
                    <v-col md="auto">
                        <span class="body-2 primary--text">Write a Review</span>
                        <v-divider
                            vertical
                            class="mx-1"
                            color="secondary"
                        ></v-divider>
                        <span class="body-2">Web ID : QB13271770</span>
                    </v-col>
                    
                    <v-col md="auto">
                        <span class="body-2 primary--text">Description</span>
                        <v-divider
                            vertical
                            class="mx-1"
                            color="secondary"
                        ></v-divider>
                        <span class="body-2 primary--text">Specification</span>
                    </v-col>
                </v-row>
                <v-divider class="mt-2"></v-divider>

                <!-- info -->
                <v-row>
                    <v-col md="6" class="px-10">

                        <!-- image -->
                        <v-img
                            :src="productImage"
                            alt="image"
                        >
                            <v-btn class="image" text></v-btn>
                        </v-img>

                        <!-- image slider -->
                        <v-slide-group show-arrows>
                            <v-slide-item v-for="(card, i) in cards" :key="i">
                                <v-card class="mx-1" tile flat width="50">
                                    <v-img
                                        :src="card.imgUrl"
                                        :alt="card.alt"
                                        height="80"
                                        @click="productImage = card.imgUrl"
                                    ></v-img>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>

                    </v-col>

                    <!-- details -->
                    <v-col md="6" class="mt-10">
                        
                        <!-- brand -->
                        <v-row>
                            <v-col md="3">
                                <span class="body-2 grey--text">Brand:</span>
                            </v-col>
                            <v-col>
                                <span class="primary--text">Ashley</span>
                            </v-col>
                        </v-row>

                        <!-- collection -->
                        <v-row class="mt-0">
                            <v-col md="3">
                                <span class="body-2 grey--text">Collection:</span>
                            </v-col>
                            <v-col>
                                <span class="primary--text">Lettner</span>
                            </v-col>
                        </v-row>

                        <!-- bed size -->
                        <v-row class="mt-0">
                            <v-col md="3">
                                <span class="body-2 grey--text">Bed Size:</span>
                            </v-col>
                            <v-col>
                                <v-btn-toggle
                                    dense
                                    v-for="(item, i) in bedSize"
                                    :key="i"
                                >
                                    <v-btn class="body-2 text-capitalize mx-1" :value="item.value">
                                        {{ item.title }}
                                    </v-btn>
                                </v-btn-toggle>
                            </v-col>
                        </v-row>

                        <!-- set selection -->
                        <v-row class="mt-0">
                            <v-col md="3">
                                <span class="body-2 grey--text">Set Selection:</span>
                            </v-col>
                            <v-col>
                                <v-btn-toggle
                                    dense
                                    v-for="(item, i) in setSize"
                                    :key="i"
                                >
                                    <v-btn class="body-2 text-capitalize mx-1" :value="item.value">
                                        {{ item.title }}
                                    </v-btn>
                                </v-btn-toggle>
                            </v-col>
                        </v-row>

                        <!-- set -->
                        <v-row class="mt-0">
                            <v-col md="3">
                                <span class="body-2 grey--text">Collection:</span>
                            </v-col>
                            <v-col class="caption">
                                <v-row>
                                    <v-col md="4">1x  Sleigh Bed</v-col>
                                    <v-col md="6">Sku: B733-183-52S-53</v-col>
                                </v-row>
                                <v-row class="mt-n5">
                                    <v-col md="4">1x  Nightstand</v-col>
                                    <v-col md="6">Sku: B733-91</v-col>
                                </v-row>
                                <v-row class="mt-n5">
                                    <v-col md="auto">
                                        <img 
                                            src="https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/73x/cc0ec2d91bc4dd8becc1b9167d5c2be1/l/e/lettner-light-gray-youth-storage-sleigh-bedroom-set_qb13271770_4.jpg" 
                                            alt=""
                                        >
                                    </v-col>
                                    <v-col md="auto">
                                        <img 
                                            src="https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/73x/cc0ec2d91bc4dd8becc1b9167d5c2be1/l/e/lettner-light-gray-youth-storage-sleigh-bedroom-set_qb13271770_4.jpg" 
                                            alt=""
                                        >
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>

                        <!-- customize the set below -->
                        <n-link to="/" class="text-decoration-none black--text">
                            <span>Customize the set below</span>
                            <v-btn
                                class="mx-2"
                                fab
                                dark
                                x-small
                                color="primary"
                            >
                                <v-icon dark>mdi-arrow-down</v-icon>
                            </v-btn>
                        </n-link>

                    </v-col>
                </v-row>

            </v-col>

            <!-- price -->
            <v-col md="4" sm="12">
                <v-card align="center" width="390">
                    <p class="body-2 py-1 grey lighten-3">Today's Price</p>

                    <!-- ragular price -->
                    <v-row justify="center" class="body-2">
                        <v-col md="4">
                            Regular Price :
                        </v-col>
                        <v-col md="3">
                            $619.00
                        </v-col>
                    </v-row>

                    <!-- saving -->
                    <v-row justify="center" class="body-2 mt-n5">
                        <v-col md="4">
                            Your Saving :
                        </v-col>
                        <v-col md="3">
                            <span class="light-green accent-1 font-weight-bold rounded-xl py-1 px-2">-$33.90</span>
                        </v-col>
                    </v-row>

                    <v-divider class="my-1 mx-16"></v-divider>

                    <!-- regular price -->
                    <div class="ml-5">
                        <div class="special-price row my-2">
                            <span class="title black--text ml-2 mr-n3">
                                $619.00
                            </span>
                            <div id="specialPriceLabel" class="mx-n3"></div>
                        </div>
                    </div>

                    <!-- price match -->
                    <n-link to="/" class="black--text text-decoration-none caption">
                        <span class="font-weight-bold">PRICE MATCH</span>
                        <span class="">GUARANTEE</span>
                        <v-icon color="grey" small>mdi-information-outline</v-icon>
                    </n-link>

                    <!-- EMI -->
                    <div class="body-2 my-2">
                        <span>Starting at $21/mo with affirm</span>
                        <n-link to="/" class="text-decoration-none">prequalify now</n-link>
                    </div>

                    <!-- free shipping -->
                    <v-card flat class="grey lighten-3 rounded-0 mt-5">
                        <v-row>
                            <v-col md="3">
                                <img src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/hand_truck_v1.png?v58584aa6" alt="">
                            </v-col>
                            <v-col md="6">
                                <p class="mb-0"><span class="font-weight-bold">Free</span> Shipping</p>
                                <p class="body-2 mb-0">Shipped by Jun 12 - 17</p>
                            </v-col>
                        </v-row>
                    </v-card> 
                    
                    <!-- add to cart -->
                    <v-row class="mt-5" justify="center">
                        <v-col md="auto" class="pb-0 mt-2">
                            <span class="body-2">Quantity:</span>
                        </v-col>
                        <v-col md="2" class="pb-0">
                            <v-text-field
                                label="1"
                                dense
                                outlined
                            ></v-text-field>
                        </v-col>
                        <v-col md="auto" class="pb-0">
                            <v-btn dark class="orange darken-4 body-2 text-capitalize rounded-0 px-12">
                                    Add to Cart
                            </v-btn>
                        </v-col>
                    </v-row>

                </v-card>

                <!-- call us -->
                <v-card flat align="center" class="grey lighten-3 mt-10 py-3 rounded-0" width="390">
                    <p class="font-weight-bold mb-0">Have questions about this product?</p>
                    <p class="body-2 mb-1">Our experts are here to help!</p>
                    <v-btn 
                        v-if="!callUs" 
                        dark 
                        outlined 
                        color="primary" 
                        class="body-2 text-capitalize rounded-0" 
                        width="200"
                        @click="callUs = true"
                    >
                        Call Us
                    </v-btn>
                    <v-btn v-else dark outlined color="primary" class="body-2 text-capitalize rounded-0" width="200">
                        <a href="tel: 877-958-9203" class="black--text font-weight-bold text-decoration-none">Call Us: 877-958-9203</a>
                    </v-btn>
                    <p v-if="callUs" class="body-2 mt-1 mb-0 red--text">Web Id: QB13271770</p>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col md="8" sm="12">

                <v-row class="mx-5" v-for="i in 5" :key="i">

                    <!-- image -->
                    <img 
                        src="https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/image/440x/cc0ec2d91bc4dd8becc1b9167d5c2be1/l/e/lettner-light-gray-youth-storage-sleigh-bedroom-set_qb13271770_4.jpg" 
                        alt=""
                        width="150">

                    <!-- info -->
                    <v-col md="auto">

                        <!-- title -->
                        <p class="subtitle-1 font-weight-bold mb-0">Lettner Light Gray Twin Storage Sleigh Bed</p>
                        
                        <!-- sku & web ID -->
                        <div class="caption mb-0 font-weight-light">
                            <span>Sku: B733-183-52S-53</span>
                            <v-divider vertical color="black"></v-divider>
                            <span>Web ID: QB13201702</span>
                        </div>

                        <!-- price -->
                        <p class="mb-0">
                            <span class="title">$585.10</span>
                            <span v-if="i&1 == 1" class="body-2 grey--text text-decoration-line-through">$699.00</span>
                            <span v-if="i&1 == 1" class="caption font-weight-bold ml-3 light-green accent-1 rounded-xl py-1 px-2">Save -$115.00</span>
                        </p>

                        <!-- discount -->
                        <p v-if="i&1 == 1" class="caption font-italic mb-1">*Set discount applied</p>
                        
                        <!-- sizes -->
                        <div v-if="i&1 == 1">
                            <p class="font-weight-bold caption mb-1">Bed Size:</p>
                            <v-btn-toggle
                                dense
                                v-for="(item, i) in bedSize"
                                :key="i"
                            >
                                <v-btn class="body-2 text-capitalize mx-1" :value="item.value">
                                    {{ item.title }}
                                </v-btn>
                            </v-btn-toggle>
                        </div>

                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col v-if="!added" md="auto">
                        <v-btn outlined color="primary" class="body-2 text-capitalize" @click="added = true">
                            Add
                        </v-btn>
                    </v-col>
                    <v-col v-else md="2">
                        <v-icon small color="primary">mdi-check-all</v-icon>
                        <span class="caption primary--text">Added</span>
                        <v-select
                            v-model="quantity"
                            :items="quantities"
                            outlined
                            dense
                            class="mb-n5"
                        ></v-select>
                        <v-icon small color="primary">mdi-delete</v-icon>
                        <v-btn text @click="added = false" small class="ml-n3 primary--text text-lowercase text-decoration-underline">remove</v-btn>
                    </v-col>
                </v-row>

                <!-- expansion panel -->
                <v-expansion-panels flat>
                    <v-expansion-panel
                      v-for="(item,i) in info"
                      :key="i"
                    >
                        <v-expansion-panel-header class="title">
                            {{ item }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>

            <!-- total bill -->
            <v-col md="4">
                
                <!-- title -->
                <p class="headline font-weight-light">Set Includes</p>
                
                <v-card class="rounded-0" flat width="390">
                    <p class="pl-2 body-2 py-2 grey lighten-3">
                        <v-icon small>mdi-chevron-right</v-icon>
                        <span>1x </span>
                        <span>Light Gray Twin Storage Sleigh Bed</span>
                    </p>

                    <!-- ragular price -->
                    <v-row class="body-2 mt-n2 justify-space-between">
                        <v-col md="auto">
                            Total :
                        </v-col>
                        <v-col md="auto">
                            $619.00
                        </v-col>
                    </v-row>

                    <!-- saving -->
                    <v-row class="body-2 mt-n5 justify-space-between">
                        <v-col md="auto">
                            Saving :
                        </v-col>
                        <v-col md="auto" class="red--text">
                            -$33.90
                        </v-col>
                    </v-row>

                    <!-- saving -->
                    <v-row class="body-2 mt-n5 mb-2 justify-space-between">
                        <v-col md="auto">
                            Final Price :
                        </v-col>
                        <v-col md="auto">
                            $585.10
                        </v-col>
                    </v-row>

                    <v-divider></v-divider>
                    
                    <!-- add to cart -->
                    <v-row class="mt-2" justify="center">
                        <v-col md="auto" class="pb-0 mt-2">
                            <span class="body-2">Quantity:</span>
                        </v-col>
                        <v-col md="2" class="pb-0">
                            <v-text-field
                                label="1"
                                dense
                                outlined
                            ></v-text-field>
                        </v-col>
                        <v-col md="auto" class="pb-0">
                            <v-btn dark class="orange darken-4 body-2 text-capitalize rounded-0 px-12">
                                Add to Cart
                            </v-btn>
                        </v-col>
                    </v-row>

                    <v-divider></v-divider>
                </v-card>
            </v-col>
        </v-row>

        <ProductSuggestion
            title="You May Also Like"
            :products="PersonalizationProducts"
        />
        <ProductSuggestion
            title="Similar Items"
            :products="SimillarProducts"
        />
        <ProductSuggestion
            title="Complete The Look"
            :products="CTLProduct"
        />
    </div>
</template>

<script>
import ProductSuggestion from '~/components/ProductDetails/ProductSuggestion'
import gql from 'graphql-tag'

const GET_PERSONALIZATION_PRODUCTS = gql `
    query GET_PERSONALIZATION_PRODUCTS {
        PersonalizationProducts {
            sku
            similarityScore
            reviewsCount
            reviewsAverage
            price
            originalPrice
            imageUrl
            description
        }
    }
`
const GET_SIMILLAR_PRODUCTS = gql `
    query GET_SIMILLAR_PRODUCTS {
        SimillarProducts {
            sku
            reviewsCount
            reviewsAverage
            price
            originalPrice
            imageUrl
            description
        }
    },
`
const GET_CTL_PRODUCTS = gql `
    query GET_CTL_PRODUCTS {
        CTLProducts {
            ads {
                sku
                similarityScore
                reviewsCount
                reviewsAverage
                price
                originalPrice
                imageUrl
                description
            }
        }
    }
`

export default {
    components: {
        ProductSuggestion,
    },
    apollo: {
        PersonalizationProducts: {
            query: GET_PERSONALIZATION_PRODUCTS,
            prefetch: true,
        },
        SimillarProducts: {
            query: GET_SIMILLAR_PRODUCTS,
            prefetch: true,
        },
        CTLProducts: {
            query: GET_CTL_PRODUCTS,
            prefetch: true,
        },
    },
    data() {
        return {
            callUs: false,
            added: false,
            quantity: 1,
            quantities: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            CTLProduct: [],
            bedSize: [
                { title: 'Twin', value: 'twin' },
                { title: 'Full', value: 'full' },
            ],
            setSize: [
                { title: '2-Piece Set', value: '2-piece' },
                { title: '4-Piece Set', value: '4-piece' }, 
                { title: 'Build Your Own', value: 'build-own' }, 
            ],
            productImage: "https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/image/440x/cc0ec2d91bc4dd8becc1b9167d5c2be1/l/e/lettner-light-gray-youth-storage-sleigh-bedroom-set_qb13271770_4.jpg",
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
                {
                    text: 'Sku: B733-183-52S-53-ROOM',
                    disabled: true,
                    href: '/bedroom/bedroom-sets/a',
                },
            ],
            cards: [
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/bedroom_sets.jpg',
                    alt: 'bedroom_sets',
                    name: 'Bedroom Sets',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/beds.jpg',
                    alt: 'beds',
                    name: 'Beds',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/nightstand_v2.jpg',
                    alt: 'night_stands',
                    name: 'Night Stands',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/chests_v2.jpg',
                    alt: 'chests',
                    name: 'Chests',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/sofa.jpg',
                    alt: 'sofas',
                    name: 'Sofas',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/loveseats_v1.jpg',
                    alt: 'loveseats',
                    name: 'Loveseats',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/sectional-sofa_v1.jpg',
                    alt: 'sectionals',
                    name: 'Sectionals',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/dinning-table_v1.jpg',
                    alt: 'dining_tables',
                    name: 'Dining Tables',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/dining_chairs.jpg',
                    alt: 'dining_chairs',
                    name: 'Dining Chairs',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/kids_furniture.jpg',
                    alt: 'kids_furniture',
                    name: 'Kids Furniture',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/mattress.jpg',
                    alt: 'mattress',
                    name: 'Mattress',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/Barstool.jpg',
                    alt: 'barstools',
                    name: 'Barstools',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/lamp.jpg',
                    alt: 'lamps',
                    name: 'Lamps',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/chair_v1.jpg',
                    alt: 'chairs',
                    name: 'Chairs',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/ottomans.jpg',
                    alt: 'ottomans',
                    name: 'Ottomans',
                },
            ],
            info: ['Discription', 'Weight & Dimention', 'Specifications', 'Brand', 'Reviews', 'Shipping']
        }
    },
    mounted() {
        this.CTLProducts.forEach(product => {
            product.ads.forEach(element => {
                this.CTLProduct.push(element)
            });
        })
    }
}
</script>

<style>
.image {
    background: url("https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/syte-discovery/shop_similar_icon_v1.svg?v67ba9b3a") no-repeat;
    background-size: 89px 32px;
    width: 89px;
    height: 32px;
    position: absolute;
    bottom: 5px;
}
.special-price {
    border: 1px solid red;
    width: 160px;
}
#specialPriceLabel {
    background: url("https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/sprite_v2.png?va8ef6d04") -515px -524px no-repeat;
    width: 100px;
    height: 31px;
}
</style>