'use strict';
const {
  Model,
  where
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoa.belongsTo(models.Grupo, {
        foreignKey: 'grupo_id',
      });
      Pessoa.hasMany(models.Salmo, {
        foreignKey: 'pessoa_id',
        as: 'salmoCantado'
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