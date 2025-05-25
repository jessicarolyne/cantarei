const Services = require('./Services.js');

class SalmoServices extends Services {
  constructor() {
    super('Salmo');
  }
  async buscarPessoasPorSalmo(id) {
    const salmo = await super.buscarRegistroPorId(id);
    const listarPessoas = await salmo.getSalmoCantado();
    return listarPessoas;
  }
}

module.exports = SalmoServices;