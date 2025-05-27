
const Controller = require('./Controller.js');
const GrupoServices = require('../services/GrupoServices.js');

const grupoServices = new GrupoServices();
class GrupoController extends Controller {
    constructor() {
        super(grupoServices);
    }
    async buscarMembros(req, res) {
        const { grupo_id } = req.params;
        try {
            const listaMembros = await grupoServices.buscarPessoasPorGrupo(Number(grupo_id));
            return res.status(200).json(listaMembros);
        } catch (error) {
            return res.status(500).json({ erro: `Erro interno no servidor: ${error.message}` });
        }
    }
}

module.exports = GrupoController;