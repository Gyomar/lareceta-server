const { models } = require("../libs/sequelize");
const boom = require('@hapi/boom');


class EncuesSatisIlfornoService {
  constructor() {}

  async create(data) {
    const nuevaEncuesta = await models.EncuesSatisIlforno.create(data)
    return nuevaEncuesta;
  }

  async find(query) {
    const opciones = {};
    const { limit, offset } = query;
    if (limit && offset) {
      opciones.limit =  parseInt(limit);;
      opciones.offset =  parseInt(offset);;
    }
    const data = await models.EncuesSatisIlforno.findAll(opciones);
    if(!data){
      throw boom.notFound('encuestas no encontradas');
    }
    const cleanedData = data.map(item => {
      const { nombre, apellido, cedula, celular, email, ...rest } = item.dataValues;
      return { ...rest };
    });
  
    return cleanedData;
  }

  async findOne(id) {
    const encuesta = await models.EncuesSatisIlforno.findByPk(id);
    if (!encuesta) {
      throw boom.notFound('encuesta no encontrada');
    }
    const cleanedData = encuesta.map(item => {
      const { nombre, apellido, cedula, celular, email, ...rest } = item.dataValues;
      return { ...rest };
    });
    return cleanedData;
  }

}

module.exports = EncuesSatisIlfornoService;
