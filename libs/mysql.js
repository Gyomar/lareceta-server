if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const mysql = require("mysql2/promise");

const connectDB = async (query) => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port:process.env.DB_PORT
  });

  await connection.query(query);

  return connection
};


module.exports = connectDB;