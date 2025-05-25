const dataSource = require('../database/models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async listarRegistros() {
    return dataSource[this.model].findAll();
  }

  async buscarPorEscopo(escopo) {
    return dataSource[this.model].scope(escopo).findAll();
  }

  async buscarRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async criarRegistro(dataRegistro) {
    return dataSource[this.model].create(dataRegistro);
  }
  async atualizaRegistro(dadosAtualizados, id) {
    const listaDeRegistrosAtualizados = await dataSource[this.model].update(dadosAtualizados, {
      where: { id: id }
    });
    if (listaDeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }

  async excluirRegistro(id) {
    return dataSource[this.model].destroy({ where: { id: id } })
  }
}

module.exports = Services;