const db = require("../database/dbConfig");

function find() {
    return db("strains");
}

function findby(filter) {
    return db("strains").where(filter).orderBy("id");
  }


function findById(id) {
    return db("strains").where({ id }).first();
  }

function findByStrain(strain) {
    return db("strains").where({ strain }).first();
}

 

module.exports = {
    find,
    findby,
    findById,
    findByStrain
};


