import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground, gql } from "apollo-server-core";
import { qoutes, users } from "./fakedb.js";

// user type is a custom type of graphql 
const typeDefs = gql`
    type Query{
       usersQuery:[User]
       qoutes:[Qoute]
    }
    type User{
        id:Int
        firstname:String
        lastname:String
        email:String
        password:String
        quotebyuser:[Qoute]
    }
    type Qoute{
        quote:String
        id:ID
    }
    
`
const resolvers = {
    Query: {
        usersQuery: () => users,
        qoutes: () => qoutes
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers,
    //this plugin for apollo sever playground on browser
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
})
const url = 8083;
server.listen(url).then(() => { console.log(`server running on ${url}`) })