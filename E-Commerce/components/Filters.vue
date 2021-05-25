<template>
    <div>
        <v-card class="container mx-auto" elevation="5">
            <v-card-title>Filters</v-card-title>
            <v-divider></v-divider>

            <!-- categories -->
            <p class="ml-5 mt-1 mb-n2">CATEGORIES</p>
            <v-card-text>
                <p>
                    <v-icon small>mdi-chevron-left</v-icon>
                    Clothing & Accesseries
                </p>
                <p class="mt-n3">
                    <v-icon small>mdi-chevron-left</v-icon>
                    Bottomware
                </p>
                <p class="mt-n3">
                    <v-icon small>mdi-chevron-left</v-icon>
                    Jeans
                </p>
            </v-card-text>
            <p class="ml-8 mt-n5"><b>Men's Jeans</b></p>
            <v-divider></v-divider>

            <!-- price -->
            <p class="ml-5 mt-1">PRICE</p>
            <div class="container mt-n5">
                <v-slider
                    class="mb-3 align-center"
                    :max="max"
                    :min="min"
                    value="80"
                    hide-details
                >
                </v-slider>
                <div class="row ml-3 mr-3">
                    <div>
                        <v-select
                            class="select"
                            outlined
                            :items="items"
                            label="Min"
                        ></v-select>
                    </div>
                    <div class="ml-auto">
                        <v-select
                            class="select"
                            outlined
                            :items="items"
                            label="Max"
                        ></v-select>
                    </div>
                </div>
            </div>
            <v-divider></v-divider>

            <!-- other -->
            <v-list>
                <v-list-group
                    v-for="item in list"
                    :key="item.title"
                    v-model="item.active"
                    no-action
                >
                    <!-- title -->
                    <template v-slot:activator>
                        <v-list-item-content>
                            <p v-text="item.title"></p>
                        </v-list-item-content>
                    </template>

                    <!-- filters -->
                    <v-list-item v-for="child in item.items" :key="child.title">
                        <template v-slot:default="{ active }">
                            <v-list-item-action class="ml-n12">
                                <v-checkbox :input-value="active"></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title v-text="child"></v-list-item-title>
                            </v-list-item-content>
                        </template>
                    </v-list-item>

                </v-list-group>
            </v-list>

        </v-card>
    </div>
</template>

<script>
export default {
    data: () => ({
        min: 0,
        max: 100,
        items: [0, 99, 499, 999, 4999],
        list: [
            {
                title: 'BRAND',
                items: ["Wrangler", "Levi's", "Spykar", "LEVI'S", "Lee", "Killer"],
            },
            {
                title: 'CUSTOMER RATING',
                items: ["4★ & above", "3★ & above", "2★ & above", "1★ & above"],
            },
            {
                title: 'SIZE',
                items: ["13 - 14 Years", "18 - 24 Months", "20", "25", "26", "28", "29", "30", "31", "32", "33", "34", "35", "36"],
            },
            {
                title: 'OFFER',
                items: ["Buy More, Save More", "Special Price"],
            },
            {
                title: 'DISCOUNT',
                items: ["10% and below", "10% or more", "20% or more", "30% or more", "40% or more", '50% or more', "60% or more", "70% or more", "80% or more"],
            },
            {
                title: 'FIT',
                items: ["Slim", "Regular", "Skinny", "Jogger Fit", "Tapered Fit", "Super Skinny", "Boot-Leg", "Boyfriend"],
            },
            {
                title: 'COLOR',
                items: ["Black", "Grey", "White", "Blue", "Light Blue", "Dark Blue", "Beige", "Brown", "Dark Green", "Dark Grey", "Gold", "Green", "Light Green", "Maroon", "Multicolor", "Orange", "Pink", "Purple", "Red", "Silver", "Yellow"],
            },
            {
                title: 'DISTRESS',
                items: ["Clean Look", "Raw Edges/Fringed Hem", "High Distress", "Mild Distress", "Knee Slit"],
            },
            {
                title: 'FADE',
                items: ["Heavy Fade", "Clean Look", "Light Fade"],
            },
            {
                title: 'RISE',
                items: ["Mid Rise", "Low Rise", "High Rise"],
            },
            {
                title: 'IDEAL FOR',
                items: ["Men"],
            },
            {
                title: 'THEAM',
                items: ["Joggers", "Celeb Style - Distressed Denim", "Celeb Style - Knee Slit", "Turn Ups", "Date Look Denims", "Black - Low Waist Denim"],
            },
            {
                title: 'FABRIC',
                items: ["100 % Cotton Stretch", "100% Cotton", "Non Stretchable", "65% Cotton", "34% Polyester", "1% Elastane", "70 % COTTON +28% POLYESTER +2 % ELASTANE", "78% COTTON/20% POLYESTER/2% LYCRA", "79% CTN/19% POLYESTER/2% ELASTANE"],
            },
            {
                title: 'PATTERN',
                items: ["Chevron/Zig Zag", "Dip Dye", "Solid", "Ombre", "Applique", "Self Design", "Ombre", "Self Design", "Solid", "Self Design, Washed", "Dip Dye, Solid", "Acid Washed"],
            },
            {
                title: 'AVAILABILITY',
                items: ["Include Out of Stock"],
            },
        ],
    }),
}
</script>

<style>
.select {
    width: 80px;
}
</style>