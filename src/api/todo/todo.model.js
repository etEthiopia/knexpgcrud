const BaseModel = require("../utils/base.model");

class Todo extends BaseModel {
    static get tableName() {
        return "todos";
    }

    static get idColumn() {
        return "id";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: [],
            properties: {
                id: {
                    type: "string"
                },
                title: {
                    type: "string"
                },
                is_done: {
                    type: "boolean"
                }
            }
        }
    }
}

module.exports = Todo