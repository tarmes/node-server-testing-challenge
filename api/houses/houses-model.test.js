const House = require('./houses-model');
const db = require('../../database/db-config');

const Gryffindor = { name: 'Gryffindor' }
const Slytherin = { name: 'Slytherin' }
const Ravenclaw = { name: 'Ravenclaw' }
const Hufflepuff = { name: 'Hufflepuff' }

beforeAll(async () => {
   await db.migrate.rollback()
   await db.migrate.latest()
})

beforeEach(async () => {
   await db('houses').truncate()
})

afterAll(async () => {
   
})