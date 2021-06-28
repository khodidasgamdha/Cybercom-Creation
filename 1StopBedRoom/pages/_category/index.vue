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

                <!-- learn more -->
                <div class="mb-10 body-2">
                    <p class="mb-0 font-weight-bold">
                        Your Online Source for Bedroom Furniture
                    </p>
                    <p>
                        If you want to know where to buy bedroom furniture,
                        1StopBedrooms online store is the perfect place. We have
                        an incredible selection. Our full bedroom furniture sets
                        give you everything you need to create a comfy personal
                        haven. We offer individual pieces as well, so you can
                        create a sleeping space that’s uniquely yours. You can
                        choose any items you like to suit your style and fit
                        your budget from the comfort of your easy chair.
                        <span
                            v-if="!learnMore"
                            class="font-weight-bold"
                            @click="learnMore = true"
                        >
                            (Learn more)
                        </span>
                    </p>

                    <!-- if learn more -->
                    <div v-if="learnMore">
                        <div v-for="(item, i) in learn" :key="i">
                            <p class="mb-0 font-weight-bold">
                                {{ item.title }}
                            </p>
                            <p
                                v-for="(inf, x) in item.info"
                                :key="x"
                                class="mb-2"
                            >
                                {{ inf }}
                            </p>
                        </div>
                        <span
                            class="font-weight-bold"
                            @click="learnMore = false"
                        >
                            (Collapse info)
                        </span>
                    </div>
                </div>

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
            title: 'Bedroom Furniture - 1StopBedrooms',
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
            learnMore: false,
            learn: [
                {
                    title: 'Affordable Prices',
                    info: [
                        'Looking for cheap bedroom furniture online? You’re already in the home of affordable furniture for your bedroom. Our bundles and individual pieces have the superior quality of high-end expensive bedroom furniture without the added cost.',
                    ],
                },
                {
                    title: 'Quality Natural Wood Bedroom Furniture',
                    info: [
                        'We only bring you interior pieces made of high-quality materials, including a wide assortment of wood furniture. Our solid wood bedroom furniture is strong and sturdy, looks elegant now, and retains its beauty through years of use.',
                        'You will find metal in many of our bedframes and siderails. Many also have metallic materials in detailing like nailhead trim as well as in handles and drawer pulls. Pieces that include glass inserts, tops, or mirrors add brightness and create a feeling of spaciousness in your bedroom.',
                        'Our furniture also has a softer side that gives any room instant appeal. Fabric frames and inserts in bedroom space furniture give some of our pieces a softer look and feel. Upholstered headboards and footboards have a gracious, upscale look and provide extra comfort at the same time. No matter which single material or combination you choose, your choice will look great when it arrives and hold up well over time.',
                    ],
                },
                {
                    title: 'Distinctive Bedroom Furniture Styles',
                    info: [
                        'At 1StopBedrooms.com, you are never limited to one style of furniture for bedrooms. You can choose the style that appeals to you most and fits within your décor concept. Choose a modern style bedroom for a unique look that features clean lines, minimalist design, a mix of neutral and vivid colors, and a focus on function. Our contemporary sets are at the forefront of popular interior design, with the latest designs, colors, and materials. With crisp, sharp lines and a focus on beauty and comfort, these beds are the height of today’s fashion. Our transitional collections put together elements of both modern and contemporary style to create a unique and trendy look for your décor.',
                        'You can choose unique bedroom furniture pieces in a traditional look if you prefer a room that is more elaborately adorned, such as with carvings and ornate mouldings. We also carry rustic furniture pieces that feature simple lines, natural elements, and a rough-hewn look. If a vintage theme with a cool, retro appearance is more your style, you can find that here, too. Each of our pieces and sets expresses its unique style perfectly.',
                    ],
                },
                {
                    title: 'Beautiful Colors',
                    info: [
                        'Choose bedroom furniture collections in the color that is right for your décor from our vast collection. Our all-white bedroom selection gives your room a bright, cheerful ambiance. Select our black bedroom furniture if you prefer a more substantial and imposing look. Brown is extremely versatile and goes well with nearly any color scheme you might choose.',
                        'Gray has a uniquely attractive look that is perfect for a contemporary neutral color palette or even in combination with brighter colors. If you like a little dazzle in your home, opt for a metallic silver set. Each of our authentic wood finishes also has its own individual color. For example, cherry wood has a different hue from walnut or oak finishes.',
                        'The color you choose may have a huge impact on how much space the room appears to have. You buy the furniture in colors that create a spacious look if the size of your bedroom is small. With our large selection, it is easy to find the right furniture to save space visually or create a cozy space. By choosing the hue carefully, you can create the most appealing effect.',
                    ],
                },
                {
                    title: 'Popular Brands to Design Your Bedroom Online',
                    info: [
                        'At 1StopBedrooms, you can find the perfect collections to design your bedroom online in a breeze. Here, you can find outstanding pieces to mix and match for a space that is as individual as you are. We carry a wide variety of Ashley bedroom furniture as well as many other premium brands. The following are some of our most popular brands.',
                    ],
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
            category,
        }
    },
}
</script>