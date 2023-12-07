const { EncuesSatisIlforno, EncuesSatisIlfornoSchema } = require('./encues_satis_ilforno.model');



function setupModels(sequelize) {
  EncuesSatisIlforno.init(EncuesSatisIlfornoSchema, EncuesSatisIlforno.config(sequelize));
}

module.exports = setupModels;