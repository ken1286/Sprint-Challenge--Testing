const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

let games = [
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

server.get('/games', (req, res) => {

  res.status(200).json(games);
});

server.post('/games', (req, res) => {
  const { title, genre, releaseYear } = req.body;
  const newGame = req.body;
  if(!title || !genre) {
    res.status(422).json({message: 'Please enter title and genre.'})
  } else {
    games.push(newGame);
    res.status(201).json(games)
  }
});

module.exports = server;