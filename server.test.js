const server = require ('./server.js');
const supertest = require('supertest');

describe('server', () => {
  describe('GET /games', () => {
    it('responds with 200 OK', () => {

      return supertest(server)
        .get('/games')
        .expect(200);

    })

    it('responds with json format', () => {

    })

    it('responds with an array', () => {

    })
  })

  describe('POST /games', () => {
    it('responds with 422 when requirements not met', () => {

    })

    it('responds with 201 when successful', () => {

    })
  })
})