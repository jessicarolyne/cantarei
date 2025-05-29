'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Salmo extends Model {
    static associate(models) {
      Salmo.hasMany(models.Celebracao, {
        foreignKey: 'salmo_id',
        as: 'celebracoes'
      });
    }
  }
  Salmo.init({
    titulo: DataTypes.STRING,
    video_url: DataTypes.STRING,
    cifra: DataTypes.STRING,
    ano_liturgico: DataTypes.STRING,
    data: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: {
          args: true,
          msg: 'Formato de data invalido. O formato correto deve ser YYYY-MM-DD',
        }
      }
    },
    observacoes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Salmo',
    tableName: 'salmos',
    paranoid: true
  });
  return Salmo;
};