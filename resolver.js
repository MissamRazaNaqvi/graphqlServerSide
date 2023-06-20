import { qoutes, users } from "./fakedb.js";
import { randomBytes } from 'crypto'

const resolvers = {
    Query: {
        usersQuery: () => users,
        qoutes: () => qoutes
    },
    Mutation: {
        signupUserDummy: (_, { userNew }) => {
            const id = randomBytes(5).toString("hex")
            users.push({
                id,
                ...userNew
            })
            return users.find(users => users.id == id)
        }
    }
}
export default resolvers