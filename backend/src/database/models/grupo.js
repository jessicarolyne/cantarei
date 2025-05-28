'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grupo extends Model {
    static associate(models) {
      Grupo.belongsToMany(models.Pessoa, {
        through: 'pessoas_grupos',
        as: 'pessoas',
        foreignKey: 'grupo_id',
        otherKey: 'pessoa_id',
      });
    }
  }
  Grupo.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Grupo',
    tableName: 'grupos',
    paranoid: true,
  });
  return Grupo;
};