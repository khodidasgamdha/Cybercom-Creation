const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    type Author {
        name: String
    }

    type Course {
        name: String
    }
    
    type Color {
        name: String
    }
    
    interface Book {
        title: String
        author: Author
    }
    
    type Textbook implements Book {
        title: String 
        author: Author 
        courses: [Course]
    }
    
    type ColoringBook implements Book {
        title: String
        author: Author
        colors: [Color]
    }
    
    type Query {
        schoolBooks: [Book]
    }
`;

const resolvers = {
    Book: {
        __resolveType(book, context, info) {
            if (book.courses) {
                return "Textbook";
            }
            if (book.colors) {
                return "ColoringBook";
            }
            return null; // GraphQLError is thrown
        },
    },
    Query: {
        schoolBooks: () => {
            return [
                {
                    title: "title",
                    author: { name: "author" },
                    courses: [{ name: "Engineering" }, { name: "CA" }],
                },
                {
                    title: "title",
                    author: { name: "author" },
                    colors: [{ name: "White" }, { name: "Black" }],
                },
            ];
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
