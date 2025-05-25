const { Router } = require('express');
const GrupoController = require('../controllers/GrupoController.js');

const grupoController = new GrupoController();
const router = new Router();

router.get('/grupos', (req, res) => grupoController.listarTodos(req, res));

module.exports = router;
