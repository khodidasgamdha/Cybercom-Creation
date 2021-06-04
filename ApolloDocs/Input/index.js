const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    type Post {
        title: String
        body: String
        mediaUrls: [String]
    }

    type Mutation {
        createPost(post: PostAndMediaInput): Post
    }

    input PostAndMediaInput {
        title: String
        body: String
        mediaUrls: [String]
    }
`;

// const Post = []

const resolvers = {
    Mutation: {
        createPost: (_, payload) => {
            console.log(payload);
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
