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

function findSaved(username) {
  return db("savedList").where({ username })
}


module.exports = {
    find,
    findBy,
    findById,
    findSaved,
};