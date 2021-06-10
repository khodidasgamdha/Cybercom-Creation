const { ApolloServer, gql } = require("apollo-server");
const CountriesAPI = require("./dataSource/api");

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
    
    type Query {
        getPersonalizationProducts: [Product!]!
        getSimillarProducts: [Product!]!
        getCTLProducts: [CTLProduct!]!
    }
`;

const resolvers = {
    Query: {
        getPersonalizationProducts: async (_, __, { dataSources }) => {
            return dataSources.countriesAPI.getPersonalizationProducts();
        },
        getSimillarProducts: async (_, __, { dataSources }) => {
            return dataSources.countriesAPI.getSimillarProducts();
        },
        getCTLProducts: async (_, __, { dataSources }) => {
            return dataSources.countriesAPI.getCTLProducts();
        },
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
