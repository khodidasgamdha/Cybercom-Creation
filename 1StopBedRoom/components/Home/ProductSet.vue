<template>
    <div class="mx-10">

        <!-- title -->
        <p class="headline mt-5 font-weight-light">Buy as a set and save</p>
        
        <v-row no-gutters>
            <v-col v-for="(item, i) in cardData" :key="i">
                <v-card class="mx-1" height="330" width="275" tile flat>
                    
                    <n-link :to="`/${item.title}`">
                        <v-img 
                            :src="item.src" 
                            :alt="item.title" 
                            height="250"
                        ></v-img>
                    </n-link>

                    <v-card-text>
                        <p class="black--text subtitle-1 mb-0">{{ item.title }}</p>
                        <n-link :to="`/${item.title}`" class="text-decoration-none">Shop now</n-link>
                        <v-icon small color="orange darken-2">mdi-arrow-right</v-icon>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-divider></v-divider>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            cardData: [
                {
                    src: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/bedroom_v2.jpg',
                    title: 'Bedroom Sets on Sale',
                },
                {
                    src: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/living-room-set_v5.jpg',
                    title: 'Living Room Sets on Sale',
                },
                {
                    src: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/Dining-kitchen-set_v5.jpg',
                    title: 'Dining & Kitchen Sets on Sale',
                },
                {
                    src: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/office-furniture-set_v5.jpg',
                    title: 'Office Furniture Sets',
                },
                {
                    src: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/bar-game-room-set_v5.jpg',
                    title: 'Bar & Game Room Sets',
                },
            ],
        }
    },
}
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>