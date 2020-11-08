exports.up = function (knex) {
    return Promise.all([
        knex.schema.createTable("todos", table => {
            table.uuid("id").primary();
            table.string("title");
            table.boolean("is_done");
        })
    ])
};

exports.down = function (knex) {
    return Promise.all([
        knex.schema.dropTable("todos")
    ])
};