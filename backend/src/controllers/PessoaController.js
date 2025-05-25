
const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();
class PessoaController extends Controller {
    constructor() {
        super(pessoaServices);
    }

    async buscarGrupos(req, res) {
        const { pessoaId } = req.params;
        try {
            const listaGrupos = await pessoaServices.buscarGruposPorPessoa(Number(id));
            return res.status(200).json(listaGrupos);
        } catch (error) {
            console.error('Erro ao listar registros:', error);
            return res.status(500).json({ erro: 'Erro interno no servidor' });
        }
    }

    async buscarSalmos(req, res) {
        const { pessoaId } = req.params;
        try {
            const listaSalmos = await pessoaServices.buscarSalmosPorPessoa(Number(pessoaId));
            return res.status(200).json(listaSalmos);
        } catch (error) {
            console.error('Erro ao listar registros:', error);
            return res.status(500).json({ erro: 'Erro interno no servidor' });
        }
    }
}

module.exports = PessoaController;