const { Sequelize } = require('sequelize');
const {config} = require('./../config/config');
const setupModels = require('./../db/models');

const options = {
  dialect: 'mysql',
  logging: config.isProd ? false : console.log
}

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

module.exports = sequelize;