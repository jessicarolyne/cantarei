'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalmoPessoa extends Model {
    static associate(models) {
      SalmoPessoa.belongsTo(models.Pessoa, {
        foreignKey: 'pessoa_id',
        // as: 'salmoCantado'
      });
      SalmoPessoa.belongsTo(models.Salmo, {
        foreignKey: 'salmo_id',
        // as: 'salmoPessoa'
      });
    }
  }
  SalmoPessoa.init({
  }, {
    sequelize,
    modelName: 'SalmoPessoa',
    tableName: 'salmo_pessoa',
    paranoid: true
  });
  return SalmoPessoa;
};