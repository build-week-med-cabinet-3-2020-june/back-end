const db = require("../database/dbConfig.js");


function find() {
    return db("savedList");
}


function findBy(filter) {
    return db("savedList").where(filter).orderBy("id");
  }


function findByUsername(username) {
    return db("savedList").where({ username });
}

async function addStrain(strain) {
    const [username] = await db('savedList').insert(strain);
    return findByUsername(username);
}
  


module.exports = {
    find,
    findBy,
    findByUsername,
    addStrain,
};