const { Router } = require('express');
const GrupoController = require('../controllers/GrupoController.js');
const PessoaController = require('../controllers/PessoaController.js');

const grupoController = new GrupoController();
const pessoaController = new PessoaController();

const router = new Router();

router.get('/grupos', (req, res) => grupoController.listarTodos(req, res));
router.get('/grupos/:id', (req, res) => grupoController.buscarPorId(req, res));
router.post('/grupos', (req, res) => grupoController.criarNovoRegistro(req, res));
router.put('/grupos/:id', (req, res) => grupoController.atualizarRegistro(req, res));
router.delete('grupos/:id', (req, res) => grupoController.excluirRegistro(req, res));
router.get('/grupos/:grupoId/pessoas', (req, res) => grupoController.buscarMembros(req, res));
router.post('/grupos/:grupoId/pessoas', (req, res) => pessoaController.criarNovoRegistro(req, res));

module.exports = router;
