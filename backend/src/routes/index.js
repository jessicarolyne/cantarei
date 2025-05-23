const express = require('express');
const grupo = require('./grupoRoute.js');

module.exports = app => {
  app.use(
    express.json(),
    grupo,
  );
};