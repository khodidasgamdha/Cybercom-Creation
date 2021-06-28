<template>
    <div class="mx-16">
        <!-- links -->
        <v-breadcrumbs :items="links" class="mt-n4 px-0"></v-breadcrumbs>

        <v-layout no-gutters>
            <v-flex md3>
                <Filters />
            </v-flex>
            <v-flex md9>
                <ProductCards />

                <p class="headline mb-0">Popular Bedding and Comforter Sets</p>
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                ></v-data-table>

                <!-- read more -->
                <div class="my-10 body-2">
                    <h2 class="font-weight-medium mb-2">
                        How to choose and buy your ideal Bedding and Comforter
                        Set
                    </h2>
                    <p>
                        Egyptians were the first culture to cultivate an
                        appreciation for exquisite bedding sets. In typical
                        grandiose style, they created dramatic, elegant beds
                        covered in only the most beautiful bedding sets of
                        luxurious white linen. To them, these sensual sheets and
                        shrouds were a symbol of purity and light and they were
                        just as important in death as they were in life. High
                        quality bedding sets remain a status symbol to this day.
                    </p>
                    <div v-if="!readMore">
                        <p class="mb-0 font-weight-bold">
                            What is a complete bedding set?
                        </p>
                        <p>
                            Bedding has a few more jobs than just looking after
                            your comfort. The right sheets not only protect your
                            mattress but ensure personal...
                            <span
                                class="
                                    font-weight-bold
                                    text-decoration-underline
                                "
                                @click="readMore = true"
                            >
                                Read more
                            </span>
                        </p>
                    </div>

                    <!-- if read more -->
                    <div v-else>
                        <div v-for="(item, i) in learn" :key="i">
                            <p class="mb-0 font-weight-bold">
                                {{ item.title }}
                            </p>
                            <p class="mb-2">
                                {{ item.info }}
                            </p>
                        </div>
                        <span
                            class="font-weight-bold text-decoration-underline"
                            @click="readMore = false"
                        >
                            Read less
                        </span>
                    </div>
                </div>

            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import Filters from '~/components/SubCategory/Filters'
import ProductCards from '~/components/SubCategory/ProductCards'

export default {
    head() {
        return {
            title: 'Ideal Bedroom Sets to Choose for 2021 at 1StopBedrooms',
        }
    },
    components: { Filters, ProductCards },
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
                {
                    text: 'Bedroom Sets',
                    disabled: false,
                    href: '/bedroom/bedroom-sets',
                },
            ],
            readMore: false,
            learn: [
                {
                    title: 'What is a complete bedding set?',
                    info: 'Bedding has a few more jobs than just looking after your comfort. The right sheets not only protect your mattress but ensure personal hygiene as well. The fitted bottom sheet stays firmly attached to the mattress, protecting you from allergens and forever present but mercifully invisible dust mites as you sleep. The flat sheet protects your duvet or comforter from sweat, oils and skin that slough off as you sleep night after night. The majority of bedding sets also include pillowcases to match the pattern of your bedding as well as the size of your pillows.',
                },
                {
                    title: 'Bedding Sets – Your one stop décor shop!',
                    info: 'If you don’t have the best eye for decorating or just want to keep it simple, you might want to consider of colorful bedding sets that do all the coordination for you. These sets offer incredible value by combining everything you need for a jaw dropping bedroom. As many as 13 pieces are included in each set from throw pillows to bed skirts all specifically design to coordinate with your chosen duvet or comforter.',
                },
                {
                    title: 'Where to Buy Bedding Sets?',
                    info: 'The joy of a well-coordinated bedding set is something millions of us pay hard earned money to enjoy. Our bedding sets sale online makes it simple to choose a knock-out style. In addition, our price match guarantee means you’ll never have to second guess your choice. It makes sense when investing in comfortable bedding sets to source out reputable online merchants in order to maximize your budget. 1StopBedrooms is your first and only stop on the road to a pharaoh approved bedroom. Take a look at your bedding. Stand in front of it and take it all in. Yes, even the Star Wars sheets and the blanket you’ve had since fifth grade. If you walked into your room would you be impressed? Would you want to crawl into your bed and stay the day or run from the room at your earliest convenience? Your bed is the most substantial piece of furniture in your room and as such, demands the attention of anyone who sees it. Whether you like it or not, how you choose to decorate your bed says a great deal about who you are. If you’re still snuggling up to a boy band throw pillow, it’s time to update your style with a new comforter set.',
                },
                {
                    title: 'What is a comforter bed set?',
                    info: 'Known as a ‘bed in a bag’ in the past, stylish comforter sets are the perfect way to bring new life to your bedroom in one fell swoop. They consist of a comforter, shams and in some cases even coordinating decorative pillows and bolsters. A good comforter cover set has been specially designed to coordinate perfectly and if you choose wisely, should be able to withstand at least a decade of use.',
                },
                {
                    title: 'Choosing your new stylish comforter sets',
                    info: 'Your first concern should be the thread count. The higher the thread count, the denser and softer the fabric should be. Pieces that have a high thread count and are made of natural materials will be more durable than anything made of synthetic fabrics such as polyester. Genuinely gorgeous comforter sets made of velvets, brocades or high thread count cotton will not only last longer but will give a noticeable lift of luxury to the room.',
                },
                {
                    title: 'Where to Find Cheap Comforter Sets Online',
                    info: 'Finding the best place to buy comforter sets online can be like cutting your way through a dense jungle. You might order what seems like the perfect cheap designer comforter sets only to receive paper thin knockoffs. Your search for luxury comforter sets for less ends at 1StopBedrooms. We continually update our inventory with the most popular comforter sets on the market. By sending our dedicated furniture experts out to source what’s trending and curating the best in classically elegant bedroom comforter sets we have created an inventory of the market’s best in one spot. Don’t spend another night wrapped up in a raggedy duvet from your college years – we’ll help you ‘adult up’ and save money. Is there anything more mature than that?',
                },
            ],
            headers: [
                {
                    text: 'Name',
                    value: 'name',
                },
                { text: 'Brand', value: 'brand' },
                { text: 'Collection', value: 'collection' },
                { text: 'Price', value: 'price' },
            ],
            desserts: [
                {
                    name: 'Avaleigh Pink/White/Gray Twin Comforter Set',
                    brand: 'Signature Design by Ashley',
                    collection: 'Avaleigh Collection',
                    price: '$116.62',
                },
            ],
        }
    },
}
</script>

<style>
.v-data-table td, th {
    border: 1px solid #E0E0E0;
}
.v-data-table th {
    background-color: #E0E0E0;
    font-size: 14px !important;
}
.v-data-table td {
    font-size: 13px !important;
    color: #555;
}
.v-data-table .v-data-footer {
    display: none;
}
</style>