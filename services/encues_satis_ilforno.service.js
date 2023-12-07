const { models } = require("../libs/sequelize");
const boom = require('@hapi/boom');


class EncuesSatisIlfornoService {
  constructor() {}

  async create(data) {
    const nuevaEncuesta = await models.EncuesSatisIlforno.create(data)
    return nuevaEncuesta;
  }

  async count() {
    const contarData = await models.EncuesSatisIlforno.count();
    if (!contarData) {
      throw boom.notFound('encuesta no encontrada');
    }
    return contarData;
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
      throw boom.notFound('enciestas no encontradas');
    }
    return data
  }

  async findOne(id) {
    const encuesta = await models.EncuesSatisIlforno.findByPk(id);
    if (!encuesta) {
      throw boom.notFound('encuesta no encontrada');
    }
    return encuesta;
  }

  async delete(id) {
    const encuesta = await this.findOne(id);
    await encuesta.destroy();
    return { id };
  }
}

module.exports = EncuesSatisIlfornoService;
