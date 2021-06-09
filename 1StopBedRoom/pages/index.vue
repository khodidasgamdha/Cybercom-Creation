  
<template>
    <div>
        <Carousal />
        <ImageSlider />
        <Features />
        <ProductSlider />
        <ProductSet />
        <ProductSale
            :card-data="saleCardData.bedroom"
            title="Bedroom Sets on Sale"
        />
        <ProductSale
            :card-data="saleCardData.living"
            title="Living Room Sets on Sale"
        />
        <ProductSale
            :card-data="saleCardData.dining"
            title="Dining Sets on Sale"
        />
        <ProductSale
            :card-data="saleCardData.office"
            title="Office Sets on Sale"
        />
        <ProductSale
            :card-data="saleCardData.barNGame"
            title="Bar & Game Sets on Sale"
        />
    </div>
</template>

<script>
import Carousal from '~/components/Home/Carousal'
import ImageSlider from '~/components/Home/ImageSlider'
import Features from '~/components/Home/Features'
import ProductSale from '~/components/Home/ProductSale'
import ProductSet from '~/components/Home/ProductSet'
import ProductSlider from '~/components/Home/ProductSlider'

export default {
    components: { 
        Carousal, 
        ImageSlider, 
        Features, 
        ProductSlider, 
        ProductSet, 
        ProductSale, 
    },
    data() {
        return {
            saleCardData: {
                bedroom: [
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/b/7/b720-31-36-46-58-56-97-92-q326.jpg',
                        title: 'Birlanny Silver Upholstered Panel Bedroom Set',
                        subtitle: 'By Signature Design by Ashley',
                        price: '$1,963.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/b/7/b733-31-36-46-78-76-99-92_4.jpg',
                        title: 'Lettner Light Gray Sleigh Bedroom Set',
                        subtitle: 'By Signature Design by Ashley',
                        price: '$1,229.42',
                        originalPrice: '$1,758.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/b/6/b647-31-36-46-78-56-97-91-q236_1_1.jpg',
                        title: 'Bolanburg White Louvered Panel Bedroom Set',
                        subtitle: 'By Signature Design by Ashley',
                        price: '$1,236.96 ',
                        originalPrice: '$1,610.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/b/7/b750-31-36-46-58-56-97-93_9_1_1.jpg',
                        title: 'Cassimore Pearl Silver Panel Bedroom Set',
                        subtitle: 'By Signature Design by Ashley',
                        price: '$2,568.58',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/m/i/mirage-panel-bedroom-set_qb13210259.jpg',
                        title: 'Mirage Panel Bedroom Set',
                        subtitle: 'By Liberty',
                        price: '$1,186.44',
                        originalPrice: '$2,419.50',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/b/5/b553-49tb-78-76-79-193_3.jpg',
                        title: 'North Shore Sleigh Bedroom Set',
                        subtitle: 'By Signature Design by Ashley',
                        price: '$1,611.90',
                        originalPrice: '$1,354.00',
                    },
                ],
                living: [
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/7/0/70509-38-35-25-t374.jpg',
                        title: 'Accrington Granite Living Room Set',
                        subtitle: 'By Signature Design by Ashley',
                        price: '$1,047.63',
                        originalPrice: '$1,594.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/m/i/mila-living-room-set-black-_qb13232157.jpg',
                        title: 'Mila Living Room Set (Black)',
                        subtitle: 'By Meridian',
                        price: '$2,613.95',
                        originalPrice: '$3,988.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/7/0/700501-700514-700554-5226aa_rs1_4_art2019.jpg',
                        title: 'Morgan Rose Accolade Living Room Set',
                        subtitle: 'By A.R.T.',
                        price: '$2,259.60',
                        originalPrice: '$6,171.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/8/3/8325gry-1_8325gry-2_8325gry-3_3_homelegance2019.jpg',
                        title: 'Greeley Double Reclining Living Room Set',
                        subtitle: 'By Homelegance',
                        price: '$1,727.25',
                        originalPrice: '$2,284.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/s/i/sisseton-light-gray-living-room-set_qb13272499.jpg',
                        title: 'Sisseton Light Gray Living Room Set',
                        subtitle: ' By Furniture of America ',
                        price: '$3,200.98',
                        originalPrice: '$5,784.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/c/m/cm6717bk_1.jpg',
                        title: 'Pierre Black Living Room Set',
                        subtitle: ' By Furniture of America ',
                        price: '$1,379.89',
                        originalPrice: '$1,648.00',
                    },
                ],
                dining: [
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/l/i/liberty-furniture-mirage-7-piece-trestle-dining-table-set-in-wirebrushed-white_qb13261887.jpg',
                        title: 'Liberty Furniture Mirage 7-Piece Trestle Dining Table Set in Wirebrushed White',
                        subtitle: ' By Liberty ',
                        price: '$1,478.69',
                        originalPrice: '$3,316.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/2/6/262-cd_liberty.jpg',
                        title: 'Havenbrook Rustic Russet Trestle Dining Room Set',
                        subtitle: 'By Liberty',
                        price: '$1,535.17',
                        originalPrice: '$1,829.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/1/9/1958-96-1958-50_homelegance.jpg',
                        title: 'Bevelle Silver Extendable Dining Room Set',
                        subtitle: ' By Homelegance ',
                        price: '$1,471.88',
                        originalPrice: '$1,868.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/1/4/1407_1.jpg',
                        title: 'Meridian Furniture Pierre 5pcs Dining Room Set in Rich Gold Stainless Steel',
                        subtitle: ' By Meridian ',
                        price: '$1,587.35',
                        originalPrice: '$2,393.60',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/D/4/D4126DT-D4126DC-set-1.jpg',
                        title: 'D4126 Dining Room Set (Oak and Walnut)',
                        subtitle: ' By Global Furniture USA ',
                        price: '$1,240.17',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/1/9/1928_set_4_1.jpg',
                        title: 'Celandine Subtle Pearlized Extendable Dining Room Set',
                        subtitle: ' By Homelegance ',
                        price: '$993.06',
                        originalPrice: '$1,280.00',
                    },
                ],
                office: [
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/a/l/allyson-park-wirebrushed-white-executive-home-office-set_qb1270325.jpg',
                        title: 'Allyson Park Wirebrushed White Executive Home Office Set',
                        subtitle: ' By Liberty ',
                        price: '$2,023.80',
                        originalPrice: '$2,858.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/2/4/244-ho-3dh.jpg',
                        title: 'Magnolia Manor Antique White Home Office Set',
                        subtitle: 'By Liberty',
                        price: '$1,590.24',
                        originalPrice: '$2,054.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/9/2/92396_92398_92399_acme2018_3.jpg',
                        title: 'Bob Weathered Oak and Black Home Office Set',
                        subtitle: ' By ACME ',
                        price: '$338.25',
                        originalPrice: '$450.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/b/e/bestar-solay-desk-29851-69-chocolate-room_bestar201711_1.jpg',
                        title: 'Solay Chocolate L Shaped Desk with Lateral File and Bookcase',
                        subtitle: ' By Bestar ',
                        price: '$884.52',
                        originalPrice: '$1,219.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/b/e/bestar-ridgeley-u-desk-chocolate-white-52850-31-room_bestar201711_1.jpg',
                        title: 'Ridgeley Dark Chocolate and White Chocolate U Shaped Desk with Lateral File and Bookcase',
                        subtitle: ' By Bestar ',
                        price: '$1,284.50',
                        originalPrice: '$1,759.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/g/r/grand-classic-executive-home-office-set_qb13231981.jpg',
                        title: 'Grand Classic Executive Home Office Set',
                        subtitle: ' By Aspenhome ',
                        price: '$2,110.15',
                        originalPrice: '$2,469.03',
                    },
                ],
                barNGame: [
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/c/m/cm3367bt_2.jpg',
                        title: 'Foskey Antique Black Round Bar Set',
                        subtitle: ' By Furniture of America ',
                        price: '$1,186.84',
                        originalPrice: '$1,198.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/n/i/nirav-3-piece-bar-set_qb13263103.jpg',
                        title: 'Nirav 3-Piece Bar Set',
                        subtitle: ' By ACME ',
                        price: '$398.56',
                        originalPrice: '$753.03',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/7/1/71990-71992_new_acme2018_1.jpg',
                        title: 'Jodie Rustic Oak and Antique Black Bar Set',
                        subtitle: ' By ACME ',
                        price: '$453.12',
                        originalPrice: '$1,030.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/1/0/104873-100295_1.jpg',
                        title: 'Chrome Bar Room Set',
                        subtitle: ' By Coaster ',
                        price: '$707.80',
                        originalPrice: '$1,148.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/0/7/07675-76_acme2018_1.jpg',
                        title: 'Lugano Dark Walnut Bar Set',
                        subtitle: ' By ACME ',
                        price: '$946.28',
                        originalPrice: ' $1,104.00',
                    },
                    {
                        src: 'https://cdn.1stopbedrooms.com/media/catalog/product/cache/1/thumbnail/230x160/667cc8115599233893af4c0b7918c94e/p/u/pure-modern-soft-moonstone-everywhere-bar-table-set_qb13272851_8.jpg',
                        title: 'Pure Modern Soft Moonstone Everywhere Bar Table Set',
                        subtitle: ' By Parker House ',
                        price: '$1,282.54',
                        originalPrice: '$1,354.00',
                    },
                ],
            },
        }
    },
}
</script>