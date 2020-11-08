const uuid = require("uuidv4");
const objection = require("objection");

class BaseModel extends objection.Model {
    $beforeInsert() {
        this.created_at = new Date().toISOString();
        this.updated_at = new Date().toISOString();
        this.id = uuid.uuid();
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString();
    }
}

module.exports = BaseModel