const { Router } = require('express');
const PessoaGrupoController = require('../controllers/PessoaGrupoController.js');

const pessoaGrupoController = new PessoaGrupoController();

const router = new Router();

router.post('/pessoas/:pessoa_id/grupos/:grupo_id', pessoaGrupoController.vincularGrupo);
// router.delete('/pessoas/:pessoa_id/grupos/:grupo_id', PessoaGrupoController.desvincular);
// router.get('/pessoas/:pessoa_id/grupos', PessoaGrupoController.listarGruposDaPessoa);
// router.get('/grupos/:grupo_id/pessoas', PessoaGrupoController.listarPessoasDoGrupo);

module.exports = router;
