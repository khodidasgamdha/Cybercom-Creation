const { ApolloServer, gql, SchemaDirectiveVisitor } = require("apollo-server");
const { defaultFieldResolver, GraphQLString } = require("graphql");

class DateFormatDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const { resolve = defaultFieldResolver } = field;
        const { format } = this.args;
        field.resolve = async function (...args) {
            const date = await resolve.apply(this, args);
            return require("dateformat")(date, format);
        };
        // The formatted Date becomes a String, so the field type must change:
        field.type = GraphQLString;
    }
}

const typeDefs = gql`
    directive @date(format: String) on FIELD_DEFINITION
    scalar Date
    type Post {
        published: Date @date(format: "dd-mmmm-yyyy,dddd")
    }
    type Query {
        publish: Post
    }
`;

const resolvers = {
    Query: {
        publish: () => {
            return { published: new Date() };
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    schemaDirectives: {
        date: DateFormatDirective,
    },
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
