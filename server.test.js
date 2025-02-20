const server = require ('./server.js');
const supertest = require('supertest');

describe('server', () => {
  describe('GET /games', () => {
    it('responds with 200 OK', () => {
      return supertest(server)
        .get('/games')
        .expect(200);
    })

    it('responds with a list of games', () => {
      let gamesList = [
        {
          title: 'Pacman', // required
          genre: 'Arcade', // required
          releaseYear: 1980 // not required
        },
        {
          title: 'Chrono Trigger', // required
          genre: 'RPG', // required
          releaseYear: 1995 // not required
        },
        {
          title: 'Donkey Kong Country', // required
          genre: 'Platformer', // required
          releaseYear: 1994 // not required
        },
      ];

      return supertest(server)
        .get('/games')
        .then(res => {
          expect(res.body).toEqual(gamesList);
        });
    })

    it('responds with json format', () => {
      return supertest(server)
        .get('/games')
        .expect('Content-Type', /json/i)
    })

    it('responds with an array', () => {
      return supertest(server)
        .get('/games')
        .then(res => {
          expect(Array.isArray(res.body)).toBe(true);
      })
    })
  })

  describe('POST /games', () => {
    it('responds with 422 when requirements not met', () => {
      const gameWithNoGenre = { "title": "Epic" };

      return supertest(server)
        .post('/games')
        .send(gameWithNoGenre)
        .expect(422);
    })

    it('responds with json format', () => {
      return supertest(server)
        .post('/games')
        .expect('Content-Type', /json/i)
    });

    it('responds with 201 when successful', () => {
      const game = { "title": "Epic", "genre": "RPG"};

      return supertest(server)
        .post('/games')
        .send(game)
        .expect(201);
    })
  })
})