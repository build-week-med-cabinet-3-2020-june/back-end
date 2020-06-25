const db = require("../database/dbConfig");

function find() {
    return db("strainAPI");
}

function findBy(filter) {
    return db("strainAPI").where(filter).orderBy("id");
  }

// under contruction, need strain to save to saved table associated to a user.
//   async function add(strain) {
//     try {
//       const [id] = await db("strainAPI").insert(strain, "id");
  
//       return findById(id);
//     } catch (error) {
//       throw error;
//     }
//   }
  
function findById(id) {
    return db("strainAPI").where({ id }).first();
  }

module.exports = {
    find,
    findBy,
    add,
    findById
};