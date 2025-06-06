
const Controller = require('./Controller.js');
const PessoaGrupoServices = require('../services/PessoaGrupoServices.js');

const pessoaGrupoServices = new PessoaGrupoServices();
class PessoaGrupoController extends Controller {
    constructor() {
        super(pessoaGrupoServices);
    }

    async vincularGrupo(req, res) {
        const { pessoa_id, grupo_id } = req.params;
        try {
            const resultado = await pessoaGrupoServices.vincularGrupoPessoa(pessoa_id, grupo_id);
            return res.status(200).json(resultado);
        } catch (error) {
            return res.status(400).json({ erro: error.message });

        }
    }

    async desvincularGrupo(req, res) {
        const { pessoa_id, grupo_id } = req.params;
        try {
            const resultado = await pessoaGrupoServices.desvincularGrupoPessoa(pessoa_id, grupo_id);
            return res.status(200).json(resultado);
        } catch (error) {
            return res.status(400).json({ erro: error.message });

        }
    }

    async listarGruposDaPessoa(req, res) {
        const { pessoa_id } = req.params;
        try {
            const resultado = await pessoaGrupoServices.listarGruposPessoa(pessoa_id);
            return res.status(200).json(resultado);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async listarPessoasDoGrupo(req, res) {
        const { grupo_id } = req.params;
        try {
            const resultado = await pessoaGrupoServices.listarPessoasGrupo(grupo_id);
            return res.status(200).json(resultado);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
}

module.exports = PessoaGrupoController;