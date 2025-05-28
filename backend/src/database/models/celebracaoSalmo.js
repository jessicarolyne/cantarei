'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CelebracaoSalmo extends Model {
    static associate(models) {
      CelebracaoSalmo.belongsTo(models.Celebracao, {
        foreignKey: 'celebracao_id',
        // as: ''
      });
      CelebracaoSalmo.belongsTo(models.Salmo, {
        foreignKey: 'salmo_id',
        // as: 'CelebracaoSalmo'
      });
    }
  }
  CelebracaoSalmo.init({
    
  }, {
    sequelize,
    modelName: 'CelebracaoSalmo',
    tableName: 'celebracoes_salmos',
    paranoid: true
  });
  return CelebracaoSalmo;
};