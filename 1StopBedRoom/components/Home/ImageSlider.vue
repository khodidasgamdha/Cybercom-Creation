  
<template>
    <v-sheet class="mx-auto mx-5">
        <v-slide-group show-arrows>

            <!-- custome icon -->
            <template v-slot:prev="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" color="primary">mdi-chevron-left</v-icon>
            </template>
            <template v-slot:next="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" color="primary">mdi-chevron-right</v-icon>
            </template>
            
            <v-slide-item v-for="(item, i) in imageSlider" :key="i">
                <v-card class="ma-4" tile flat width="110">
                    <n-link :to="item.link">
                        <v-img
                            :src="item.imgUrl"
                            :alt="item.alt"
                            height="60"
                        ></v-img>
                    </n-link>
                    <v-card-text class="text-center text-subtitle-2 px-0">{{
                        item.name
                    }}</v-card-text>
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </v-sheet>
</template>

<script>
import gql from 'graphql-tag'

const IMAGE_SLIDER = gql`
    query IMAGE_SLIDER {
        imageSlider {
            imgUrl
            alt
            name
            link
        }
    }
`

export default {
    apollo: {
        imageSlider: {
            query: IMAGE_SLIDER,
            prefetch: true,
        },
    },
}
</script>