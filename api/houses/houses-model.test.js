const House = require('./houses-model');
const db = require('../../database/db-config');

const Gryffindor = { name: 'Gryffindor' }
// const Ravenclaw = { name: 'Ravenclaw' }

beforeAll(async () => {
   await db.migrate.rollback()
   await db.migrate.latest()
})

beforeEach(async () => {
   await db('houses').truncate()
})

afterAll(async () => {
   await db.destroy()
})

describe('House model', () => {
   describe('[GET] /api/houses', () => {
      it('sanity', () => {
         expect(true).toBe(true)
      })
      it('returns an empty array when no houses exist', async () => {
         const result = await House.getAll()
         expect(result).toHaveLength(0)
      })
      it('returns houses when houses exist', async () => {
         await db('houses').insert(Gryffindor)
         const result = await House.getAll()
         expect(result).toHaveLength(1)
      })
   })
   describe('[POST] /api/houses', () => {
      it('', () => {

      })
      it('', () => {
         
      })
   })
})