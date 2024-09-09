import "dotenv/config";
import express, { Express, Application, Request, Response } from "express";
import c_titles from "./controller/titles";
import cors from "cors";
import db_sqlite from "./models/sqlite";
import jwt from "jsonwebtoken";

console.log("Hello World", process.env.MODE);

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ allowedHeaders: "*" }));

app.use(c_titles);
app.use("/api", c_titles);

app.get("/", (req: Request, res: Response) => {
  let token = req.headers.authorization || "Bearer ";
  jwt.verify(token.split(' ')[1], 'MY SECRET KEY', (err, decoded:any) => {
    if (err) {
      return res.status(401).json({ status: false, message: 'Failed to authenticate token' });
    }else{
      return res.send("Hello World!");
    }
  });
  // db_sqlite.run(
  //   "INSERT INTO users (username, password) VALUES (?, ?)",
  //   ["Test", "Password"],
  //   (err) => {
  //     if (err) {
  //       return res.status(400).json({ error: "Username already exists" });
  //     }
  //     res.status(201).json({ message: "User registered successfully" });
  //   }
  // );
});

interface User{
  id:number,
  username: string,
  password: string
}

app.post("/", (req, res) => {
  const { username, password } = req.body;
  console.log(username)
  db_sqlite.get("SELECT * FROM users WHERE username = ?", [username], (err, user: User) => {
    console.log(user)
    if (err || !user || user.password != password) {
      return res.status(401).json({ status: false, error: "Invalid username or password" });
    }

    const token = jwt.sign({ id: user.id }, 'MY SECRET KEY'); 
    res.json({ status: true, token });
  });
  // let myjwt = jwt.sign({id: 1}, 'MY SECRET KEY')
  // res.send(myjwt);
});

app.put("/", () => {});

app.delete("/", () => {});

app.listen(port, () => {
  console.log(`Server http://localhost:${port}`);
});
