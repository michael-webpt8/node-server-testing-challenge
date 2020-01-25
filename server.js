const express = require('express');
const server = express();
const authRouter = require('./characters/character-router');

server.use(express.json());

server.use('/api', authRouter);

server.get('/', (req, res) => {
  res.status(200).json({
    message: "it's alive!",
  });
});

server.use((err, req, res, next) => {
  console.log('Error:', err);
  res.status(500).json({
    message: 'Something went wrong',
  });
});

module.exports = server;
