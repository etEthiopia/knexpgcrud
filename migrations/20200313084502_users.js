exports.up = function (knex) {
    return Promise.all([
        knex.schema.createTable("users", table => {
            table.uuid("id").primary()
            table.string("username");
        })
    ])
};

exports.down = function (knex) {
    return Promise.all([
        knex.schema.dropTable("users")
    ])
};