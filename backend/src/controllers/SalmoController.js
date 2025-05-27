
const Controller = require('./Controller.js');
const SalmoServices =  require('../services/SalmoServices.js');

const salmoServices = new SalmoServices();
class SalmoController extends Controller {
    constructor() {
        super(salmoServices);
    }

     async buscarPessoas(req, res) {
        const { salmo_id } = req.params;
        try {
            const listaPessoas = await salmoServices.buscarPessoasPorSalmo(Number(salmo_id));
            return res.status(200).json(listaPessoas);
        } catch (error) {
            return res.status(500).json({ erro: `Erro interno no servidor: ${error.message}` });
        }
    }
}

module.exports = SalmoController;