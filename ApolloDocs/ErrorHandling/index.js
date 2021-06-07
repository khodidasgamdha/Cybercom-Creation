const { ApolloServer, gql, UserInputError } = require('apollo-server');
const { ApolloError } = require('apollo-server-errors');

const typeDefs = gql`
	type Query {
		userWithID(id: ID!): User
	}
	type User {
		id: ID!
		name: String!
	}
`;

const resolvers = {
	Query: {
		userWithID: (_, args) => {
			if (args.id < 1) {
				// throw new UserInputError('Invalid argument value',{
				// 	argumentName: 'id',
				// 	argumentValue: args.id
				//   });
				throw new MyError('My error message');
			}
		},
	},
};

class MyError extends ApolloError {
	constructor(message) {
		super(message, 'MY_ERROR_CODE');

		Object.defineProperty(this, 'name', { value: 'MyError' });
	}
}
const server = new ApolloServer({
	typeDefs,
	resolvers,
	debug: false,
	formatError: (err) => {
		// Don't give the specific errors to the client.
		if (err.message.startsWith('Database Error: ')) {
			return new Error('Internal server error');
		}
		// Otherwise return the original error. The error can also
		// be manipulated in other ways, as long as it's returned.
		return err;
	},
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
