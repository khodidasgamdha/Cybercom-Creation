const { ApolloServer, gql } = require("apollo-server");
const CountriesAPI = require("./dataSource/api");
const saleProducts = require("./dataSource/Home/product-sale-card");
const shopByRoom = require("./dataSource/Home/shop-by-room");
const imageSlider = require("./dataSource/Home/image-slider");
const navbarLinks = require("./dataSource/Home/navbar-link");
const footerLinks = require("./dataSource/Home/footer-link");
const category = require("./dataSource/product-category");
const policy = require("./dataSource/policy");
const brands = require("./dataSource/brands");

const typeDefs = gql`
    type Product {
        sku: String
        similarityScore: Float
        reviewsCount: Int
        reviewsAverage: Float
        price: String
        parent_sku: String
        original_data: OriginalData
        originalPrice: String
        merchant: String
        imageUrl: String
        id: String
        floatPrice: Float
        floatOriginalPrice: Float
        description: String
        categories: [String]
        brand: String
        bbCategories: [String]
    }

    type OriginalData {
        syte_stock: String
        syte_colors: String
        syte_category1: String
        syte_category0: String
        syte_action: String
        Title: String
        Thumbnail_Image_URL: String
        Sort_Order: String
        Size: String
        Shop_The_Room_Image: String
        Sale_Price: String
        SKU: String
        Review_Rating: String
        Review_Count: String
        Promotion: String
        Product_URL: String
        Price: String
        Parent_SKU: String
        Main_Image_URL: String
        In_Stock: String
        Currency: String
        Color: String
        Category: String
        Brand: String
    }

    type CTLProduct {
        lable: String
        ads: [Product!]!
    }

    type SaleProduct {
        title: String
        key: String
        products: [Prod!]!
    }

    type ShopByRoom {
        imgUrl: String
        title: String
        subCategory: [Sublink!]!
    }

    type ImageSlider {
        imgUrl: String
        alt: String
        name: String
        link: String
    }

    type Prod {
        src: String!
        title: String!
        subtitle: String!
        price: String!
        originalPrice: String
    }

    type NavbarLinks {
        linkTitle: String!
        link: String!
        image: String
        info: String
        subCategoryLinks: [Sublink!]!
    }

    type FooterLinks {
        title: String!
        links: [Sublink!]!
    }

    type Sublink {
        linkTitle: String
        link: String
    }

    type Category {
        title: String
        productLinks: [Sublink!]!
        img: String
        category: [ProdCategory!]!
    }

    type ProdCategory {
        src: String
        name: String
    }

    type Policy {
        pageInfo: PageInfo
        content: Content
        design: Design
        metaData: MetaData
    }

    type PageInfo {
        pageTitle: String
        url: String
        status: Boolean
    }

    type Content {
        contentHeading: String
        contentDetails: String
    }

    type Design {
        layout: String
        layout_update_xml: Reference
    }

    type Reference {
        reference: [References]
    }

    type References {
        action: Action
        block: Block
    }

    type Action {
        type: String
        name: String
    }

    type Block {
        action: BlockAction
    }

    type BlockAction {
        block_id: String
    }

    type MetaData {
        keywords: String
        description: String
    }

    type Query {
        personalizationProducts(webId: String!): [Product!]!
        simillarProducts(webId: String!): [Product!]!
        CTLProducts(webId: String!): [CTLProduct!]!
        saleProduct: [SaleProduct!]!
        shopByRoom: [ShopByRoom!]!
        imageSlider: [ImageSlider!]!
        navbarLinks: [NavbarLinks!]!
        footerLinks: [FooterLinks!]!
        category(type: String!): Category!
        policy(url: String!): Policy
        brands: Policy
    }
`;

const resolvers = {
    Query: {
        personalizationProducts: async (_, { webId }, { dataSources }) => {
            return dataSources.countriesAPI.getPersonalizationProducts(webId);
        },
        simillarProducts: async (_, { webId }, { dataSources }) => {
            return dataSources.countriesAPI.getSimillarProducts(webId);
        },
        CTLProducts: async (_, { webId }, { dataSources }) => {
            return dataSources.countriesAPI.getCTLProducts(webId);
        },
        saleProduct: () => {
            return saleProducts;
        },
        shopByRoom: () => {
            return shopByRoom;
        },
        imageSlider: () => {
            return imageSlider;
        },
        navbarLinks: () => {
            return navbarLinks;
        },
        footerLinks: () => {
            return footerLinks;
        },
        category: (_, { type }) => {
            const result = category.find((cat) => {
                return cat.title === type;
            });
            return result;
        },
        policy: (_, { url }) => {
            const result = policy.find((item) => {
                return item.pageInfo.url === url;
            });
            return result;
        },
        brands: () => {
            return brands;
        }
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            countriesAPI: new CountriesAPI(),
        };
    },
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
