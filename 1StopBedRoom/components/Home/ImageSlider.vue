  
<template>
    <v-sheet class="mx-auto mx-5">
        <v-slide-group show-arrows>
            <v-slide-item v-for="(item, i) in imageSlider" :key="i">
                <v-card class="ma-4" tile flat width="110">
                    <n-link :to="item.link">
                        <v-img
                            :src="item.imgUrl"
                            :alt="item.alt"
                            height="60"
                        ></v-img>
                    </n-link>
                    <v-card-text class="text-center text-subtitle-2">{{
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