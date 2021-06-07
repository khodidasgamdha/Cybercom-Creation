const { ApolloServer, gql, SchemaDirectiveVisitor } = require("apollo-server");
const { defaultFieldResolver } = require("graphql");

// Subclass definition for @upper directive logic
class UpperCaseDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const { resolve = defaultFieldResolver } = field;
        field.resolve = async function (...args) {
            const result = await resolve.apply(this, args);
            if (typeof result === "string") {
                return result.toUpperCase();
            }
            return result;
        };
    }
}

// Schema definition (including custom directive)
const typeDefs = gql`
    directive @upper on FIELD_DEFINITION

    type Query {
        hello: String @upper
    }
`;

// Resolvers
const resolvers = {
    Query: {
        hello: () => {
            return "Hello world!";
        },
    },
};

// Add directive to the ApolloServer constructor
const server = new ApolloServer({
    typeDefs,
    resolvers,

    schemaDirectives: {
        upper: UpperCaseDirective,
    },
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
