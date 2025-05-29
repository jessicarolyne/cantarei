
const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();
class PessoaController extends Controller {
    constructor() {
        super(pessoaServices);
    }

    async buscarTodasAsPessoas(req, res) {
        try {
            const listaTodasAsPessoas = await pessoaServices.buscarPessoasEscopo();
            return res.status(200).json(listaTodasAsPessoas);
        } catch (error) {
            return res.status(500).json({ erro: `Erro interno no servidor: ${error.message}` });
        }
    }
}

module.exports = PessoaController;