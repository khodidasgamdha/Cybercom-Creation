<template>
    <div class="mx-16">
        <!-- links -->
        <v-breadcrumbs :items="links" class="mt-n4"></v-breadcrumbs>

        <!-- sidebar and products -->
        <v-layout no-gutters justify-space-around>
            <v-flex md2>
                <SideBar :productLinks="category.productLinks" />
            </v-flex>
            <v-flex md9>
                <ProductImage
                    :images="category.img"
                    :categories="category.category"
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
    query CATEGORY_PRODUCTS($url: String!) {
        category(type: $url) {
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
    head() {
        return {
            title: 'Bedroom Furniture - 1StopBedrooms'
        }
    },
    components: { ProductImage, SideBar },
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
    async asyncData({ app, params }) {
        const client = app.apolloProvider.defaultClient
        const url = params.category

        const res = await client.query({
            query: CATEGORY_PRODUCTS,
            variables: {
                url,
            },
        })
        
        const category = res.data.category
        return {
            category
        }
    },
}
</script>