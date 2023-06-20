import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from './schema.js'
import resolvers from "./resolver.js";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    //this plugin for apollo sever playground on browser
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
})
const url = 8083;
server.listen(url).then(() => { console.log(`server running on ${url}`) })