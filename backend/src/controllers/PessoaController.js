
const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();
class PessoaController extends Controller {
    constructor() {
        super(pessoaServices);
    }

    async buscarGrupos(req, res) {
        const { pessoa_id } = req.params;
        try {
            const listaGrupos = await pessoaServices.buscarGruposPorPessoa(Number(id));
            return res.status(200).json(listaGrupos);
        } catch (error) {
            console.error('Erro ao listar registros:', error);
            return res.status(500).json({ erro: 'Erro interno no servidor' });
        }
    }

    async buscarSalmos(req, res) {
        const { pessoa_id } = req.params;
        try {
            const listaSalmos = await pessoaServices.buscarSalmosPorPessoa(Number(pessoa_id));
            return res.status(200).json(listaSalmos);
        } catch (error) {
            return res.status(500).json({ erro: `Erro interno no servidor: ${error.message}` });
        }
    }

    async buscarTodasAsPessoas(req, res) {
        try {
            const listaTodasAsPessoas = await pessoaServices.buscarPessoasEscopo();
            return res.status(200).json(listaTodasAsPessoas);
        } catch (error) {
            return res.status(500).json({ erro: `Erro interno no servidor: ${error.message}` });
        }
    }

    async vincularGrupo(req, res) {
        const { pessoa_id, grupo_id } = req.params;
        try {
            const resultado = await pessoaServices.vincularGrupoPessoa(pessoa_id, grupo_id);
            return res.status(200).json(resultado);
        } catch (error) {
            return res.status(400).json({ erro: error.message });

        }
    }
}

module.exports = PessoaController;