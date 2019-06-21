const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

let games = [
  // {
  //   title: 'Pacman', // required
  //   genre: 'Arcade', // required
  //   releaseYear: 1980 // not required
  // },
  // {
  //   title: 'Chrono Trigger', // required
  //   genre: 'RPG', // required
  //   releaseYear: 1995 // not required
  // },
  // {
  //   title: 'Donkey Kong Country', // required
  //   genre: 'Platformer', // required
  //   releaseYear: 1994 // not required
  // },
];