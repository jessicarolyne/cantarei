const Services = require('./Services.js');
const { Pessoa, Grupo } = require('../database/models');

class PessoaServices extends Services {
  constructor() {
    super('PessoaGrupo');
  }

  async vincularGrupoPessoa(pessoa_id, grupo_id) {
    const pessoa = await Pessoa.findByPk(pessoa_id);
    const grupo = await Grupo.findByPk(grupo_id);

    if (!pessoa || !grupo) {
      throw new Error('Pessoa ou grupo não encontrado.');
    }

    await pessoa.addGrupo(grupo);
    return { message: 'Grupo vinculado com sucesso.' };
  }

  async desvincularGrupoPessoa(pessoa_id, grupo_id) {
    const pessoa = await Pessoa.findByPk(pessoa_id);
    const grupo = await Grupo.findByPk(grupo_id);

    if (!pessoa || !grupo) {
      throw new Error('Pessoa ou grupo não encontrado.');
    }

    await pessoa.removeGrupo(grupo);
    return { message: 'Grupo desvinculado com sucesso.' };
  }

  async listarGruposPessoa(pessoa_id) {
    const pessoa = await Pessoa.findByPk(pessoa_id, {
      include: {
        model: Grupo,
        as: 'grupos',
        through: { attributes: [] }
      }
    });

    if (!pessoa) {
      throw new Error('Pessoa não encontrada.');
    }

    return pessoa.grupos;
  }

  async listarPessoasGrupo(grupo_id) {
    const grupo = await Grupo.findByPk(grupo_id, {
      include: {
        model: Pessoa,
        as: 'pessoas',
        through: { attributes: [] }
      }
    });

    if (!grupo) {
      throw new Error('Pessoa não encontrada.');
    }

    return grupo.pessoas;
  }
}

module.exports = PessoaServices;