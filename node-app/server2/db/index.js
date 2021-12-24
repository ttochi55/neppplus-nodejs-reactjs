import mysql from "mysql2/promise";
// import database from "../configs/database.js";
import dotenv from "dotenv";
dotenv.config();

// const connection = await mysql.createConnection(database);
const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export default connection;
