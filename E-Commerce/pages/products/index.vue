<template>
    <div class="container mt-5">

        <!-- Categories -->
        <div v-for="(product, i) in items" :key="i">
            <v-card class="rounded-0 mt-10" elevation="5">

                <!-- name -->
                <div class="row mx-5 py-5">
                    <h1>{{ i }}</h1>
                    <v-btn color="primary" class="rounded-0 ml-auto" :to="`/products/${i}`">View all</v-btn>
                </div>
                <v-divider></v-divider>

                <!-- slider -->
                <v-slide-group>
                    <v-slide-item v-for="prod in product" :key="prod.name">
                        <v-card class="ma-4" :to="prod.path">
                            <img
                                :src="prod.src"
                                :alt="prod.name"
                                max-height="220"
                                width="200"
                            />
                            <v-card-text class="text-center"><b>{{ prod.name }}</b></v-card-text>
                        </v-card>
                    </v-slide-item>
                </v-slide-group>
            
                <!-- brands -->
                <div class="row ma-auto">
                    <div v-for="n in brands[i]" :key="n" class="mx-auto mb-10">
                        <v-card
                            color="#909090"
                            elevation="5"
                            rounded="md"
                            height="150"
                            width="200"
                        >
                            <v-card-subtitle
                                class="headline mx-auto pt-15"
                                align="middle"
                            ><b>{{ n }}</b></v-card-subtitle>
                        </v-card>
                    </div>
                </div>

            </v-card>            
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        items: {
            Fashion: [
                {
                    name: 'Clothing',
                    src:
                        'https://images-na.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/SS21Flip/PC_Changes/SBCMens/Clothing._SY530_QL85_.jpg',
                    path: '/products/fashion/clothing',
                },
                {
                    name: 'Footware',
                    src:
                        'https://images-na.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/SS21Flip/PC_Changes/SBCMens/Footwear._SY530_QL85_.jpg',
                    path: '/products/fashion/footware',
                },
                {
                    name: 'Backpacks',
                    src:
                        'https://images-na.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/SS21Flip/PC_Changes/Backpacks--more._SY530_QL85_.jpg',
                    path: '/products/fashion/backpacks',
                },
                {
                    name: 'Watches',
                    src:
                        'https://images-na.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/SS21Flip/PC_Changes/SBCMens/watcjes._SY530_QL85_.jpg',
                    path: '/products/fashion/watches',
                },
                {
                    name: 'Sunglasses',
                    src:
                        'https://images-na.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/SS21Flip/PC_Changes/SBCMens/sunglasses._SY530_QL85_.jpg',
                    path: '/products/fashion/sunglasses',
                },
                {
                    name: 'Jewellwery',
                    src:
                        'https://images-na.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/SS21Flip/PC_Changes/AFExploremore/gold-and-diamond-jewellery._SY530_QL85_.jpg',
                    path: '/products/fashion/jewellwery',
                },
                {
                    name: 'Luggage',
                    src:
                        'https://images-na.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/SS21Flip/PC_Changes/AFExploremore/Travel-luggage._SY530_QL85_.jpg',
                    path: '/products/fashion/laggage',
                },
            ],
            Mobile: [
                {
                    name: 'Apple',
                    src:
                        'data:image/jpeg;base64,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',
                    path: '/products/mobile/apple',
                },
                {
                    name: 'Samsung',
                    src:
                        'https://images-na.ssl-images-amazon.com/images/G/31/img21/Wireless/CatPage/6C/D20819578_WL_CatPage_NewWidget__hex_8._SY530_QL85_.jpg',
                    path: '/products/mobile/samsung',
                },
                {
                    name: 'One Plus',
                    src:
                        'https://images-na.ssl-images-amazon.com/images/G/31/img20/Wireless/Cnnjpp/OnePlus_9Series/1/D20968569_WLD_ItelVision1Pro_SBCs_hex._SY530_QL85_.jpg',
                    path: '/products/mobile/oneplus',
                },
                {
                    name: 'Mi',
                    src:
                        'https://images-na.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/Hex_Card/D23225499_IN_WLME_Hex_Cards_SBCs-hex_23._SY530_QL85_.jpg',
                    path: '/products/mobile/mi',
                },
                {
                    name: 'Realme',
                    src:
                        'https://images-na.ssl-images-amazon.com/images/G/31/img21/Wireless/RealMe/D23379228_Realme-Design_SIM_hex._SY530_QL85_.jpg',
                    path: '/products/mobile/realme',
                },
                {
                    name: 'Oppo',
                    src:
                        'https://images-na.ssl-images-amazon.com/images/G/31/img21/Wireless/CatPage/6C/D20819578_WL_CatPage_NewWidget_SBCs-hex_01._SY530_QL85_.jpg',
                    path: '/products/mobile/oppo',
                },
                {
                    name: 'Vivo',
                    src:
                        'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/vivo/april/BAU/cat/D22133581_WL_VIVO_BAU_APRIL21_vivo-hex-cards_180x220_3._SY250_CB655656192_.jpg',
                    path: '/products/mobile/vivo',
                },
            ],
            Computer: [
                {
                    name: 'Apple',
                    src: 'https://rukminim1.flixcart.com/image/312/312/khdqnbk0/computer/5/d/e/apple-original-imafxfyqkdfxqjab.jpeg?q=70',
                    path: '/products/laptop/apple',
                },
                {
                    name: 'Asus',
                    src:'https://rukminim1.flixcart.com/image/312/312/kjlrb0w0/computer/a/k/b/asus-original-imafz522ntfk9hwx.jpeg?q=70',
                    path: '/products/laptop/asus',
                },
                {
                    name: 'Acer',
                    src: 'https://rukminim1.flixcart.com/image/312/312/kfu0h3k0/computer/9/5/d/acer-na-thin-and-light-laptop-original-imafw7h8awgg8cfg.jpeg?q=70',
                    path: '/products/laptop/acer',
                },
                {
                    name: 'HP',
                    src: 'https://rukminim1.flixcart.com/image/312/312/kk2wl8w0/computer/z/u/5/hp-original-imafzgdgcbtxvjka.jpeg?q=70',
                    path: '/products/laptop/hp',
                },
                {
                    name: 'Dell',
                    src: 'https://rukminim1.flixcart.com/image/312/312/kirr24w0/computer/z/y/9/dell-na-laptop-original-imafyhm5jgmh4jts.jpeg?q=70',
                    path: '/products/laptop/dell',
                },
                {
                    name: 'Lenovo',
                    src: 'https://rukminim1.flixcart.com/image/312/312/kffq2kw0/computer/p/y/p/lenovo-original-imafvw5q9v68wgfe.jpeg?q=70',
                    path: '/products/laptop/lenovo',
                },
                {
                    name: 'LG',
                    src: 'https://rukminim1.flixcart.com/image/312/312/kfeamq80/computer/d/x/v/lg-original-imafvv2v2mhtzhht.jpeg?q=70',
                    path: '/products/laptop/lg',
                },
            ],
        },
        brands: {
            Fashion: [ "Lavi's", 'Peter England', 'BIBA', 'Vero Moda', 'asian', 'Sparx', 'The Body Shop', 'fastrack', 'Skybags', 'American Tourister'],
            Mobile: [ 'Apple', 'One Plus', 'Samsung', 'Xiaomi', 'Realme', 'Oppo', 'Vivo', 'Gionee', 'LG', 'LAVA'],
            Computer: [ 'Apple', 'Dell', 'Lenovo', 'Asus', 'Acer', 'LG', 'MSI', 'Microshoft', 'HP', 'Xiaomi'],
        }
    }),
}
</script>

<style>
</style>