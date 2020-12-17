const db = require('../../database/db-config');

module.exports = {
   getAll,
   add,
   update,
   remove
}

function getAll() {
   return db('houses')
}

async function add(house) {
   const [id] = await db('houses').insert(house, 'id');
   return db('houses').where('id', id).first();
}

async function update(id, changes) {
   await db('houses').where('id', id).update(changes)
   return db('houses').where('id', id).first()
}

function remove(id) {
   return db('houses').where('id', id).del();
}

