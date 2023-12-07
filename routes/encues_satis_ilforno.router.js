const express = require("express");

const EncuesSatisIlfornoService = require("../services/encues_satis_ilforno.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
  createEncuestaSchema,
  getEncuestaSchema,
  queryEncuestaSchema,
} = require("../schemas/encues_satis_ilforno.schema");

const router = express.Router();
const service = new EncuesSatisIlfornoService();

router.get("/count",
  async (req, res, next) => {
    try {
      const encuestas = await service.count();
      res.json(encuestas);
    } catch (error) {
      next(error);
    }
  }
);

router.get("/",
  validatorHandler(queryEncuestaSchema, "query"),
  async (req, res, next) => {
    try {
      const encuestas = await service.find(req.query);
      res.json(encuestas);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:filaid",
  validatorHandler(getEncuestaSchema, "params"),
  async (req, res, next) => {
    try {
      const { filaid } = req.params;
      const encuesta = await service.findOne(filaid);
      res.json(encuesta);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createEncuestaSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const nuevaEncuesta = await service.create(body);
      res.status(201).json(nuevaEncuesta);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:filaid",
  validatorHandler(getEncuestaSchema, "params"),
  async (req, res, next) => {
    try {
      const { filaid } = req.params;
      await service.delete(filaid);
      res.status(201).json({ filaid });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
