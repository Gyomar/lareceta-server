const Joi =  require('joi');

const filaId = Joi.number().integer();
const id = Joi.string().uuid();
const fecha = Joi.date();
const puntoVenta = Joi.string().min(3).max(30);
const calificaProducto = Joi.number().integer();
const calificaServicio = Joi.number().integer();
const calificaNps = Joi.number().integer();
const mejora = Joi.string().min(0).max(60).allow(null);
const nota = Joi.string().min(0).max(255).allow(null);
const nombre = Joi.string().min(0).max(120).allow(null);
const apellido = Joi.string().min(0).max(120).allow(null);
const cedula = Joi.number().integer().allow(null);
const celular = Joi.number().integer().allow(null);
const email = Joi.string().min(0).max(120).allow(null);

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createEncuestaSchema = Joi.object({
  fecha: fecha.required(),
  id: id.required(),
  puntoVenta: puntoVenta.required(),
  calificaProducto: calificaProducto.required(),
  calificaServicio: calificaServicio.required(),
  calificaNps: calificaNps.required(),
  mejora: mejora,
  nota: nota,
  nombre: nombre,
  apellido: apellido,
  cedula: cedula,
  celular: celular,
  email: email
});

const getEncuestaSchema = Joi.object({
  filaId: filaId.required(),
});

const queryEncuestaSchema = Joi.object({
  limit,
  offset
});


module.exports = { createEncuestaSchema, getEncuestaSchema, queryEncuestaSchema }