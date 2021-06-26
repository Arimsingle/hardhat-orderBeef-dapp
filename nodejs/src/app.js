require('dotenv').config()
const { ApolloServer } = require('apollo-server');
const { typeDefs } = require("./graphql/typeDefs/typeDefs");
const { resolvers } = require("./graphql/resolvers/resolvers");
const { GRAPHQL_PORT } = process.env;
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen(GRAPHQL_PORT).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});


