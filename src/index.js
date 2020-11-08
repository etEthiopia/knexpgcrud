const express = require("express")
const cors = require("cors")
const {
    ApolloServer
} = require("apollo-server-express")
const api = require('./api')
const Knex = require("knex")

const env = process.env.NODE_ENV || "development";

const connection = require('../knexfile')
const {
    Model
} = require("objection");

const knexConnection = Knex(connection[env]);
Model.knex(knexConnection)

require("dotenv").config()

const app = express()

const path = "/graphql"

app.use(cors())


const server = new ApolloServer(api)

server.applyMiddleware({
    app,
    path: path
})

app.listen(process.env.PORT, () => {
    console.log(
        `the server is running at http://localhost:${process.env.PORT}/graphql`
    )
})