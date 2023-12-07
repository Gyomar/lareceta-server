const mysql = require("mysql2/promise");

const {config} = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASS = encodeURIComponent(config.dbPass);
/*const URI = `postgres://${USER}:${PASS}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({ connectionString: URI });*/


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: USER,
    password: PASS,
    database: process.env.DB_NAME,
    port:process.env.DB_PORT
  });


module.exports = pool;