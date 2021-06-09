<template>
    <div>

        <!-- title -->
        <h2 class="text-capitalize pb-5">{{ $route.params.subCategory }}</h2>
        
        <v-expansion-panels
            v-for="(filterProduct, i) in filters"
            :key="i"
            accordion
            tile
            flat
            multiple
            v-model="panel"
        >
            <v-expansion-panel expand v-model="panel">
                
                <!-- name -->
                <v-expansion-panel-header class="grey lighten-3 mb-5">
                    {{ filterProduct.name}}
                </v-expansion-panel-header>
                
                <v-expansion-panel-content class="my-0">
                    <div
                        v-for="(item, index) in filterProduct.types"
                        :key="index"
                    >
                        <v-checkbox
                            v-model="item.typeValue"
                            :label="item.title"
                            @click="query(filterProduct, index)"
                            class="my-n2"
                        ></v-checkbox>
                    </div>
                </v-expansion-panel-content>

            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
export default {
    data() {
        return {
            panel: [0, 1, 2, 3, 4, 5, 6],
            queryObj: [],
            params: [],
            filters: [
                {
                    name: 'Product Types',
                    myKey: 'product_type',
                    types: [
                        { title: 'Arch Bed(11)', typeValue: false, id: 1 },
                        { title: 'Bedroom Set(48)', typeValue: false, id: 2 },
                        { title: 'Bookcase Bed(31)', typeValue: false, id: 3 },
                        { title: 'Bunk Bed(39)', typeValue: false, id: 4 },
                        { title: 'Canopy Bed(20)', typeValue: false, id: 5 },
                        { title: 'Captain Bed(1)', typeValue: false, id: 6 },
                        { title: 'DayBed(8)', typeValue: false, id: 7 },
                        { title: 'Estate Bed(1)', typeValue: false, id: 8 },
                    ],
                },
                {
                    name: 'Bed Size',
                    myKey: 'bed_size_measure',
                    types: [
                        {
                            title: 'California King (600)',
                            typeValue: false,
                            id: 9,
                        },
                        { title: 'Full (457)', typeValue: false, id: 10 },
                        {
                            title: 'Full Over Full (4)',
                            typeValue: false,
                            id: 11,
                        },
                        { title: 'King (1368)', typeValue: false, id: 12 },
                        { title: 'Queen (1422)', typeValue: false, id: 13 },
                        { title: 'Twin (405)', typeValue: false, id: 14 },
                        {
                            title: 'Twin Over Full (12)',
                            typeValue: false,
                            id: 15,
                        },
                        {
                            title: 'Twin Over Twin (17)',
                            typeValue: false,
                            id: 16,
                        },
                    ],
                },
                {
                    name: 'Price',
                    myKey: 'price',
                    types: [
                        { title: '$0 - $500 (15)', typeValue: false, id: 17 },
                        {
                            title: '$500 - $1,000 (698)',
                            typeValue: false,
                            id: 18,
                        },
                        {
                            title: '$1,000 - $1,500 (576)',
                            typeValue: false,
                            id: 19,
                        },
                        {
                            title: '$1,500 - $2,000 (226)',
                            typeValue: false,
                            id: 20,
                        },
                        {
                            title: '$2,000 and above (539)',
                            typeValue: false,
                            id: 21,
                        },
                    ],
                },
                {
                    name: 'Style',
                    myKey: 'style',
                    types: [
                        { title: 'Casual (121)', typeValue: false, id: 22 },
                        { title: 'Coastal (9)', typeValue: false, id: 23 },
                        {
                            title: 'Contemporary (496)',
                            typeValue: false,
                            id: 24,
                        },
                        { title: 'Cottage (20)', typeValue: false, id: 25 },
                        { title: 'Country (3)', typeValue: false, id: 26 },
                        { title: 'Farmhouse (12)', typeValue: false, id: 27 },
                        { title: 'French (16)', typeValue: false, id: 28 },
                        { title: 'Glam (4)', typeValue: false, id: 29 },
                    ],
                },
                {
                    name: 'Color',
                    myKey: 'color',
                    types: [
                        { title: 'Beige (111)', typeValue: false, id: 30 },
                        { title: 'Black (140)', typeValue: false, id: 31 },
                        { title: 'Blue (7)', typeValue: false, id: 32 },
                        { title: 'Bronze (1)', typeValue: false, id: 33 },
                        { title: 'Brown (876)', typeValue: false, id: 34 },
                        { title: 'Cream (63)', typeValue: false, id: 35 },
                        { title: 'Gold (16)', typeValue: false, id: 36 },
                        { title: 'Gray (312)', typeValue: false, id: 37 },
                    ],
                },
                {
                    name: 'Material',
                    myKey: 'material',
                    types: [
                        {
                            title: 'Bonded Leather (1)',
                            typeValue: false,
                            id: 38,
                        },
                        { title: 'Brass (1)', typeValue: false, id: 39 },
                        { title: 'Fabric (46)', typeValue: false, id: 40 },
                        { title: 'Faux Leather (2)', typeValue: false, id: 41 },
                        { title: 'Glass (28)', typeValue: false, id: 42 },
                        { title: 'Iron (2)', typeValue: false, id: 43 },
                        { title: 'Leather (11)', typeValue: false, id: 44 },
                        { title: 'Metal (14)', typeValue: false, id: 45 },
                    ],
                },
                {
                    name: 'Brand',
                    myKey: 'brands',
                    types: [
                        { title: 'A-America (20)', typeValue: false, id: 46 },
                        { title: 'A.R.T. (42)', typeValue: false, id: 47 },
                        { title: 'ACME (136)', typeValue: false, id: 48 },
                        { title: 'Alpine (32)', typeValue: false, id: 49 },
                        {
                            title: 'American Drew (19)',
                            typeValue: false,
                            id: 50,
                        },
                        {
                            title: 'American Woodcrafters (6)',
                            typeValue: false,
                            id: 51,
                        },
                        {
                            title: 'Artisan & Post (24)',
                            typeValue: false,
                            id: 52,
                        },
                        { title: 'Ashley (168)', typeValue: false, id: 53 },
                    ],
                },
            ],
        }
    },
    methods: {
        query(filter, i) {
            const arr = filter.types.filter((val) => {
                return val.typeValue === true
            })
            this.queryObj[filter.myKey] = arr.map((val) => val.id)
            this.$router.push({ query: this.queryObj })
        },
    },
}
</script>