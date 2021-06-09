<template>
    <div class="mx-10">

        <!-- title -->
        <p class="headline mt-5 font-weight-light">{{ title }}</p>
        
        <v-row no-gutters>
            <v-col v-for="(item, i) in cardData" :key="i">
                <v-card class="mx-1" height="300" width="230" tile flat>
                    
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
                        <v-list-item-title class="pb-2">
                            <n-link :to="`/${item.title}`" class="text-decoration-none black--text">
                                {{ item.title }}
                            </n-link>
                        </v-list-item-title>
                        
                        <!-- subtitle -->
                        <v-list-item-subtitle class="pb-2">
                            <n-link :to="`/${item.subtitle}`" class="text-decoration-none black--text secondary--text">
                                {{ item.subtitle}}
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
        <v-divider></v-divider>
    </div>
</template>

<script>
export default {
    props: {
        cardData: { type: Array, default: null },
        title: { type: String, default: null },
    },
}
</script>