// models/salmo.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // ajuste para o caminho real da sua conexão

const Salmo = sequelize.define("Salmo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "O título do salmo é obrigatório"
      }
    }
  },
  tempo_liturgico: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ano_liturgico: {
    type: DataTypes.ENUM("A", "B", "C"),
    allowNull: false
  },
  link_youtube: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cantor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "pessoas", // nome da tabela (não necessariamente do model)
      key: "id"
    }
  }
}, {
  tableName: "salmos",
  timestamps: false
});

export default Salmo;
