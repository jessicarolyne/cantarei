
const Controller = require('./Controller.js');
const GrupoServices =  require('../services/GrupoServices.js');

const grupoServices = new GrupoServices();
class GrupoController extends Controller {
    constructor() {
        super(grupoServices);
    }
     async buscarMembros(req, res) {
        const { grupoId } = req.params;
        try {
            const listaMembros = await grupoServices.buscarPessoasPorGrupo(Number(grupoId));
            return res.status(200).json(listaMembros);
        } catch (error) {
            console.error('Erro ao listar registros:', error);
            return res.status(500).json({ erro: 'Erro interno no servidor' });
        }
    }
}

module.exports = GrupoController;