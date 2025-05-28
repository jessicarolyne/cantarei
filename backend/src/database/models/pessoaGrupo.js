'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PessoaGrupo extends Model {
    static associate(models) {
     
    }
  }
  PessoaGrupo.init({
  }, {
    pessoa_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    grupo_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sequelize,
    modelName: 'PessoaGrupo',
    tableName: 'pessoas_grupos',
    paranoid: true
  });
  return PessoaGrupo;
};