const {
    makeExecutableSchema
} = require("graphql-tools");
const {
    importSchema
} = require("graphql-import");

const model = require("./utils/models");

const todo = require("./todo/todo.resolver");

const resolvers = {
    Query: {
        ...todo.Query
    },
    Mutation: {
        ...todo.Mutation
    }
}

const typeDefs = importSchema(`${__dirname}/schema.graphql`)
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

module.exports = {
    schema,
    context: req => {
        return {
            req,
            model
        }
    }
}