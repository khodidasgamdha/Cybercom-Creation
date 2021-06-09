  
<template>
    <v-sheet class="mx-auto mx-5">
        <v-slide-group show-arrows>
            <v-slide-item v-for="(card, i) in cards" :key="i">
                <v-card class="ma-4" tile flat width="110">
                    <v-img
                        :src="card.imgUrl"
                        :alt="card.alt"
                        height="60"
                    ></v-img>
                    <v-card-text class="text-center text-subtitle-2">{{
                        card.name
                    }}</v-card-text>
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </v-sheet>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/bedroom_sets.jpg',
                    alt: 'bedroom_sets',
                    name: 'Bedroom Sets',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/beds.jpg',
                    alt: 'beds',
                    name: 'Beds',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/nightstand_v2.jpg',
                    alt: 'night_stands',
                    name: 'Night Stands',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/chests_v2.jpg',
                    alt: 'chests',
                    name: 'Chests',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/sofa.jpg',
                    alt: 'sofas',
                    name: 'Sofas',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/loveseats_v1.jpg',
                    alt: 'loveseats',
                    name: 'Loveseats',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/sectional-sofa_v1.jpg',
                    alt: 'sectionals',
                    name: 'Sectionals',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/dinning-table_v1.jpg',
                    alt: 'dining_tables',
                    name: 'Dining Tables',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/dining_chairs.jpg',
                    alt: 'dining_chairs',
                    name: 'Dining Chairs',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/kids_furniture.jpg',
                    alt: 'kids_furniture',
                    name: 'Kids Furniture',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/mattress.jpg',
                    alt: 'mattress',
                    name: 'Mattress',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/Barstool.jpg',
                    alt: 'barstools',
                    name: 'Barstools',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/lamp.jpg',
                    alt: 'lamps',
                    name: 'Lamps',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/chair_v1.jpg',
                    alt: 'chairs',
                    name: 'Chairs',
                },
                {
                    imgUrl: 'https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/shopbycat/ottomans.jpg',
                    alt: 'ottomans',
                    name: 'Ottomans',
                },
            ],
        }
    },
}
</script>