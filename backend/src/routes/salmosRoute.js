const { Router } = require('express');
const SalmoController = require('../controllers/SalmoController.js');

const salmoController = new SalmoController();
const router = new Router();

router.get('/salmos', (req, res) => salmoController.listarTodos(req, res));
router.get('/salmos/:id', (req, res) => salmoController.buscarPorId(req, res));
router.put('/salmos/:id', (req, res) => salmoController.atualizarRegistro(req, res));
router.delete('salmos/:id', (req, res) => salmoController.excluirRegistro(req, res));
router.get('/salmos/:salmo_id/pessoas', (req, res) => salmoController.buscarPessoas(req, res));

module.exports = router;
