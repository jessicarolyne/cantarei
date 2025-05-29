const { Router } = require('express');
const PessoaGrupoController = require('../controllers/PessoaGrupoController.js');

const pessoaGrupoController = new PessoaGrupoController();

const router = new Router();

router.post('/pessoas/:pessoa_id/grupos/:grupo_id', pessoaGrupoController.vincularGrupo);
router.delete('/pessoas/:pessoa_id/grupos/:grupo_id', pessoaGrupoController.desvincularGrupo);
router.get('/pessoas/:pessoa_id/grupos', pessoaGrupoController.listarGruposDaPessoa);
router.get('/grupos/:grupo_id/pessoas', pessoaGrupoController.listarPessoasDoGrupo);

module.exports = router;
