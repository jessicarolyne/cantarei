
const Controller = require('./Controller.js');
const SalmoServices = require('../services/SalmoServices.js');

const salmoServices = new SalmoServices();
class SalmoController extends Controller {
    constructor() {
        super(salmoServices);
    }
}

module.exports = SalmoController;