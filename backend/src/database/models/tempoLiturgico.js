'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TempoLiturgico extends Model {
    static associate(models) {
      TempoLiturgico.hasMany(models.Celebracao, {
        foreignKey: 'tempo_liturgico_id',
        // as: 'TempoLiturgicoPessoa'
      });
    }
  }
  TempoLiturgico.init({
  }, {
    sequelize,
    modelName: 'TempoLiturgico',
    tableName: 'tempos_liturgicos',
    paranoid: true
  });
  return TempoLiturgico;
};