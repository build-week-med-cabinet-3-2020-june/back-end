const db = require("../database/dbConfig");

function find() {
    return db("medCabUsers");
}

function findBy(filter) {
    return db("medCabUsers").where(filter).orderBy("id");
  }

  
function findById(id) {
    return db("medCabUsers").where({ id }).first();
  }

module.exports = {
    find,
    findBy,
    findById
};