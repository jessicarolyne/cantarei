// src/routes/grupoRoute.js
const express = require('express');
const router = express.Router();
const GrupoController = require('../controllers/GrupoController');

const grupoController = new GrupoController();

router.get('/grupos', (req, res) => grupoController.listarTodos(req, res)); // sem parênteses!

module.exports = router;
