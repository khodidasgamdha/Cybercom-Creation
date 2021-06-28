<template>
    <div class="mx-10">
        <!-- title -->
        <p class="headline mt-5 font-weight-light">{{ products.title }}</p>

        <v-row no-gutters>
            <v-col cols="2" v-for="(item, i) in products.products" :key="i">
                <v-card class="mx-1 mb-3" tile flat>
                    <!-- image -->
                    <n-link :to="`/${item.title}`">
                        <v-img
                            :src="item.src"
                            :alt="item.title"
                            height="160"
                        ></v-img>
                    </n-link>

                    <v-list-item-content>
                        <!-- title -->
                        <v-list-item-title class="mb-2">
                            <n-link
                                :to="`/${item.title}`"
                                class="text-decoration-none black--text"
                            >
                                {{ item.title }}
                            </n-link>
                        </v-list-item-title>

                        <!-- subtitle -->
                        <v-list-item-subtitle>
                            <n-link
                                :to="`/${item.subtitle}`"
                                class="
                                    body-2
                                    font-weight-light
                                    text-decoration-none
                                    grey--text
                                "
                            >
                                {{ item.subtitle }}
                            </n-link>
                        </v-list-item-subtitle>

                        <!-- price -->
                        <p class="red--text title">
                            {{ item.price }}
                            <span
                                class="
                                    text-decoration-line-through
                                    body-2
                                    grey--text
                                "
                                >{{ item.originalPrice }}</span
                            >
                        </p>

                        <!-- review -->
                        <v-row>
                            <v-col md="auto">
                                <v-rating
                                    :value="4.5"
                                    color="primary"
                                    dense
                                    half-increments
                                    readonly
                                    size="18"
                                ></v-rating>
                            </v-col>
                            <v-col md="auto" class="body-2 ml-n5">(7)</v-col>
                        </v-row>
                    </v-list-item-content>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    props: {
        products: { type: Object, requires: true },
    },
}
</script>