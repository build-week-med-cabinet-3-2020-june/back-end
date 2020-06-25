const db = require("../database/dbConfig.js");

function find() {
    return db("medCabUsers");
}

function findBy(filter) {
    return db("medCabUsers").where(filter).orderBy("id");
  }

  
function findById(id) {
  return db("medCabUsers").where({ id }).first();
}

function findByUsername(username) {
    return db("medCabUsers").where({ username }).first();
}

module.exports = {
    find,
    findBy,
    findById,
    findByUsername
};