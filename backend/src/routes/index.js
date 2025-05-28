const express = require('express');
const grupos = require('./gruposRoute.js');
const pessoas = require('./pessoasRoute.js');
const salmos = require('./salmosRoute.js');
const pessoasGrupos = require('./pessoaGrupoRoute.js');

module.exports = app => {
  console.log('servidor escutando pq!');
  app.get('/', (req, res) => {
    res.send('Bem-vindo à API!');
  });

  app.use(
    express.json(),
    grupos,
    pessoas,
    salmos,
    pessoasGrupos,
  );
};