const request = require('supertest');
const server = require('./server')
const db = require('../database/db-config');

const Gryffindor = { name: 'Gryffindor' }
const Ravenclaw = { name: 'Ravenclaw' }

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

      })
      it('cannot add two houses with the same name', async () => {
         
      })
   })
   describe('[PUT] /api/houses/:id', () => {
      it('responds with the updated house', async () => {

      })
      it('cannot update without a name', async () => {
         
      })
   })
   describe('[DELETE] /api/houses/:id', () => {
      it('successful delete responds appropriately', async () => {

      })
      it('respond with 404 if house does not exist', async () => {
         
      })
   })
})