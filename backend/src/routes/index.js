const express = require('express');
const grupos = require('./gruposRoute.js');

module.exports = app => {
  console.log('servidor escutando pq!');
  app.get('/', (req, res) => {
    res.send('Bem-vindo à API!');
  });
  
  app.use(
    express.json(),
    grupos
  );
};