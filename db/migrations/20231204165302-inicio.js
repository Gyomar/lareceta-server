'use strict';

const { EncuesSatisIlfornoSchema, ENCUES_SATIS_ILFORNO_TABLE } = require('../models/encues_satis_ilforno.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ENCUES_SATIS_ILFORNO_TABLE, EncuesSatisIlfornoSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.drop(ENCUES_SATIS_ILFORNO_TABLE);
  }
};

