'use strict';
const {
  Model,
  where
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      Pessoa.belongsToMany(models.Grupo, {
        through: 'pessoas_grupos',
        as: 'grupos',
        foreignKey: 'pessoa_id',
        otherKey: 'grupo_id',
      });
    }
  }
  Pessoa.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 256],
          msg: "O campo nome deve ter no minimo 3 caracteres."
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas',
    paranoid: true,
    // defaultScope: {
    //   where: {
    //     nome: 'Jessica'
    //   }
    // },
    scopes: {
      todosOsRegistros: {
        where: {}
      }
    }
  });
  return Pessoa;
};