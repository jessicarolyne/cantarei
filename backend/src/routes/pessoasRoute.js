const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const SalmoController = require('../controllers/SalmoController.js');

const pessoaController = new PessoaController();

const router = new Router();

router.get('/pessoas', (req, res) => pessoaController.listarTodos(req, res));
router.get('/pessoas/todos', (req, res) => pessoaController.buscarTodasAsPessoas(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.buscarPorId(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualizarRegistro(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.excluirRegistro(req, res));

module.exports = router;
