<template>
    <div>

        <!-- banner -->
        <v-img 
            :src="images" 
            :alt="$route.params.category" 
            class="mb-9"
        >
            <v-card flat tile color="rgba(0, 0, 0, 0.3)">
                <h1 class="ml-5 white--text font-weight-light text-capitalize">
                    {{ $route.params.category }}
                </h1>
            </v-card>
        </v-img>

        <!-- categories -->
        <v-row>
            <v-col v-for="(category, i) in categories" :key="i" class="mb-16">
                <nuxt-link
                    :to="`/${$route.params.category}/${category.name}`"
                    class="text-decoration-none"
                >
                    <v-hover v-slot="{ hover }">
                        <v-card id="card-border" class="rounded-circle pa-3" height="230" width="230">
                            
                            <!-- image -->
                            <v-avatar size="200">
                                <v-img 
                                    :src="category.src"
                                    :alt="category.name"
                                ></v-img>
                            </v-avatar>
                            
                            <!-- on hover -->
                            <v-fade-transition>
                                <v-overlay
                                    v-if="hover"
                                    absolute
                                >
                                    <v-icon x-large>mdi-share</v-icon>
                                </v-overlay>
                            </v-fade-transition>

                            <!-- name -->
                            <v-card-text>
                                <p
                                    class="
                                        font-weight-bold
                                        pt-3
                                        text-center
                                    "
                                    :class="hover ? 'primary--text' : 'black--text'"
                                >
                                    {{ category.name }}
                                    <span class="body-1 grey--text">(200)</span>
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </nuxt-link>
            </v-col>
        </v-row>

        <v-divider class="my-5"></v-divider>
        
        <!-- features -->
        <div>
            <p class="text-center display-1 font-weight-light my-10">
                WHY BUY AT 1STOPBEDROOMS
            </p>
            <v-row>
                <v-col v-for="(feature, i) in features" :key="i">
                    <v-card tile flat>

                        <!-- image -->
                        <v-img
                            :src="feature.src"
                            :alt="feature.title"
                            width="120"
                            class="ml-5"
                        ></v-img>

                        <!-- title -->
                        <v-card-title class="title px-2">
                            {{ feature.title }}
                        </v-card-title>
                        
                        <!-- info -->
                        <v-card-text class="body-2 black--text">
                            <p class="mb-0">{{ feature.info }}</p>
                            <n-link v-if="typeof(feature.linkSrc) === 'string'" class="text-decoration-none font-weight-light" :to="`/${feature.linkSrc}`">{{ feature.link }}</n-link>
                            <a v-else class="text-decoration-none" :href="`tel: ${feature.linkSrc}`">{{ feature.link }}</a>
                        </v-card-text>

                    </v-card>
                </v-col>
            </v-row>
        </div>

        <v-divider class="my-5"></v-divider>
    
    </div>
</template>

<script>
export default {
    props: {
        images: { type: String, default: null },
        categories: { type: Array, default: null },
    },
    data() {
        return {
            features: [
                {
                    src: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/top_brand_v1.png',
                    title: 'Shop Top Brands',
                    info: 'Including Ashley, Liberty, A.R.T., Coaster & more.',
                    link: "Shop by Brand",
                    linkSrc: 'brand'
                },
                {
                    src: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/expert_advise_v1.png',
                    title: 'Get Expert Advice',
                    info: 'Non-commissioned consultants are here to help.',
                    link: "877-958-9203",
                    linkSrc: 877-958-9203
                },
                {
                    src: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/best_price_v1.png',
                    title: 'Price Match Guarantee',
                    info: 'Found a lower price? Just let us know and we’ll beat it!',
                    link: "Learn more",
                    linkSrc: 'policy'
                },
                {
                    src: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/free_Delivery_v1.png',
                    title: 'Free! White Glove Delivery',
                    info: 'Room of Choice + Full Setup On almost everything!',
                    link: "Learn more",
                    linkSrc: 'policy'
                },
                {
                    src: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/buy_now_icon.png',
                    title: 'Buy Now and Pay Over Time',
                    info: 'Choose 12, 24, or 36 months*',
                    link: "Learn more",
                    linkSrc: 'policy'
                },
            ],
        }
    },
}
</script>

<style scoped>
#card-border {
    border: 1px grey solid;
}
</style>