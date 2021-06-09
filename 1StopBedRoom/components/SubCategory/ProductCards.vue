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

        <v-row>
            <v-col v-for="(product, i) in products['bedroom-sets']" :key="i">
                <v-hover v-slot="{ hover }">
                    <v-card max-width="321" height="546" :elevation="hover ? 10 : 2">
                        
                        <!-- image -->
                        <v-img 
                            :src="product.src"
                            :alt="product.title"
                        ></v-img>

                        <!-- button -->
                        <v-row class="mx-2">

                            <!-- more options -->
                            <v-btn
                                tile
                                text
                                class="
                                    grey lighten-2
                                    subtitle-2
                                    grey--text
                                    px-8
                                    my-2
                                    text-capitalize
                                "
                            >
                                More Options
                            </v-btn>
                            <v-spacer></v-spacer>

                            <!-- similar products -->
                            <v-btn id="similar" text class="my-2"></v-btn>
                        </v-row>
                        
                        <!-- title -->
                        <p class="mt-5 mx-2 black--text subtitle-1 mb-1">
                            {{ product.title }}
                        </p>

                        <!-- subtitle -->
                        <p
                            v-if="!hover"
                            class="mx-2 subtitle-2 font-weight-light mb-1"
                        >
                            {{ product.subTitle }}
                        </p>

                        <!-- web id -->
                        <p
                            v-else
                            class="mx-2 subtitle-2 font-weight-medium grey--text mb-1"
                        >
                            Web Id: 
                            <span class="font-weight-bold">
                                {{ product.webId}}
                            </span>
                        </p>

                        <!-- special price -->
                        <p
                            v-if="!product.specialPrice"
                            class="red--text mx-2 title my-1"
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
                                <span class=" black--text ml-2">
                                    {{ product.specialPrice }}
                                </span>
                                <div id="specialPriceLabel" class="mx-n3"></div>
                            </div>
                        </div>

                        <!-- review -->
                        <v-row no-gutters class="mx-2 my-n1">
                            <v-col cols="4">
                                <v-rating
                                    v-model="product.rating"
                                    readonly
                                    background-color="grey"
                                    half-increments
                                    size="18"
                                    dense
                                ></v-rating>
                            </v-col>
                            <v-col>
                                <span class="ml-2 body-2 black--text"
                                    >({{ product.numberOfRating }})</span
                                >
                            </v-col>
                        </v-row>

                        <!-- free delivery -->
                        <p class="mx-2 body-2 secondary--text mt-2">Free Home Delivery</p>

                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedSortedType: null,
            // subCategory: this.$route.params.subCategory,
            sorts: ['Top Sellers', 'Price:Low-High', 'Price:High-Low'],
            products: {
                'bedroom-sets': [
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/small_image/301x301/cc0ec2d91bc4dd8becc1b9167d5c2be1/b/6/b647-31-36-46-78-56-97-91-q236_1_1.jpg',
                        title: 'Bolanburg White Louvered Panel Bedroom Set',
                        subTitle: 'By Signature Design by Ashley',
                        webId: 'QB1167628',
                        price: '$1,229.12',
                        originalPrice: '$1,610.00',
                        numberOfRating: '16',
                        rating: 4.5,
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/small_image/301x301/cc0ec2d91bc4dd8becc1b9167d5c2be1/l/e/lettner-light-gray-sleigh-bedroom-set_qb1225358.jpg',
                        title: 'Lettner Light Gray Sleigh Bedroom Set',
                        subTitle: 'By Signature Design by Ashley',
                        webId: 'QB1225358',
                        specialPrice: '$1229.42',
                        price: '$1,229.42',
                        numberOfRating: '1',
                        rating: 4.5,
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/small_image/301x301/cc0ec2d91bc4dd8becc1b9167d5c2be1/b/i/birlanny-silver-upholstered-panel-bedroom-set_qb1167633.jpg',
                        title: 'Birlanny Silver Upholstered Panel Bedroom Set',
                        subTitle: 'By Signature Design by Ashley',
                        webId: 'QB1167633',
                        price: '$1,963.00',
                        numberOfRating: '39',
                        rating: 4.1,
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/small_image/301x301/cc0ec2d91bc4dd8becc1b9167d5c2be1/b/o/bolanburg-white-panel-bedroom-set_qb1167629_50.jpg',
                        title: 'Bolanburg White Panel Bedroom Set',
                        subTitle: 'By Signature Design by Ashley',
                        webId: 'QB1167629',
                        price: '$1,228.49',
                        originalPrice: '$1,610.00',
                        numberOfRating: '22',
                        rating: 4.5,
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/small_image/301x301/cc0ec2d91bc4dd8becc1b9167d5c2be1/b/7/b750-31-36-46-58-56-97-93_9_1_1.jpg',
                        title: 'Cassimore Pearl Silver Panel Bedroom Set',
                        subTitle: 'By Signature Design by Ashley',
                        webId: 'QB1196021',
                        price: '$2,568.58',
                        numberOfRating: '6',
                        rating: 4.5,
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/small_image/301x301/cc0ec2d91bc4dd8becc1b9167d5c2be1/c/a/cassimore-north-shore-pearl-silver-panel-bedroom-set_qb1196017.jpg',
                        title: 'Cassimore North Shore Pearl Silver Panel Bedroom Set',
                        subTitle: 'By Signature Design by Ashley',
                        webId: 'QB1196017',
                        price: '$2,319.86',
                        numberOfRating: '5',
                        rating: 4,
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/small_image/301x301/cc0ec2d91bc4dd8becc1b9167d5c2be1/C/A/CARMENNSWHITE-MIAMIBEDQS-br-set-1.jpg',
                        title: 'Carmen Bedroom Set w/ Miami Bed',
                        subTitle: 'By ESF',
                        webId: 'QB1247588',
                        price: '$2,943.02',
                        originalPrice: '$3,848.66',
                        numberOfRating: '7',
                        rating: 4.5,
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/small_image/301x301/cc0ec2d91bc4dd8becc1b9167d5c2be1/e/s/esf-status-italy-treviso-white-grey-bedroom-set_qb13231303.jpg',
                        title: 'ESF Status Italy Treviso White Grey Bedroom Set',
                        subTitle: 'By ESF',
                        webId: 'QB13231303',
                        price: '$1,503.52',
                        originalPrice: '$1,774.00',
                        numberOfRating: '0',
                        rating: 0,
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/small_image/301x301/cc0ec2d91bc4dd8becc1b9167d5c2be1/M/A/MANGANOBEDQS-br-set-1.jpg',
                        title: 'Mangano Panel Bedroom Set',
                        subTitle: 'By ESF',
                        webId: 'QB1247668',
                        price: '$1,479.04',
                        originalPrice: '$1,831.03',
                        numberOfRating: '7',
                        rating: 5,
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/small_image/301x301/cc0ec2d91bc4dd8becc1b9167d5c2be1/B/A/BAROCCOBEDQSGOLDI-br-set-ivory-gold-2.jpg',
                        title: 'Barocco Bedroom Set (Ivory and Gold)',
                        subTitle: 'By ESF',
                        webId: 'QB1247580',
                        price: '$2,040.10',
                        originalPrice: '$2,338.06',
                        numberOfRating: '4',
                        rating: 4.5,
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/small_image/301x301/cc0ec2d91bc4dd8becc1b9167d5c2be1/q/b/qb1187399.jpg',
                        title: 'Stanley Sleigh Bedroom Set',
                        subTitle: 'By Crown Mark',
                        webId: 'QB1187399',
                        specialPrice: '$1424.40',
                        price: '$1,424.40',
                        numberOfRating: '4',
                        rating: 5,
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/small_image/301x301/cc0ec2d91bc4dd8becc1b9167d5c2be1/q/b/qb1165942.jpg',
                        title: 'Loraine Silver Upholstered Panel Bedroom Set',
                        subTitle: 'By Furniture Of America',
                        webId: 'QB1165942',
                        price: '$1,748.55',
                        originalPrice: '$2,184.00',
                        numberOfRating: '1',
                        rating: 4,
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/small_image/301x301/cc0ec2d91bc4dd8becc1b9167d5c2be1/t/u/turin_modern_bedroom.jpg',
                        title: 'Turin Light Grey and Black Lacquer Platform Bedroom Set',
                        subTitle: 'By J & M',
                        webId: 'QB1178728',
                        price: '$1,326.01',
                        originalPrice: '$2,225.00',
                        numberOfRating: '13',
                        rating: 5,
                    },
                ],
            },
        }
    },
    methods: {
        sortProducts(type) {
            if (type === 'Price:Low-High') {
                this.products['bedroom-sets'].sort((a, b) => a.price < b.price ? -1 : 1)
            }
            if (type === 'Price:High-Low') {
                this.products['bedroom-sets'].sort((a, b) => a.price < b.price ? -1 : 1).reverse()
            }
        },
    },
}
</script>
<style scoped>
.special-price {
    border: 1px solid red;
    width: 165px;
}
#specialPriceLabel {
    background: url("https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/sprite_v2.png?va8ef6d04") -515px -524px no-repeat;
    width: 100px;
    height: 31px;
}
#similar {
    background: url("https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/syte-discovery/shop_similar_icon_v1.svg?v67ba9b3a") no-repeat;
    background-size: 80px 32px;
    width:"90px";
    height:"32px";
}
</style>