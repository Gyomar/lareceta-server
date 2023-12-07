const { Model, DataTypes, Sequelize } = require('sequelize');

const ENCUES_SATIS_ILFORNO_TABLE = 't001_encues_satis_ilforno';

const EncuesSatisIlfornoSchema = {
  filaId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: 'c001_filaid',
  },
  id: {
    allowNull: false,
    type: DataTypes.UUID,
    field: 'c001_id',
  },
  fecha: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'c001_fecha',
  },
  puntoVenta: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'c001_punto_venta',
  },
  calificaProducto: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'c001_calificacion_producto',
  },
  calificaServicio: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'c001_calificacion_servicio',
  },
  calificaNps: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'c001_calificacion_nps',
  },
  mejora: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'c001_mejora',
  },
  nota: {
    allowNull: true,
    type: DataTypes.TEXT,
    field: 'c001_nota',
  },
  nombre: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'c001_nombre',
  },
  apellido: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'c001_apellido',
  },
  cedula: {
    allowNull: true,
    type: DataTypes.BIGINT,
    field: 'c001_cedula',
  },
  celular: {
    allowNull: true,
    type: DataTypes.BIGINT,
    field: 'c001_celular',
  },
  email: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'c001_email',
  }
}

class EncuesSatisIlforno extends Model {
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ENCUES_SATIS_ILFORNO_TABLE,
      modelName: 'EncuesSatisIlforno',
      timestamps: false
    }
  }
}

module.exports = { ENCUES_SATIS_ILFORNO_TABLE, EncuesSatisIlfornoSchema, EncuesSatisIlforno }