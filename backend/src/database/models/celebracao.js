'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Celebracao extends Model {
    static associate(models) {
      Celebracao.belongsTo(models.TempoLiturgico, {
        foreignKey: 'tempo_liturgico_id',
        // as: 'CelebracaoPessoa'
      });
    }
  }
  Celebracao.init({
    data: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: {
          args: true,
          msg: 'Formato de data invalido. O formato correto deve ser YYYY-MM-DD',
        }
      }
    },
    horario: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Celebracao',
    tableName: 'celebracoes',
    paranoid: true
  });
  return Celebracao;
};