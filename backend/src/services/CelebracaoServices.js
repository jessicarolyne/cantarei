const Services = require('./Services.js');

class CelebracaoServices extends Services {
  constructor() {
    super('Celebracao');
  }
  // async buscarPessoasPorSalmo(id) {
  //   const salmo = await super.buscarRegistroPorId(id);
  //   const listarPessoas = await salmo.getSalmoCantado();
  //   return listarPessoas;
  // }
}

module.exports = CelebracaoServices;