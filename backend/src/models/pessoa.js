'use strict';
const {
  Model
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
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas',
  });
  return Pessoa;
};