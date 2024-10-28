import sqlite3 from "sqlite3";

const db = new sqlite3.Database("mydatabase.db");

// Create tables if they don't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS "prefix_name" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
  );`);

  db.run(`CREATE TABLE IF NOT EXISTS "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT,
    "pfn_id" INTEGER,
    CONSTRAINT "fk_users_prefix_name_1" FOREIGN KEY ("pfn_id") REFERENCES "prefix_name" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "username" UNIQUE ("username")
  );`);

  // Function to check if an id exists and insert if not
  const checkAndInsertPrefixName = (id: number, name: string) => {
    db.get("SELECT id FROM prefix_name WHERE id = ?", [id], (err, row) => {
      if (err) {
        console.error(err.message);
        return;
      }

      if (!row) {
        db.run("INSERT INTO prefix_name (id, name) VALUES (?, ?)", [id, name], (err) => {
          if (err) {
            console.error(err.message);
          } else {
            console.log(`Inserted ${name} with id ${id}`);
          }
        });
      } else {
        console.log(`ID ${id} already exists. Skipping insert.`);
      }
    });
  };

  // Function to check if a username exists and insert if not
  const checkAndInsertUser = (username: string, firstName: string, lastName: string, email: string, pfnId: number) => {
    db.get("SELECT username FROM users WHERE username = ?", [username], (err, row) => {
      if (err) {
        console.error(err.message);
        return;
      }

      if (!row) {
        db.run("INSERT INTO users (username, first_name, last_name, email, pfn_id) VALUES (?, ?, ?, ?, ?)", [username, firstName, lastName, email, pfnId], (err) => {
          if (err) {
            console.error(err.message);
          } else {
            console.log(`Inserted user ${username} into users`);
          }
        });
      } else {
        console.log(`Username ${username} already exists. Skipping insert.`);
      }
    });
  };

  // Check and insert prefix names if necessary
  checkAndInsertPrefixName(1, 'Mr.');
  checkAndInsertPrefixName(2, 'Mr. For Delete');

  // Check and insert user if necessary
  checkAndInsertUser('user_checker', 'user', 'checker', 'user@test.com', 1);

});

export default db;