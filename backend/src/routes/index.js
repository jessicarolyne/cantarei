const express = require('express');
const grupos = require('./grupoRoute.js');

module.exports = app => {
  app.use(
    express.json(),
    grupos,
  );
};