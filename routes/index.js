const express = require('express');

const EncuesSatisIlfornoRouter = require('./encues_satis_ilforno.router');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/encues_satis_ilforno', EncuesSatisIlfornoRouter);
}

module.exports = routerApi;