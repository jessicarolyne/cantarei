
const Controller = require('./Controller.js');
const CelebracaoServices = require('../services/CelebracaoServices.js');

const celebracaoServices = new CelebracaoServices();
class CelebracaoController extends Controller {
    constructor() {
        super(celebracaoServices);
    }
}

module.exports = CelebracaoController;