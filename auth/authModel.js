const db = require('../database/dbConfig');

//users is a placeholder name for the database

module.exports = {
	find,
    findBy,
    add,
	findById,
};

function find() {
	return db('medCabUsers').select('id', 'username', 'password');
}

function findBy(filter) {
	return db('medCabUsers').where(filter);
}

async function add(user) {
	const [id] = await db('medCabUsers').insert(user);

	return findById(id);
}

function findById(id) {
	return db('medCabUsers').where({ id }).first();
}