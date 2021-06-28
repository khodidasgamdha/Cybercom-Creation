<template>
    <div>

        <!-- title -->
        <p class="headline ml-10 mt-5 font-weight-light">Shop By Room</p>
        
        <v-sheet>
            <v-slide-group show-arrows>

                <!-- custome icon -->
                <template v-slot:prev="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on" color="primary">mdi-chevron-left</v-icon>
                </template>
                <template v-slot:next="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on" color="primary">mdi-chevron-right</v-icon>
                </template>

                <v-slide-item v-for="(item, i) in shopByRoom" :key="i">
                    <v-card class="mx-1" height="434" width="275" tile flat>
                        
                        <!-- image -->
                        <n-link :to="`/${item.title}`">
                            <v-img 
                                :src="item.imgUrl"
                                :alt="item.title"
                                height="200" 
                            ></v-img>
                        </n-link>

                        <!-- title -->
                        <v-card-title class="font-weight-light headline">
                            {{ item.title }}
                        </v-card-title>
                        
                        <v-divider></v-divider>
                        
                        <!-- links -->
                        <v-card-text>
                            <div
                                v-for="(category, index) in item.subCategory"
                                :key="index"
                            >
                                <nuxt-link :to="category.link" class="body-2 font-weight-light text-decoration-none black--text">
                                    {{ category.linkTitle }}
                                </nuxt-link>
                            </div>
                            <n-link :to="`/${item.title}`" class="text-decoration-none">See All</n-link>
                        </v-card-text>

                    </v-card>
                </v-slide-item>
            </v-slide-group>

            <v-divider></v-divider>

        </v-sheet>
    </div>
</template>

<script>
import gql from 'graphql-tag'

const SHOP_BY_ROOM = gql `
    query SHOP_BY_ROOM {
        shopByRoom {
            imgUrl
            title
            subCategory {
                linkTitle
                link
            }
        }
    }
`

export default {
    apollo: {
        shopByRoom: {
            query: SHOP_BY_ROOM,
            prefetch: true,
        },
    },
}
</script>

<style scoped>
</style>