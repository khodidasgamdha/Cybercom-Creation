<template>
    <div class="mx-16">
        <!-- links -->
        <v-breadcrumbs :items="links" class="mt-n10"></v-breadcrumbs>

        <!-- sidebar and products -->
        <v-layout no-gutters justify-space-around>
            <v-flex md2>
                <SideBar :productLinks="Category.productLinks" />
            </v-flex>
            <v-flex md9>
                <ProductImage
                    :images="Category.img"
                    :categories="Category.category"
                />
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import ProductImage from '~/components/Category/ProductImage'
import SideBar from '~/components/Category/SideBar'
import gql from 'graphql-tag'

const CATEGORY_PRODUCTS = gql`
    query CATEGORY_PRODUCTS {
        Category(type: "living") {
            title
            productLinks {
                linkTitle
                link
            }
            img
            category {
                src
                name
            }
        }
    }
`

export default {
    components: { ProductImage, SideBar },
    apollo: {
        Category: {
            query: CATEGORY_PRODUCTS,
        },
    },
    data() {
        return {
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
            ],
        }
    },
}
</script>