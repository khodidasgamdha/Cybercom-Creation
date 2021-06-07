const { ApolloServer,gql, PubSub } = require('apollo-server');

const pubsub = new PubSub();

const typeDefs = gql`
	type Subscription {
		userCreated: User
	}
	type User {
		email: String
		password: String
	}
	type Query {
		allUser: [User]
	}
	type Mutation {
		createUser(email: String, password: String): User
	}
`;

const resolvers = {
	Query: {
		allUser: () => {
			return [
				{ email: 'a@gmail.com', password: 'Password is abcd' },
				{ email: 'b@gmail.com', password: 'Password is abcd' },
				{ email: 'c@gmail.com', password: 'Password is abcd' },
			];
		},
	},
	Mutation: {
		createUser(_, args) {
			pubsub.publish('POST_CREATED', { userCreated: args });
			return args;
		},
	},
	Subscription: {
		userCreated: {
			subscribe: () => pubsub.asyncIterator(['POST_CREATED']),
		},
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
    context: async ({ req, connection }) => {
		if (connection) {
            const token = connection.context.authorization || "";
            return { token };
		} else {
			const token = req.headers.authorization || '';
			return { token };
		}
	},
	subscriptions: {
		onConnect: (connectionParams) => {
			if (connectionParams.authToken) {
				return true
			}

			throw new Error('Missing auth token!');
		},
	},
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});