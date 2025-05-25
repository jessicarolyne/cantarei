const Services = require('./Services.js');

class GrupoServices extends Services {
  constructor() {
    super('Grupo');
  }
  async buscarPessoasPorGrupo(id) {
    const grupo = await super.buscarRegistroPorId(id);
    const listaMebrosGrupo = await grupo.getMembroGrupo();
    return listaMebrosGrupo;
  }
}

module.exports = GrupoServices;