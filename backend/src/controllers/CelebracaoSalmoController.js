
const Controller = require('./Controller.js');
const CelebracaoSalmo = require('../services/celebracaoSalmoServices.js');

const celebracaoSalmo = new CelebracaoSalmo();
class CelebracaoSalmo extends Controller {
    constructor() {
        super(celebracaoSalmo);
    }

    async vincularGrupo(req, res) {
        const { pessoa_id, grupo_id } = req.params;
        try {
            const resultado = await celebracaoSalmo.vincularGrupoPessoa(pessoa_id, grupo_id);
            return res.status(200).json(resultado);
        } catch (error) {
            return res.status(400).json({ erro: error.message });

        }
    }

    async desvincularGrupo(req, res) {
        const { pessoa_id, grupo_id } = req.params;
        try {
            const resultado = await celebracaoSalmo.desvincularGrupoPessoa(pessoa_id, grupo_id);
            return res.status(200).json(resultado);
        } catch (error) {
            return res.status(400).json({ erro: error.message });

        }
    }

    async listarGruposDaPessoa(req, res) {
        const { pessoa_id } = req.params;
        try {
            const resultado = await celebracaoSalmo.listarGruposPessoa(pessoa_id);
            return res.status(200).json(resultado);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async listarPessoasDoGrupo(req, res) {
        const { grupo_id } = req.params;
        try {
            const resultado = await celebracaoSalmo.listarPessoasGrupo(grupo_id);
            return res.status(200).json(resultado);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
}

module.exports = PessoaGrupoController;