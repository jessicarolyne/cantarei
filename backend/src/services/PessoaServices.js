const Services = require('./Services.js');
const dataSource = require('../database/models');

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

  async vincularGrupoPessoa(pessoa_id, grupo_id) {
    const pessoa = await super.buscarRegistroPorId(pessoa_id);
    const grupo = await super.Grupo.buscarRegistroPorId(grupo_id);

    if(!pessoa || !grupo) {
      throw new Error('Pessoa ou grupo não encontrado.');
    }

    await pessoa.addGrupo(grupo);
    return { message: 'Grupo vinculado com sucesso.' };
  }
}

module.exports = PessoaServices;