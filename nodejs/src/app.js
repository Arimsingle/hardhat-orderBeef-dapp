const { ApolloServer, gql } = require('apollo-server');
const { typeDefs } = require("./graphql/typeDefs/typeDefs");
const { resolvers } = require("./graphql/resolvers/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen(8000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

