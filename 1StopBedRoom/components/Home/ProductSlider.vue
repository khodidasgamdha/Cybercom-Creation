<template>
    <div>

        <!-- title -->
        <p class="headline ml-10 mt-5 font-weight-light">Shop By Room</p>
        
        <v-sheet>
            <v-slide-group show-arrows>
                <v-slide-item v-for="(item, i) in cardData" :key="i">
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
                                class="font-weight-light"
                            >
                                <nuxt-link :to="`/${item.title}/${category}`" class="text-decoration-none black--text">
                                    {{ category }}
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
export default {
    data() {
        return {
            cardData: [
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/bedroom_v2.jpg',
                    title: 'Bedroom',
                    subCategory: [
                        'Bedroom Sets',
                        'Beds',
                        'Nightstands',
                        'Dressers',
                        'Dressers Mirrors',
                    ],
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/living_room_v2.jpg',
                    title: 'Living Room',
                    subCategory: [
                        'Living Room Sets',
                        'Sectionals',
                        'Sofas',
                        'Loveseats',
                        'Sleeper Sofas',
                    ],
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/dining_kitchen_v2.jpg',
                    title: 'Dining & Kitchen',
                    subCategory: [
                        'Dining Sets',
                        'Dining Chairs',
                        'Dining Tables',
                        "Backer's Racks",
                    ],
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/office_v2.jpg',
                    title: 'Office',
                    subCategory: [
                        'Home Office Sets',
                        'Office Chairs',
                        'Desks & Hutches',
                        'Office Accesories',
                        'Conference Room',
                    ],
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/bar_game_room_v2.jpg',
                    title: 'Bar & Game Room',
                    subCategory: [
                        'Home Bar Sets',
                        'Bistro and Bar Table Sets',
                        'Game Table Sets',
                        'Home Bars',
                        'Bar Tables and Pub Tables',
                    ],
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/outdoor_v1.jpg',
                    title: 'Outdoor',
                    subCategory: [
                        'Outdoor Dining Furniture',
                        'Outdoor Bar Furniture',
                        'Outdoor Accessories',
                        'Outdoor Conversation Sets',
                    ],
                },
            ],
        }
    },
}
</script>

<style scoped>
</style>