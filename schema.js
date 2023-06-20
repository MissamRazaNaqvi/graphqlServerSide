import { gql } from "apollo-server-core"

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
    type Mutation{
        signupUserDummy(userNew:userInput):User
    }
    input userInput{
        firstname:String!
        lastname:String!
        email:String
        password:String!
    }
`
export default typeDefs