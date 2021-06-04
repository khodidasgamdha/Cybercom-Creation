const { ApolloServer, gql } = require("apollo-server");
const { GraphQLScalarType, Kind } = require("graphql");

const typeDefs = gql`
    scalar Odd

    type MyType {
        oddValue: Odd
    }

    type Query {
        value(inputValue: Int!): MyType
    }
`;

// Validation function
function oddValue(value) {
    return value % 2 === 1 ? value : null;
}

const resolvers = {
    Odd: new GraphQLScalarType({
        name: "Odd",
        description: "Odd custom scalar type",
        parseValue: oddValue,
        serialize: oddValue,
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return oddValue(parseInt(ast.value, 10));
            }
            return null;
        },
    }),
    Query: {
        value: (_, { inputValue }) => {
            return { oddValue: inputValue };
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => console.log(`server started at ${url}`));
