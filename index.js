const express = require('express');

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

const server = require('./server');

server.listen(port, host, () => {
  console.log(`\n *** ${host}:${port} *** \n`);
});
