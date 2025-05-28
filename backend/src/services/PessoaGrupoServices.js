const Services = require('./Services.js');
const { Pessoa, Grupo } = require('../database/models');

class PessoaServices extends Services {
  constructor() {
    super('PessoaGrupo');
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
    const pessoa = await Pessoa.findByPk(pessoa_id);
    const grupo = await Grupo.findByPk(grupo_id);

    if(!pessoa || !grupo) {
      throw new Error('Pessoa ou grupo não encontrado.');
    }

    await pessoa.addGrupo(grupo);
    return { message: 'Grupo vinculado com sucesso.' };
  }
}

module.exports = PessoaServices;