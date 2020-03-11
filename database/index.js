const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        database: 'to_do',
        user: 'postgres',
        password: 'root'
    }
})

module.exports = knex;