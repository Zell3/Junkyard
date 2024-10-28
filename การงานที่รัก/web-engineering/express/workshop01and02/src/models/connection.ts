import mysql from "mysql2/promise";

// Create a connection pool
const db = mysql.createPool({
  // mysql.createConnection
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE_NAME,
  // rowsAsArray: true,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db;
