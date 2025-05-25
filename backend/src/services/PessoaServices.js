const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
  }
  async buscarGruposPorPessoa(id) {
    const pessoa = await super.buscarRegistroPorId(id);
    const listarGrupos = await pessoa.getMembroGrupo();
    return listarGrupos;
  }

  async buscarSalmosPorPessoa(id) {
    const pessoa = await super.buscarRegistroPorId(id);
    const listarSalmos = await pessoa.getSalmoCantado();
    return listarSalmos;
  }

  async buscarPessoasEscopo() {
    const listaPessoas = await super.buscarPorEscopo('todosOsRegistros');
    return listaPessoas;
  }
}

module.exports = PessoaServices;