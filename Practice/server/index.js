const { ApolloServer } = require("apollo-server");
const { mainCards, animals, categories } = require("./db");
const typeDefs = require("./schema");
const Query = require("./resolvers/Query");
const Animal = require("./resolvers/Animal");
const Category = require("./resolvers/Category");
const Mutation = require("./resolvers/Mutation");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Animal,
        Category,
        Mutation
    },
    context: {
        mainCards,
        animals,
        categories
    }
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
