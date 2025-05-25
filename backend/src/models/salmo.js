'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Salmo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Salmo.belongsTo(models.Pessoa, {
        foreignKey: 'pessoa_id',
        as: 'salmoCantado'
      });
    }
  }
  Salmo.init({
    titulo: DataTypes.STRING,
    video_url: DataTypes.STRING,
    cifra: DataTypes.STRING,
    tempo_liturgico: DataTypes.STRING,
    data: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Salmo',
    tableName: 'salmos',
  });
  return Salmo;
};