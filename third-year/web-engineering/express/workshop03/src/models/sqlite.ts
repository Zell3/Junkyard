import sqlite3 from "sqlite3";

const db = new sqlite3.Database("mydatabase.db");

// Create a users table if it doesn't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )`);
});

export default db;
