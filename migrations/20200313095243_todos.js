exports.up = function (knex) {
    return Promise.all([
        knex.schema.createTable("todos", table => {
            table.uuid("id").primary();
            table.string("title");
            table.boolean("is_done");
            table.dateTime("created_at");
            table.dateTime("updated_at");
        })
    ])
};

exports.down = function (knex) {
    return Promise.all([
        knex.schema.dropTable("todos")
    ])
};