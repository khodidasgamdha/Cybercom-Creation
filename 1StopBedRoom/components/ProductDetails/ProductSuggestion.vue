<template>
    <div>

        <!-- title -->
        <p class="headline mt-5 ml-10 font-weight-light primary--text">{{ title }}</p>

        <v-slide-group show-arrows>

            <!-- custome icon -->
            <template v-slot:prev="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" fab>
                    <v-icon x-large color="primary">mdi-chevron-left</v-icon>
                </v-btn>
            </template>
            <template v-slot:next="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" fab>
                    <v-icon x-large color="primary">mdi-chevron-right</v-icon>
                </v-btn>
            </template>

            <v-slide-item v-for="(product, i) in products" :key="i" class="mb-10">
                <v-card class="mx-1 px-4" height="260" width="207" elevation="5">
                    
                    <!-- image -->
                    <n-link :to="`/${product.description}`">
                        <v-img
                            :src="product.imageUrl"
                            :alt="product.description"
                            height="150"
                        ></v-img>
                    </n-link>

                    <v-list-item-content>
                        <!-- title -->
                        <v-list-item-title class="pb-2">
                            <n-link
                                :to="`/${product.description}`"
                                class="text-decoration-none black--text"
                            >
                                {{ product.description }}
                            </n-link>
                        </v-list-item-title>

                        <!-- price -->
                        <p class="title">
                            {{ product.price }}
                            <span
                                class="
                                    text-decoration-line-through
                                    body-2
                                    grey--text
                                "
                                >{{ product.originalPrice }}</span
                            >
                        </p>

                        <!-- review -->
                        <v-row v-if="product.reviewsCount">
                            <v-col md="auto">
                                <v-rating
                                    :value="product.reviewsAverage"
                                    color="primary"
                                    dense
                                    half-increments
                                    readonly
                                    size="18"
                                ></v-rating>
                            </v-col>
                            <v-col md="auto" class="body-2 ml-n5">({{ product.reviewsCount }})</v-col>
                        </v-row>
                    </v-list-item-content>

                </v-card>
            </v-slide-item>
        </v-slide-group>
    </div>
</template>

<script>
export default {
    props: {
        title: { type: String, required: true },
        products: { type: Array, required: true }
    },
}
</script>

<style>
</style>