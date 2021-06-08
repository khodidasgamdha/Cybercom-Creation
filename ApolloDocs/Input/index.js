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

    type Query {
        getPost: Post
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
        createPost: (_, { post }) => {
            return post
        }
    },
    Query: {
        getPost: () => {
            console.log("HI");
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
