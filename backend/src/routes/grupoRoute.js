// src/routes/grupoRoute.js
const express = require('express');
const router = express.Router();

const grupoController = require('../controllers/GrupoController');

router.get('/grupos', grupoController.listarGrupos); // sem parênteses!

module.exports = router;
