<template>
    <div>
        <!-- 1st header -->
        <v-system-bar color="white" height="45" class="px-16 pt-3" fixed>
            <p class="subtitle-1 black--text">
                SPRING INTO SAVINGS! SAVE UP TO 75% + FREE HOME DELIVERY
            </p>
            <v-spacer></v-spacer>
            <p class="subtitle-1">
                Question? Non-commissioned consultants are here to help!
            </p>
            <a
                href="tel:877-958-9203"
                class="subtitle-1 text-decoration-none mt-n3 ml-2"
            >
                <v-icon color="orange" size="32">mdi-cellphone-android</v-icon>
                <span class="primary--text">877-958-9203</span>
            </a>
        </v-system-bar>

        <!-- 2nd header -->
        <v-row class="secondHeader mt-10 px-14 justify-space-around">

            <!-- image -->
            <v-col md="3">
                <nuxt-link to="/">
                    <v-img
                        width="200"
                        class="mt-2"
                        src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/account-logo.png"
                    ></v-img>
                </nuxt-link>
            </v-col>

            <!-- search -->
            <v-col md="4">
                <p class=" white--text body-2">
                    <n-link to="/">
                        <span class="caption text-decoration-underline white--text">
                            36 Month Financing*
                        </span>
                    </n-link>
                    <n-link to="/" class="ml-8">
                        <span class="caption text-decoration-underline white--text">
                            Track My Order
                        </span>
                    </n-link>
                </p>

                <v-text-field
                    label="Search Furniture"
                    rounded
                    solo
                    dense
                    append-icon="mdi-search-web"
                >
                </v-text-field>
            </v-col>

            <!-- other -->
            <v-col md="4">
                <span class="caption white--text">FREE HOME DELIVERY AVAILABLE NATIONWIDE*</span>
                <div class="mt-3">

                    <!-- review -->
                    <img 
                        src="https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/1sb-general/1sb-testimonials-stars.png?va49360aa" 
                        alt="review"
                    >

                    <!-- sign in -->
                    <v-btn to="/" text class="ml-5">
                        <v-icon color="white" large>mdi-account</v-icon>
                        <span class="white--text text-capitalize ml-2">Sign In</span>
                    </v-btn>

                    <!-- cart -->
                    <v-btn to="/" text class="ml-5">
                        <v-icon color="white" large>mdi-cart</v-icon>
                        <span class="white--text text-capitalize ml-2">Cart</span>
                    </v-btn>
                    
                </div>
            </v-col>
        </v-row>

        <!-- 3rd header -->
        <v-app-bar color="thirdHeader" class="px-8" height="45">
            <div v-for="(link, index) in links" :key="index">
                <v-menu rounded="0" open-on-hover offset-y>

                    <!-- main links -->
                    <template #activator="{ on, attrs }">
                        <v-btn
                            text
                            v-bind="attrs"
                            tile
                            height="45"
                            class="onHoverBtn"
                            v-on="on"
                        >
                            <nuxt-link :to="`/${link.link}`" class="text-decoration-none">
                                {{ link.linkTitle }}
                            </nuxt-link>
                        </v-btn>
                    </template>

                    <!-- sublinks -->
                    <v-card max-width="500" flat tile>
                        <v-row no-gutters class="pl-3 pr-3">
                            <v-col
                                v-for="(item, i) in subCategoryLinks[link.link]"
                                :key="i"
                                :cols="subCategoryLinks[link.link].length > 10 ? '6' : '12'"
                            >
                                <v-btn text tile>
                                    <nuxt-link
                                        :to="`/${link.link}/'${item.link}`"
                                        class="black--text caption text-decoration-none"
                                    >
                                        {{ item.linkTitle }}
                                    </nuxt-link>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>

                </v-menu>
            </div>
        </v-app-bar>

        <!-- image -->
        <v-img
            src="https://cdn.1stopbedrooms.com/media/bannerslider/m/e/memorial-day-2021-1stopbedrooms-int_240521.png"
            class="deep-orange lighten-1"
        ></v-img>

        <!-- go to top -->
        <v-main>
            <v-container fluid>
                <v-fab-transition>
                    <v-btn
                        color="grey lighten-2"
                        fixed
                        bottom
                        right
                        fab
                        @click="
                            $vuetify.goTo(0, {
                                easing: 'easeInCubic',
                                duration: '1000',
                            })
                        "
                    >
                        <v-icon class="mt-2" large>mdi-apple-keyboard-control</v-icon>
                    </v-btn>
                </v-fab-transition>
            </v-container>
        </v-main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { linkTitle: 'Bedroom', link: 'bedroom' },
                { linkTitle: 'Living Room', link: 'living' },
                { linkTitle: 'Dining & Kitchen', link: 'dining' },
                { linkTitle: 'Office', link: 'office' },
                { linkTitle: 'Bar & Game Room', link: 'barfurniture' },
                { linkTitle: 'Accessories', link: 'accessories' },
                { linkTitle: 'Outdoor', link: 'outdoors' },
                { linkTitle: 'Shop By Brand', link: 'brands' },
            ],
            subCategoryLinks: {
                bedroom: [
                    { linkTitle: 'Bedroom Sets', link: 'bedroom-sets' },
                    { linkTitle: 'Beds', link: 'beds' },
                    { linkTitle: 'Nightstands', link: 'nightstands' },
                    { linkTitle: 'Dressers', link: 'dressers' },
                    { linkTitle: 'Dresser Mirrors', link: 'mirrors' },
                    { linkTitle: 'Chests', link: 'chests' },
                    { linkTitle: 'Bedroom Benches', link: 'benches' },
                    { linkTitle: 'Bed Frames & Headboards', link: 'frames' },
                    {
                        linkTitle: 'Armoires and Wardrobes',
                        link: 'armoires-n-wardrobes',
                    },
                    { linkTitle: 'Bedroom Vanities', link: 'vanities' },
                    { linkTitle: 'Media Chests', link: 'media-chests' },
                    { linkTitle: 'Jewelry Armoires', link: 'jewelry-armoires' },
                    {
                        linkTitle: 'Day Beds and Futons',
                        link: 'day-beds-n-futons',
                    },
                    {
                        linkTitle: 'Kids and Youth Furniture',
                        link: 'kids-youth-furniture',
                    },
                    { linkTitle: 'Mattresses', link: 'mattresses' },
                    { linkTitle: 'Pillows', link: 'pillows' },
                    {
                        linkTitle: 'Bedding and Comforter Sets',
                        link: 'bedding-n-comforter-sets',
                    },
                ],
                living: [
                    { linkTitle: 'Living Room Sets', link: 'living-room-sets' },
                    { linkTitle: 'Sectionals', link: 'sectionals' },
                    { linkTitle: 'Sofas', link: 'sofas' },
                    { linkTitle: 'Loveseats', link: 'loveseats' },
                    {
                        linkTitle: 'Reclining Loveseats',
                        link: 'reclining-loveseats',
                    },
                    { linkTitle: 'Sleeper Sofas', link: 'sleeper-sofas' },
                    {
                        linkTitle: 'Recliners and Rockers',
                        link: 'recliners-n-rockers',
                    },
                    { linkTitle: 'Theater Seating', link: 'theater-seating' },
                    { linkTitle: 'Chairs', link: 'chairs' },
                    { linkTitle: 'Accent Chairs', link: 'accent-chairs' },
                    { linkTitle: 'Chaises', link: 'chaises' },
                    { linkTitle: 'Ottomans', link: 'ottomans' },
                    { linkTitle: 'Futons', link: 'futons' },
                    {
                        linkTitle: 'Leather Furniture',
                        link: 'leather-furniture',
                    },
                    {
                        linkTitle: 'Occasional Table Sets',
                        link: 'occasional-table-sets',
                    },
                    { linkTitle: 'Sofa Tables', link: 'sofa-tables' },
                    {
                        linkTitle: 'Accent Chests and Cabinets',
                        link: 'accent-chests-n-cabinets',
                    },
                    { linkTitle: 'Console Tables', link: 'console-tables' },
                    {
                        linkTitle: 'Coffee and Cocktail Tables',
                        link: 'coffe-n-cooktail-tables',
                    },
                    { linkTitle: 'End Tables', link: 'end-tables' },
                    { linkTitle: 'Accent Tables', link: 'accent-tables' },
                    { linkTitle: 'Side Tables', link: 'side-tables' },
                    {
                        linkTitle: 'Rugs and Accessories',
                        link: 'rugs-n-accessories',
                    },
                    {
                        linkTitle: 'Entertainment Centers and Walls',
                        link: 'entertainment-center-n-walls',
                    },
                    {
                        linkTitle: 'TV Stands and TV Consoles',
                        link: 'tv-stands-n-tv-consoles',
                    },
                    {
                        linkTitle: 'CD and DVD Media Storage',
                        link: 'cd-n-dvd-media-storage',
                    },
                ],
                dining: [
                    { linkTitle: 'Dining Sets', link: 'dining-sets' },
                    { linkTitle: 'Dinette Sets', link: 'dinette-sets' },
                    { linkTitle: 'Dining Chairs', link: 'dining-chairs' },
                    { linkTitle: 'Dining Tables', link: 'dining-tables' },
                    { linkTitle: "Baker's Racks", link: 'banker-racks' },
                    { linkTitle: 'Dining Benches', link: 'dining-benches' },
                    { linkTitle: 'China Cabinets', link: 'china-cabinets' },
                    {
                        linkTitle: 'Curios & Displays',
                        link: 'curios-n-displays',
                    },
                    {
                        linkTitle: 'Kitchen Island, Kitchen Cart',
                        link: 'kitchen-island-cart',
                    },
                    {
                        linkTitle: 'Servers, Sideboards & Buffets',
                        link: 'servers-sideboards-buffets',
                    },
                ],
                office: [
                    { linkTitle: 'Home Office Sets', link: 'home-office-sets' },
                    { linkTitle: 'Office Chairs', link: 'office-chairs' },
                    { linkTitle: 'Desks & Hutches', link: 'desks-n-hutches' },
                    {
                        linkTitle: 'Modular Office Furniture',
                        link: 'modular-office-furniture',
                    },
                    { linkTitle: 'Conference Room', link: 'conference-room' },
                    {
                        linkTitle: 'Filing Cabinets and Storage',
                        link: 'filing-cabinets-n-storage',
                    },
                    {
                        linkTitle: 'Bookcases, Book Shelves',
                        link: 'bookcases-book-shelves',
                    },
                    {
                        linkTitle: 'Office Accessories',
                        link: 'office-accessories',
                    },
                    { linkTitle: 'Miscellaneous', link: 'miscellaneous' },
                ],
                barfurniture: [
                    { linkTitle: 'Home Bar Sets', link: 'home-bar-sets' },
                    {
                        linkTitle: 'Bistro and Bar Table Sets',
                        link: 'bistro-n-bar-table-sets',
                    },
                    { linkTitle: 'Game Table Sets', link: 'game-table-sets' },
                    {
                        linkTitle: 'Bar Tables and Pub Tables',
                        link: 'bar-tables-n-pub-tables',
                    },
                    { linkTitle: 'Barstools', link: 'barstools' },
                    { linkTitle: 'Wine Racks', link: 'wine-racks' },
                    { linkTitle: 'Game Tables', link: 'game-tables' },
                    { linkTitle: 'Game Room Chairs', link: 'game-room-chairs' },
                    {
                        linkTitle: 'Bar and Wine Cabinets',
                        link: 'bar-n-wine-cabinets',
                    },
                ],
                accessories: [
                    { linkTitle: 'Rugs', link: 'rugs' },
                    { linkTitle: 'Wall Art', link: 'wall-art' },
                    {
                        linkTitle: 'Accent and Storage Benches',
                        link: 'accent-n-storge-benches',
                    },
                    { linkTitle: 'Accent Mirrors', link: 'accent mirrors' },
                    { linkTitle: 'Curios', link: 'curios' },
                    {
                        linkTitle: 'Pillows and Throws',
                        link: 'pillows-n-throws',
                    },
                    {
                        linkTitle: 'Decorative Accessories',
                        link: 'decorative-accessories',
                    },
                    {
                        linkTitle: 'Entryway Furniture',
                        link: 'entryway-furniture',
                    },
                    {
                        linkTitle: 'Storage and Organization',
                        link: 'storage-n-organization',
                    },
                    { linkTitle: 'Etageres', link: 'etageres' },
                    { linkTitle: 'Clocks', link: 'clocks' },
                    {
                        linkTitle: 'Artificial Plants',
                        link: 'artificial-plants',
                    },
                    { linkTitle: 'Picture Frames', link: 'picture-frames' },
                    { linkTitle: 'Lighting', link: 'lighting' },
                    {
                        linkTitle: 'Desk and Buffet Lamps',
                        link: 'desk-n-buffet-lamps',
                    },
                    { linkTitle: 'Lamp Sets', link: 'lamp-sets' },
                    { linkTitle: 'Floor Lamps', link: 'floor-lamps' },
                    { linkTitle: 'Pendant Lighting', link: 'pendant-lighting' },
                    { linkTitle: 'Wall Sconces', link: 'wall-sconeces' },
                    {
                        linkTitle: 'Bathroom Furniture',
                        link: 'bathroom-furniture',
                    },
                ],
                outdoors: [
                    {
                        linkTitle: 'Outdoor Conversation Sets',
                        link: 'outdoor-conversation-sets',
                    },
                    {
                        linkTitle: 'Outdoor Dining Furniture',
                        link: 'outdoor-dining-furniture',
                    },
                    { linkTitle: 'Outdoor Tables', link: 'outdoor-tables' },
                    { linkTitle: 'Outdoor Chairs', link: 'outdoor-chairs' },
                    {
                        linkTitle: 'Outdoor Sofas & Loveseats',
                        link: 'outdoor-sofas-n-loveseats',
                    },
                    {
                        linkTitle: 'Outdoor Chaise Loungers',
                        link: 'outdoor-chaise-loungers',
                    },
                    {
                        linkTitle: 'Outdoor Bar Furniture',
                        link: 'outdoor-bar-furniture',
                    },
                    {
                        linkTitle: 'Outdoor Accessories',
                        link: 'outdoor-accessories',
                    },
                    {
                        linkTitle: 'Outdoor Fireplaces',
                        link: 'outdoor-fireplaces',
                    },
                    { linkTitle: 'Outdoor Benches', link: 'outdoor-benches' },
                    { linkTitle: 'Outdoor Ottomans', link: 'outdoor-ottomans' },
                ],
            },
        }
    },
}
</script>
<style scoped>
.onHoverBtn:hover {
    background-color: white;
}
a {
    color: white;
}
a:hover {
    color: #003980;
}
.secondHeader {
    background: url("https://cdn.1stopbedrooms.com/skin/frontend/onestopbedrooms/default/images/new/header_img.png?v4b3a5475") 0 0 repeat;
}
.thirdHeader {
    background-color: #003980 !important;
}
</style>