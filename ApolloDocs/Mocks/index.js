const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        hello: Int
        resolved: String
    }
`;

const resolvers = {
    Query: {
        resolved: () => "Resolved",
    },
};

const mocks = {
    Int: () => 6,
    Float: () => 22.1,
    String: () => "Hello",
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    mocks,
    mockEntireSchema: false, // To keep the existing resolvers
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
