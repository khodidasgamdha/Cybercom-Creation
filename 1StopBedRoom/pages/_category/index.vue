<template>
    <div class="mx-16">

        <!-- links -->
        <v-breadcrumbs :items="links" class="mt-n10"></v-breadcrumbs>

        <!-- sidebar and products -->
        <v-layout no-gutters justify-space-around>
            <v-flex md2>
                <SideBar :productLinks="product['bedroom']" />
            </v-flex>
            <v-flex md9>
                <ProductImage
                    :images="product['bedroomImage']"
                    :categories="product['bedroomCategories']"
                />
            </v-flex>
        </v-layout>

    </div>
</template>

// <script>
import ProductImage from '~/components/Category/ProductImage'
import SideBar from '~/components/Category/SideBar'

export default {
    components: { ProductImage, SideBar },
    data() {
        return {
            productName: this.$route.params.category,
            links: [
                {
                    text: 'Home',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Bedroom Furniture',
                    disabled: false,
                    href: 'bedroom',
                },
            ],
            product: {
                bedroom: [
                    'Bedroom Sets',
                    'Beds',
                    'Nightstands',
                    'Dressers',
                    'Dresser Mirrors',
                    'Chests',
                    'Bedroom Benches',
                    'Bed Frames & Headboards',
                    'Armoires and Wardrobes',
                    'Bedroom Vanities',
                    'Media Chests',
                    'Jewelry Armoires',
                    'Day Beds and Futons',
                    'Kids and Youth Furniture',
                    'Mattresses',
                    'Pillows',
                    'Bedding and Comforter Sets',
                ],
                bedroomImage: 'https://cdn.1stopbedrooms.com/media/catalog/category/bedroom_bnr_new_1.png',
                bedroomCategories: [
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/bedroom-set_v1.png',
                        name: 'BEDROOM SETS',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/beds_2.png',
                        name: 'BEDS',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/nightstand_3.png',
                        name: 'NIGHTSTANDS',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/dresser_1.png',
                        name: 'DRESSERS',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/dresser-mirror.png',
                        name: 'DRESSER MIRRORS',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/chest_1.png',
                        name: 'CHESTS',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/bedroom-benches.png',
                        name: 'BEDROOM BENCHES',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/Bed-Frames-_-Headboards.png',
                        name: 'BED FRAMES & HEADBOARDS',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/Armoires-and-Wardrobes.png',
                        name: 'ARMOIRES AND WARDROBES',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/bedroom-vanities.png',
                        name: 'BEDROOM VANITIES',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/media-chest.png',
                        name: 'MEDIA CHESTS',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/jewellery-armories_1.png',
                        name: 'JEWELRY ARMOIRES',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/daybeds-and-futons.png',
                        name: 'DAY BEDS AND FUTONS',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/10270070.png',
                        name: 'KIDS AND YOUTH FURNITURE',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/mattress.png',
                        name: 'MATTRESSES',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/pillow.png',
                        name: 'PILLOWS',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/category/282x/bedding-set.png',
                        name: 'BEDDING AND COMFORTER SETS',
                    },
                ],
            },
        }
    },
}
</script>