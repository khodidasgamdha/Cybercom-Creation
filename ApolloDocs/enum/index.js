const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    enum AllowedColor {
        RED
        GREEN
        BLUE
    }
    type Query {
        favoriteColor: AllowedColor!
        avatar(borderColor: AllowedColor!): String
    }
`;

const resolvers = {
    AllowedColor: {
        RED: "#f00",
        GREEN: "#0f0",
        BLUE: "#00f",
    },
    Query: {
        favoriteColor: () => "#f00",
        avatar: (_, args) => {
            return args.borderColor;
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
