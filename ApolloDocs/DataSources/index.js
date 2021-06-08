const { ApolloServer, gql } = require("apollo-server");
const CountriesAPI = require("./dataSource/api");

const typeDefs = gql`
    type Country {
        name: String!
        alpha2Code: String
        alpha3Code: String
        altSpellings: [String]
        area: Float
        borders: [String]
        callingCodes: [String]
        capital: String
        cioc: String
        currencies: [Curruncy]
        demonym: String
        flag: String
        gini: Float
        languages: [Language]
        latlng: [Float]
        nativeName: String
        numericCode: String
        population: Int
        region: String
        regionalBlocs: Regional
        subregion: String
        topLevelDomain: [String]
        translations: Transaction
    }

    type Curruncy {
        code: String
        name: String
        Symbol: String
    }

    type Language {
        iso639_1: String
        iso639_2: String
        name: String
        nativeName: String
    }

    type Regional {
        acronym: String
        name: String
    }

    type Transaction {
        de: String
        es: String
        fr: String
        ja: String
        it: String
        br: String
        pt: String
        nl: String
        hr: String
        fa: String
    }

    type Query {
        allCountries: [Country!]!
        countryByName(name: String!, first: Int): Country!
    }
`;

const resolvers = {
    Query: {
        allCountries: async (_, __, { dataSources }) => {
            return dataSources.countriesAPI.getAllCountries();
        },
        countryByName: async (_, { name, first }, { dataSources }) => {
            let countryData = dataSources.countriesAPI.getCountryByName(name);
            return countryData.then((data) => data[first]);
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
