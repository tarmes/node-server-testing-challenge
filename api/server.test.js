const request = require('supertest');
const server = require('./server')
const db = require('../database/db-config');

const Gryffindor = { name: 'Gryffindor' }
const Ravenclaw = { name: 'Ravenclaw' }

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

describe('Enpoints', () => {
   it('sanity', () => {
      expect(true).toBe(true)
   })
   describe('[GET] /api/houses', () => {
      it('responds with status 200 OK', async () => {
         const response = await request(server).get('/api/houses')
         expect(response.status).toBe(200)
         
      })
      it('responds with houses if houses exist', async () => {
         await db('houses').insert(Gryffindor)
         let response = await request(server).get('/api/houses')
         expect(response.body).toHaveLength(1)
         expect(response.body[0].name).toBe('Gryffindor')
      })
   })
   describe('[POST] /api/houses', () => {
      it('returns the newly created house', async () => {
         let response = await request(server).post('/api/houses').send(Gryffindor)
         expect(response.body.name).toBe('Gryffindor')
      })
      it('cannot add two houses with the same name', async () => {
         let response = await request(server).post('/api/houses').send(Gryffindor)
         expect(response.body.name).toBe('Gryffindor')
         response = await request(server).post('/api/houses').send(Gryffindor)
         expect(response.status).toBe(500)
      })
   })
   describe('[PUT] /api/houses/:id', () => {
      it('responds with the updated house', async () => {
         let response = await request(server).post('/api/houses').send(Gryffindor)
         expect(response.body.name).toBe('Gryffindor')
         response = await request(server).put('/api/houses/1').send({ name: 'Schmyffindor' })
         expect(response.body.name).toBe('Schmyffindor')

      })
      it('cannot update without a name', async () => {
         let response = await request(server).post('/api/houses').send(Gryffindor)
         expect(response.body.name).toBe('Gryffindor')
         response = await request(server).post('/api/houses').send({ school: 'Hogwarts' })
         expect(response.status).toBe(500)
      })
   })
   describe('[DELETE] /api/houses/:id', () => {
      it('successful delete responds appropriately', async () => {
         let response = await request(server).post('/api/houses').send(Gryffindor)
         expect(response.body.name).toBe('Gryffindor')
         response = await request(server).delete('/api/houses/1')
         expect(response.body.message).toBe('House deleted successfully!')
      })
      it('respond with 404 if house does not exist', async () => {
         let response = await request(server).post('/api/houses').send(Gryffindor)
         expect(response.body.name).toBe('Gryffindor')
         response = await request(server).delete('/api/houses/17')
         expect(response.status).toBe(404)
      })
   })
})