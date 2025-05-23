
const Controller = require('./Controller.js');
const GrupoServices =  require('../services/GrupoServices.js');

const grupoService = new GrupoServices();
class GrupoController extends Controller {
    constructor() {
        super(GrupoServices);
    }

    static async listarGrupos(req, res) {
        try {
           
        } catch (error) {
            return 'oi';
        }
    }
}

module.exports = GrupoController;